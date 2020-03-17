import React from 'react'
import T from 'prop-types'
import styled, { css } from 'styled-components'
import { palette } from 'styled-tools'
import { font } from 'styled-theme'
import {
	Heading,
	Card,
	Link,
	Image,
} from 'components'

const StyledCard = styled(Card)`
	display: flex;
	flex-direction: column;
	align-items: space-between;
	flex-wrap: wrap;
	margin-left: .7em;
	margin-right: .7em;
	width: 15em;
	min-height: 28rem;
	padding: 1rem;
`

const StyledImage = styled(Image)`
	height: 22em;
	/* border-radius: 0.8rem; */
`

const CityNameHeading = styled(Heading)`
	font-family: ${font('cursive')};
	color: ${palette('primary', 1)};
	margin-top: 0.6em;
	margin-bottom: 0;
	font-size: 1.4rem;
`

const OverlayLink = styled(Link)`
	position: absolute;
	z-index: 1;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	overflow: hidden;
	text-indent: 200%;
	white-space: nowrap;
	visibility: visible;
	background: transparent;
`

const CityCard = ({
	url,
	nickname,
	...props
}) => {
	const sendAnalyticsData = () => {
		dataLayer.push({
			event: 'City selected from HomePage (CityCard)',
			// experienceId: experience.experienceid,
			// experienceName: experience.title,
		})
		window.analytics.track('City selected from HomePage (CityCard)', {
			// experienceId: experience.experienceid,
			// experienceName: experience.title,
		})
	}

	return (
		<StyledCard>
			<StyledImage imgSrc={url} />
			<CityNameHeading>{nickname}</CityNameHeading>
			<OverlayLink
				to={`/${nickname}/experiences/`}
				onClick={sendAnalyticsData}
			/>
		</StyledCard>
	)
}

CityCard.propTypes = {
}

export default CityCard