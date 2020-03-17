const req = require.context('.', false, /^((?!index).)*\.js$/)

req.keys().forEach((key) => {
	const panel = key.replace(/^\.\/([^.]+)\.js$/, '$1')
	module.exports[panel] = req(key).default
})
