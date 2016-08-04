// ------------------------------------
// Constants
// ------------------------------------
const SET_ENV = 'SET_ENV'

// ------------------------------------
// States
// ------------------------------------
const state = {
	auth: false
}

// ------------------------------------
// Getters
// ------------------------------------
const getters = {
	auth: state => state.auth
}

// ------------------------------------
// Action Handlers
// ------------------------------------
export const actions = {
	//设置 
	setEnv({ commit }, payload) {
		commit(SET_ENV, payload)
	}
}

// ------------------------------------
// Mutations
// ------------------------------------
export const mutations = {
	[SET_ENV](state, payload) {
		Object.assign(state, payload)
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}