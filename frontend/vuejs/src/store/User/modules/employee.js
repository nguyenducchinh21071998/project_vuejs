import axios from "axios";
import * as types from "../mutation-types";
import api from "../../../api/api";

export const state = {
  employees: [],
  employee: {},
  pagination: {
    from: 0,
    to: 0,
    totalPage: 0,
    path: "",
    currentPage: 0,
    totalRecord: 0,
    perPage: 0
  },
  createEmployees: null,
  statusCreateEmployees: null,
  getEmployee: {},
  checkEmployee: null,
  statusUpdateEmployee: null,
  getInformationBusinessEmployee: {}
};

// getters
export const getters = {
  employees: state => state.employees,
  pagination: state => state.pagination,
  employee: state => state.employee,
  createEmployees: state => state.createEmployees,
  statusCreateEmployees: state => state.statusCreateEmployees,
  getEmployee: state => state.getEmployee,
  statusUpdateEmployee: state => state.statusUpdateEmployee,
  getInformationBusinessEmployee: state => state.getInformationBusinessEmployee
};

// mutations
export const mutations = {
  [types.EMPLOYEE.FETCH_EMPLOYEE](state, employees) {
    state.employees = employees;
    state.pagination.from = employees.from;
    state.pagination.to = employees.to;
    state.pagination.totalPage = employees.last_page;
    state.pagination.path = employees.path;
    state.pagination.currentPage = employees.current_page;
    state.pagination.totalRecord = employees.total;
    state.pagination.perPage = employees.per_page;
  },
  [types.EMPLOYEE.SHOW_EMPLOYEE](state, employee) {
    state.employee = employee;
  },
  [types.EMPLOYEE.CREATE_EMPLOYEE](state, res) {
    state.statusCreateEmployees = res;
  },

  [types.EMPLOYEE.GET_EMPLOYEE](state, res) {
    state.getEmployee = res;
  },

  [types.EMPLOYEE.UPDATE_EMPLOYEE](state, res) {
    state.statusUpdateEmployee = res;
  },

  [types.EMPLOYEE.GET_INFO_EMPLOYEE](state, res) {
    state.getInformationBusinessEmployee = res;
  }
};

// actions
export const actions = {
  async fetchEmployee({ commit }, payload) {
    let job_status = null;
    if (payload.jobStatus) {
      job_status = payload.jobStatus;
    }
    const response = await axios.get(api.LIST_EMPLOYEE, {
      params: {
        per_page: payload.optionPage,
        page: payload.currentPage,
        name: payload.name,
        work_type: payload.work_type !== "" ? payload.work_type : null,
        job_title_id: payload.job_title_id,
        company_id: payload.company_id,
        japanese_level: payload.japanese_level,
        foot_id: payload.footId,
        division_id: payload.divisionId,
        position_id: payload.positionId,
        job_status: job_status
      }
    });
    commit(types.EMPLOYEE.FETCH_EMPLOYEE, response.data.employees);
  },
  async createEmployee({ commit }, params) {
    const response = await axios.post(api.CREATE_EMPLOYEE, params);
    // TODO show message create success or fail
    commit(types.EMPLOYEE.CREATE_EMPLOYEE, response.status);
  },

  async updateEmployee({ commit }, params) {
    let url = `${api.UPDATE_EMPLOYEE}/${params.id}`;
    const response = await axios.post(url, params.data);
    // TODO show message update success or fail
    commit(types.EMPLOYEE.UPDATE_EMPLOYEE, response.status);
  },

  async getInformationBusinessEmployee(commit) {
    let url = `${api.GET_INFORMATION_EMPLOYEE}/create`;
    const response = await axios
      .get(url)
      .then(res => res)
      .catch(error => {
        return error.response;
      });
    state.checkEmployee = response.status;
    if (response.status == 200) {
      commit(types.EMPLOYEE.GET_INFO_EMPLOYEE, response.data);
    }
  },

  async getEmployee({ commit }, params) {
    let url = `${api.GET_EMPLOYEE}/${params}/edit`;
    const response = await axios
      .get(url)
      .then(res => res)
      .catch(error => {
        return error.response;
      });
    state.checkEmployee = response.status;
    if (response.status == 200) {
      commit(types.EMPLOYEE.GET_EMPLOYEE, response.data);
    }
  },

  async showEmployee({ commit }, employeeId) {
    const response = await axios.get(api.SHOW_EMPLOYEE + "/" + employeeId);
    commit(types.EMPLOYEE.SHOW_EMPLOYEE, response.data);
  },

  async deleteEmployee({ commit }, employeeId) { // eslint-disable-line no-unused-vars

    await axios.delete(api.DELETE_EMPLOYEE + "/" + employeeId);
  },

  resignationEmployee(payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(api.RESIGNATION + "/" + payload.employeeId, {
          resignation_date: payload.resignationDate,
          resignation_reason: payload.resignationReason
        })
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};
