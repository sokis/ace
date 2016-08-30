// ======================================================
// NODE_ENV === 'development'
// ======================================================

var config = require('vuex-cli-webpack/lib/config')

module.exports = {
	compiler_devtool: null, // 调试的时候注释
	proxy: {
		enabled: true,
		options: {
			host: 'https://cnodejs.org/',
			match: /^\/apis\/.*/
		}
	}
}