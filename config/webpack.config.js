// ======================================================
// webpack.config.js
// ======================================================
var config = require('vuex-cli-webpack/lib/config')
var paths = config.utils_paths

module.exports = {
	resolve: {
		alias: {
			'lib': paths.base('lib/'),
			'utils': paths.client('utils/'),
			'routes': paths.base('routes/')
		}
	}
}
