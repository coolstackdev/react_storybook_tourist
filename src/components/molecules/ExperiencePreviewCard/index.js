import React from 'react'
import T from 'prop-types'
import styled, { css } from 'styled-components'
import { palette } from 'styled-tools'
import { withRouter } from 'react-router-dom'
import { useWindowSize } from 'hooks'
import { getTourCost } from 'utils/helpers'
import {
	Heading,
	Rating,
	Card,
	Link,
	Paragraph,
	Image,
	Flex,
} from 'components'
import IconText from '../IconText'

const verticalMarginMixin = css`
	margin-top: 0.3em;
	margin-bottom: 0.15em;
`

const StyledCard = styled(Card)`
	display: flex;
	flex-direction: column;
	align-items: space-between;
	flex-wrap: wrap;
	/* margin: 0 auto; */
	min-width: 16em;
	max-width: 20em;
	margin-left: 1em;
	margin-right: 1em;
`

const StyledImage = styled(Image)`
	height: 12em;
	border-top-left-radius: 0.5rem;
	border-top-right-radius: 0.5rem;
`

const DetailsStrip = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	/* justify-content: space-between; */
	justify-content: flex-start;
	border-bottom-left-radius: 0.5rem;
	border-bottom-right-radius: 0.5rem;
	padding: 0.8rem 1.1rem;
	background-color: ${palette('grayscale', 8)};
	height: 12em;
`

const StyledRating = styled(Rating)`
	${verticalMarginMixin};
	font-size: calc(0.3em + 0.7vw);
	color: ${palette('primary', 1)};

	@media screen and (min-width: 800px) {
		width: 100%;
	}
`

const ExperienceName = styled(Heading)`
	color: ${palette('secondary', 0)};
	font-weight: bold;
	max-width: 80%;
	margin-bottom: 0.4em;
	margin-top: 0.4em;
`

const ExperienceDescription = styled(Paragraph)`
	margin-top: 0.1em;
	color: ${palette('secondary', 2)};
	font-size: 0.9rem;

	@media screen and (min-width: 800px) {
		line-height: 1.2;
	}
`

const TimePriceWrapper = styled(Flex)`
	width: 100%;
	justify-content: space-between;
	/* margin-top: 0.9em; */
	margin-top: auto;
`

const ExperienceTime = styled(IconText)`
	align-self: flex-start;
	color: ${palette('grayscale', 1)};
	font-size: 0.9rem;

	& > :first-child {
		display: none;
		margin-right: .2em;

		@media screen and (min-width: 800px) {
			display: inline-block;
			width: 1em;
		}
	}
`

const ExperiencePrice = styled(IconText)`
	display: flex;
	align-items: center;
	color: ${palette('grayscale', 1)};
	font-size: 0.9rem;

	&:nth-child(2) {
		height: 1.3em;
	}
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

const ExperiencePreviewCard = ({
	experience,
	...props
}) => {
	const sendAnalyticsData = () => {
		dataLayer.push({
			event: 'Experience selected from Experience Page',
			experienceId: experience.experienceid,
			experienceName: experience.title,
		})
		window.analytics.track('Experience selected from Experience Page', {
			experienceId: experience.experienceid,
			experienceName: experience.title,
		})
	}

	return (
		<StyledCard>

			<StyledImage imgSrc={experience.photos[0].photo_url} />

			{/* <DetailsStrip>
				<StyledRating type="experienceCard" initialRating={experience.rating} placeholderValue={experience.rating} />
				<ExperienceName level={4} bold="true">{experience.title}</ExperienceName>

				<ExperienceDescription level={4}>{experience.tag_line}</ExperienceDescription>

				<TimePriceWrapper>
					<ExperienceTime icon="clock" palette="secondary" height={49}>
						{Math.round(experience.duration_in_minutes / 60 * 100) / 100} hours
					</ExperienceTime>

					<ExperiencePrice icon="dollar" palette="secondary" height={49}>
						{Math.round(getTourCost(experience.base_price, props.adults, experience.number_in_base, experience.extra_person_cost) / (props.adults + props.kids))} {experience.currency} per person
					</ExperiencePrice>
				</TimePriceWrapper>
			</DetailsStrip> */}

			<OverlayLink
				to={`/${props.match.params.cityname}/experiences/${experience.nickname}`}
				onClick={sendAnalyticsData}
			/>

		</StyledCard>
	)
}

ExperiencePreviewCard.propTypes = {
	experience: T.object.isRequired,
	match: T.object.isRequired,
	adults: T.number.isRequired,
	kids: T.number.isRequired,
}

export default withRouter(ExperiencePreviewCard)