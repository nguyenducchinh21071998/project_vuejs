/* eslint-disable no-mixed-spaces-and-tabs */
import * as types from '../mutation-types';

// state
export const state = {
    sidebarShow: 'responsive',
    sidebarMinimize: false,
    loading: false
};

// mutations
export const mutations = {
    [types.LAYOUT.TOGGLE_SIDEBAR_DESKTOP](state) {
        const sidebarOpened = [true, 'responsive'].includes(state.sidebarShow);
        state.sidebarShow = sidebarOpened ? false : 'responsive';
    },
    [types.LAYOUT.TOGGLE_SIDEBAR_MOBILE](state) {
        const sidebarClosed = [false, 'responsive'].includes(state.sidebarShow);
        state.sidebarShow = sidebarClosed ? true : 'responsive';
    },
    [types.LAYOUT.SET_SIDEBAR](state, [variable, value]) {
        state[variable] = value;
    },
    [types.LAYOUT.SET_LOADING](state, value) {
        state.loading = value;
    },
};

// actions
export const actions = {
    toggleSidebarDesktop({commit}) {
        commit(types.LAYOUT.TOGGLE_SIDEBAR_DESKTOP);
    },
    toggleSidebarMobile({commit}) {
        commit(types.LAYOUT.TOGGLE_SIDEBAR_MOBILE);
    },
    setSidebar({commit},[variable, value]) {
        console.log(variable, value);
        commit(types.LAYOUT.SET_SIDEBAR, [variable, value]);
    },
    setLoading({commit}, value) {
        commit(types.LAYOUT.SET_LOADING, value);
    }
};
