import axios from "axios";
import * as types from "../mutation-types";
import api from "../../../api/api";

export const state = {
  listItemsPerPage: [10, 25, 50, 100],
  foots: [],
  divisions: [],
  positions: [],
  jobTitle: [],
  japaneseLevel: [0, 1, 2, 3, 4, 5], // 1: N1, 2: N2, 3: N3, 4: N4, 5: N5
  jobLevel: [1, 2, 3, 4, 5], // 1: Dev1, 2: Dev2, 3: Dev3, 4: Dev4, 5: Dev 5
  gender: [1, 2], // 1: male, 2: female
  workType: [],
  companies: [],
  rank: [1, 2, 3] // 1: "1", 2: "2", 3: "3",
};

// getters
export const getters = {
  listItemsPerPage: state => state.listItemsPerPage,
  foots: state => state.foots,
  divisions: state => state.divisions,
  positions: state => state.positions,
  jobTitle: state => state.jobTitle,
  japaneseLevel: state => state.japaneseLevel,
  jobLevel: state => state.jobLevel,
  gender: state => state.gender,
  workType: state => state.workType,
  companies: state => state.companies,
  rank: state => state.rank
};

// mutations
export const mutations = {
  [types.COMMONS.FOOTS](state, foots) {
    state.foots = foots;
  },
  [types.COMMONS.DIVISIONS](state, divisions) {
    state.divisions = divisions;
  },
  [types.COMMONS.POSITIONS](state, positions) {
    state.positions = positions;
  },
  [types.COMMONS.JOBTITLE](state, jobTitle) {
    state.jobTitle = jobTitle;
  },
  [types.COMMONS.WORKTYPE](state, workType) {
    state.workType = workType;
  },
  [types.COMMONS.COMPANIES](state, companies) {
    state.companies = companies;
  }
};

// actions
export const actions = {
  async getCommonsData({ commit }) {
    if (
      state.foots.length === 0 ||
      state.divisions.length === 0 ||
      state.positions.length === 0 ||
      state.jobTitle.length === 0 ||
      state.companies.length === 0
    ) {
      const response = await axios.get(api.LIST_COMMON);
      commit(types.COMMONS.FOOTS, response.data.foots);
      commit(types.COMMONS.DIVISIONS, response.data.divisions);
      commit(types.COMMONS.POSITIONS, response.data.positions);
      commit(types.COMMONS.JOBTITLE, response.data.jobTitle);
      commit(types.COMMONS.WORKTYPE, response.data.workType);
      commit(types.COMMONS.COMPANIES, response.data.companies);
    }
  }
};
