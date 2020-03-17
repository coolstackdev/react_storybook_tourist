const req = require.context('.', false, /^((?!index).)*\.js$/)

req.keys().forEach((key) => {
	const container = key.replace(/^\.\/([^.]+)\.js$/, '$1')
	module.exports[container] = req(key).default
})
