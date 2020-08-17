import axios from "axios";
import * as types from "../mutation-types";
import api from "../../../api/api";

export const state = {
  memberCompanies: [],
  memberFoots: [],
  memberDivisions: [],
  memberJobTitle: [],
  memberInOut: []
};

// getters
export const getters = {
  memberCompanies: state => state.memberCompanies,
  memberFoots: state => state.memberFoots,
  memberDivisions: state => state.memberDivisions,
  memberJobTitle: state => state.memberJobTitle,
  memberInOut: state => state.memberInOut
};

// mutations
export const mutations = {
  [types.CHART.MEMBER_COMPANIES](state, member) {
    state.memberCompanies = member;
  },

  [types.CHART.MEMBER_FOOTS](state, member) {
    state.memberFoots = member;
  },

  [types.CHART.MEMBER_DIVISIONS](state, member) {
    state.memberDivisions = member;
  },

  [types.CHART.MEMBER_JOB_TITLE](state, member) {
    state.memberJobTitle = member;
  },

  [types.CHART.MEMBER_IN_OUT](state, member) {
    state.memberInOut = member;
  }
};

// actions
export const actions = {
  async getChartsData({ commit }) {
    let url = `${api.CHART_INFORMATION}`;
    const response = await axios.get(url);
    commit(types.CHART.MEMBER_COMPANIES, response.data.memberCompanies);
    commit(types.CHART.MEMBER_FOOTS, response.data.memberFoots);
    commit(types.CHART.MEMBER_DIVISIONS, response.data.memberDivisions);
    commit(types.CHART.MEMBER_JOB_TITLE, response.data.memberJobTitle);
  },

  async getChartsDataJoinOut({ commit }, param) {
    let url = `${api.CHART_INFORMATION}/chart`;
    const response = await axios.get(url, {
      params: {
        option: param
      }
    });
    commit(types.CHART.MEMBER_IN_OUT, response.data);
  }
};
