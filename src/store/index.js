import Vue from 'vue';
import Vuex from 'vuex';

import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

const state = {
	
	selectedProject: {
		id: 1,
		name: '',
		date_begin: '',
		date_end: '',
		status: '',
	},
	
	selectedTask: {
		id: 1,
		name: '',
	}
	
}

const getters = {
	
	selectedProject: (state, getters) => {
	    return state.selectedProject;
	},
	
	selectedTask: (state, getters) => {
	    return state.selectedTask;
	},
	
}

const mutations = {
	
	/*
	selectPro (state, payload) {
	    state.id = payload.id;
	}
	*/
}

const actions = {
	
}

const system = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

export default new Vuex.Store({
	modules: {
		system,
	},
	plugins: [createPersistedState()],
});