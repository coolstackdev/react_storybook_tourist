import React from 'react'
import T from 'prop-types'
import Helmet from 'react-helmet'

const SEO = ({
	title,
	description,
	keywords,
	robots,
	subject,
	copyright,
	language,
}) => {
	return (
		<div>
			<Helmet>
				<title>{`Instahop | ${title}`}</title>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
				<meta name="language" content={language} />
				<meta name="robots" content={robots} />
				<meta name="subject" content={subject} />
				<meta name="copyright" content={copyright} />
			</Helmet>
		</div>
	)
}

SEO.defaultProps = {
	title: 'Instahop',
	copyright: 'Hopohop Experiences Inc.',
	language: 'EN',
	robots: 'index,follow',
}

export default SEO