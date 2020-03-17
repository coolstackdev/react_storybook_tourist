require("@babel/register")({
	extends: './.babelrc',
});

const router = require('./sitemap-routes').default;
const Sitemap = require('react-router-sitemap').default;

(
	new Sitemap(router)
		.build("https://www.instahop.io")
		.save("./public/sitemap.xml")
)
