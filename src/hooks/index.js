const req = require.context('.', false, /^((?!index).)*\.js$/)

req.keys().forEach((key) => {
	const hookName = key.replace(/^\.\/([^.]+)\.js$/, '$1')
	module.exports[hookName] = req(key).default
})
