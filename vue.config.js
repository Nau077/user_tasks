const path = require('path')

module.exports = {
	publicPath: '/vue-users-task/',
	lintOnSave: 'warning',
	pluginOptions: {
		'style-resources-loader': {
			preProcessor: 'scss',
			patterns: [path.resolve(__dirname, './src/styles/main.scss')]
		}
	}
}
