const req = require.context('.', false, /^((?!index).)*\.js$/)

req.keys().forEach((key) => {
	const explanation = key.replace(/^\.\/([^.]+)\.js$/, '$1')
	module.exports[explanation] = req(key).default
})
