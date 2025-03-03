module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true
	},
	'extends': ['plugin:vue/vue3-essential', '@vue/eslint-config-typescript'],
	'overrides': [
		{
			'env': {
				'node': true
			},
			'files': ['.eslintrc.{js,cjs}'],
			'parserOptions': {
				'sourceType': 'script'
			}
		}
	],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'rules': {}
};
