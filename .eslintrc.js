module.exports = {
	'root': true,
	'env': {
		node: true
	},
	'extends': [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'google'
	],
	'parserOptions': {
		parser: 'babel-eslint'
	},
	'rules': {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'max-len': ['error', {'code': 80}],
		'semi': ['error', 'never'],
		'comma-dangle': ['error', 'never'],
		'no-tabs': 'off',
		'indent': ['error', 'tab'],
		'arrow-parens': 'off'
	}
}
