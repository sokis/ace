import request from 'plato-request'
import * as api from 'store/constants/api'

function params(data = {}) {
	let params = [], keys = Object.keys(data)
	for (let i = 0, l = keys.length; i < l; i++) {
		let key = keys[i], value = data[key]
		params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value))
	}
	return params.join('&')
}

// Request 
function _request() {

	if (__MOCK__) {
		url = `/apis/${url}`
	} else {
		url = api[url]
	}

	if (options.method === 'POST') {
		options.body = params(options.body)
	}

	let opts = Object.assign({
		credentials: 'include',
		headers: {
			'Accept': 'application/json,text/javascript,*/*;q=0.01',
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
		}
	}, options)

	return url && request(url, opts).then(json => {

		// 异常控制
		try {
			if (typeof (json) !== 'object') {
				json = JSON.parse(json)
			}
		} catch (e) {
			throw new Error("JSON.PARSE")
		}

		if (json.errorCode) {
			throw new Error(json.errorMessage)
		}

		return json
	})
}

const defaultParams = {
	cookie: document.cookie
}

// GET
function GET(url, query = {}, options = {}) {

	return _request(url, {
		query: Object.assign({}, defaultParams, query),
		...options
	})
}

// POST
function POST(url, body = {}, options = {}) {

	return _request(url, {
		body: Object.assign({}, defaultParams, body),
		...options
	})
}


export default {
	GET,
	POST
}