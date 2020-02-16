module.exports = {
	root: true,

	env: {
		node: true
	},

	extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],

	rules: {
		'no-mixed-spaces-and-tabs': 0,
		warnings: true,
		errors: false,
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'prettier/prettier': [
			'warn',
			{
				singleQuote: true,
				semi: false,
				trailingComma: 'none',
				useTabs: true
			}
		]
	},

	parserOptions: {
		parser: 'babel-eslint'
	},

	overrides: [
		{
			files: [
				'**/__tests__/*.{j,t}s?(x)',
				'**/tests/unit/**/*.spec.{j,t}s?(x)'
			],
			env: {
				jest: true
			}
		}
	]
}
