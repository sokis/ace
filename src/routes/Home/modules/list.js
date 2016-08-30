import {GET, POST} from 'utils/request'
import {
	PROMISE_SUCCESS
} from 'store/constants'

// ------------------------------------
// Constants
// ------------------------------------
export const GET_LIST = 'GET_LIST'
export const SET_PAGE = 'SET_PAGE'

// ------------------------------------
// States
// ------------------------------------
const state = {
	page: 1,
    list: []
}

// ------------------------------------
// Getters
// ------------------------------------
const getters = {
	list: state => state.list,
	page: state => state.page,
}


// ------------------------------------
// Action Handlers
// ------------------------------------
const actions = {
    getAticles({ commit }, query) {
		console.log(arguments[0])
        commit(GET_LIST, GET(GET_LIST, {
			query
		}))
    },
	setPage({commit}, page) {
		commit(SET_PAGE, page)
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
    },
    [SET_PAGE](state, payload) {
		state.page = payload
    }
}

export default {
	state,
	getters,
	actions,
	mutations
}