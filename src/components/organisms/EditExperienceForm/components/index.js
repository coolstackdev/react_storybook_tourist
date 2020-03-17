const req = require.context('.', false, /^((?!index).)*\.js$/)

req.keys().forEach((key) => {
	const component = key.replace(/^\.\/([^.]+)\.js$/, '$1')
	module.exports[component] = req(key).default
})
