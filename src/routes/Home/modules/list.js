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
        commit(GET_LIST, request('/api/v1/topics'))
    }
}

// ------------------------------------
// Mutations
// ------------------------------------
const mutations = {
    [GET_LIST](state, {payload, meta}) {
		if (PROMISE_SUCCESS === meta) {
			state.list = payload.data
		}
    }
}

export default {
	state,
	getters,
	actions,
	mutations
}