import axios from "axios";
import * as types from "../mutation-types";
import api from "../../../api/api";

export const state = {
  customers: [],
  customer: {},
  customerEdit: {},
  updateCustomer: {},
  createCustomer: {},
  pagination: {
    from: 0,
    to: 0,
    totalPage: 0,
    path: "",
    currentPage: 0,
    totalRecord: 0,
    perPage: 0
  }
};

// getters
export const getters = {
  customers: state => state.customers,
  pagination: state => state.pagination,
  customer: state => state.customer,
  customerEdit: state => state.customerEdit,
  updateCustomer: state => state.updateCustomer,
  createCustomer: state => state.createCustomer
};

// mutations
export const mutations = {
  [types.CUSTOMER.FETCH_CUSTOMER](state, customers) {
    state.customers = customers;
    state.pagination.from = customers.from;
    state.pagination.to = customers.to;
    state.pagination.totalPage = customers.last_page;
    state.pagination.path = customers.path;
    state.pagination.currentPage = customers.current_page;
    state.pagination.totalRecord = customers.total;
    state.pagination.perPage = customers.per_page;
  },
  [types.CUSTOMER.DETAIL_CUSTOMER](state, customer) {
    state.customer = customer;
  },
  [types.CUSTOMER.EDIT_CUSTOMER](state, customerEdit) {
    state.customerEdit = customerEdit;
  },
  [types.CUSTOMER.UPDATE_CUSTOMER](state, updateCustomer) {
    state.updateCustomer = updateCustomer;
  },
  [types.CUSTOMER.CREATE_CUSTOMER](state, createCustomer) {
    state.createCustomer = createCustomer;
  }
};

// actions
export const actions = {
  async fetchCustomer({ commit }, payload) {
    const response = await axios.get(api.LIST_CUSTOMER, {
      params: {
        per_page: payload.optionPage,
        page: payload.currentPage,
        company_name: payload.company_name,
        customer_status: payload.customer_status,
        customer_type: payload.customer_type
      }
    });
    commit(types.CUSTOMER.FETCH_CUSTOMER, response.data.customers);
  },
  async showDetail({ commit }, id) {
    const response = await axios.get(api.LIST_CUSTOMER + "/" + id);
    commit(types.CUSTOMER.DETAIL_CUSTOMER, response.data);
  },
  async edit({ commit }, id) {
    let url = `${api.LIST_CUSTOMER}/${id}/edit`;
    const response = await axios
      .post(url)
      .then(res => res)
      .catch(error => {
        return error.response;
      });
    commit(types.CUSTOMER.EDIT_CUSTOMER, response.data);
  },
  async update({ commit }, data) {
    let url = `${api.LIST_CUSTOMER}/update`;
    const response = await axios.post(url, data).then(res => res);
    commit(types.CUSTOMER.UPDATE_CUSTOMER, response.data);
  },
  async create({ commit }, data) {
    let url = `${api.LIST_CUSTOMER}/create`;
    const response = await axios.post(url, data);
    commit(types.CUSTOMER.CREATE_CUSTOMER, response.data);
  },
  async delete({ commit }, data) {
    // eslint-disable-line no-unused-vars
    let url = `${api.LIST_CUSTOMER}/delete/${data}`;
    await axios.post(url);
  }
};
