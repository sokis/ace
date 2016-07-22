import request from 'plato-request'
import {
	PROMISE_SUCCESS
} from 'store/constants'

// ------------------------------------
// Constants
// ------------------------------------
export const GET_LIST = 'GET_LIST'

// ------------------------------------
// States
// ------------------------------------
const state = {
    list: []
}

// ------------------------------------
// Getters
// ------------------------------------
const getters = {
	list: state => state.list
}
// ------------------------------------
// Action Handlers
// ------------------------------------
const actions = {
    getAticles({ commit }, payload) {
        commit(GET_LIST, request('/api/4/news/before/20160722'))
    }
}

// ------------------------------------
// Mutations
// ------------------------------------
const mutations = {
    [GET_LIST](state, {payload, meta}) {
		if (PROMISE_SUCCESS === meta) {
			state.list = payload.stories
		}
    }
}

export default {
	state,
	getters,
	actions,
	mutations
}