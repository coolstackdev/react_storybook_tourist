import React from 'react'
import T from 'prop-types'
import styled, { css } from 'styled-components'
import { palette } from 'styled-tools'
import { withRouter } from 'react-router-dom'
import { useWindowSize } from 'hooks'
import { getTourCost } from 'utils/helpers'
import {
	Avatar,
	Heading,
	Button,
	Rating,
	Carousel,
	Card,
	Icon,
	Link,
	Paragraph,
	SlashedPrice,
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
	margin: 0 auto;
	/* max-width: 1100px; */
	min-width: 320px;

	@media screen and (min-width: 800px) {
		flex-direction: row;
		border-top-right-radius: 0.5rem;
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

const StyledCarousel = styled(Carousel)`
	width: 100%;
	height: 500px;

	@media screen and (min-width: 500px) {
		border-top-left-radius: 0.5rem;
		border-top-right-radius: 0.5rem;
	}

	@media screen and (min-width: 800px) {
		height: 382px;
		width: 75%;
		border-top-left-radius: 0.5rem;
		border-bottom-left-radius: 0.5rem;
		border-top-right-radius: 0;
	}
`

const DetailsStrip = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	border-bottom-left-radius: 0.5rem;
	border-bottom-right-radius: 0.5rem;
	padding: 1.2rem 1.1rem;
	background-color: ${palette('grayscale', 7)};

	@media screen and (min-width: 800px) {
		flex-direction: column;
		width: 25%;
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0.5rem;
		border-top-right-radius: 0.5rem;
	}

	@media screen and (min-width: 1100px) {
		padding: 1.2rem 1.8rem;
	}
`

const TitleWrapper = styled.div`
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;
	width: 100%;

	@media screen and (min-width: 800px) {
		flex-direction: column;
	}
`

const HostWrapper = styled.div`
	position: absolute;
	display: flex;
	flex-direction: row;
	align-items: center;
	position: absolute;
	top: -86px;

	@media screen and (min-width: 800px) {
		position: relative;
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
		height: 14%;
		top: 0;
	}
`

const StyledAvatar = styled(Avatar)`
	max-height: 4rem;
	z-index: 2;
	pointer-events: none;
	float: left;

	@media screen and (min-width: 800px) {
	}
`

const HostName = styled(Heading)`
	${verticalMarginMixin};
	color: ${palette('grayscale', 7)};
	margin-left: .6em;
	font-size: 1.1rem;
	font-weight: bold;
	max-width: 52%;
	display: inline-block;
	align-self: flex-end;
	line-height: 1.2;

	@media screen and (min-width: 800px) {
		color: ${palette('grayscale', 1)};
	}
`

const Shield = styled(Icon)`
	position: absolute;
	right: 0;
	top: 0;
	display: flex;
	align-content: center;
	justify-content: center;
	z-index: 2;
	margin: 0.3em;
	color: ${palette('secondary', 2)};
`

const ExperienceName = styled(Heading)`
	color: ${palette('grayscale', 0)};
	font-weight: bold;
	max-width: 80%;
	margin-bottom: 0;
`

const ExperienceDescription = styled(Paragraph)`
	margin-top: 0.1em;
	color: ${palette('grayscale', 1)};
	font-size: 0.9rem;

	@media screen and (min-width: 800px) {
		line-height: 1.2;
	}
`

const ExperienceTime = styled(IconText)`
	${verticalMarginMixin};
	width: 100%;
	align-self: flex-start;
	color: ${palette('grayscale', 1)};
	margin-bottom: 0;

	& > :first-child {
		display: none;
		margin-right: 1em;

		@media screen and (min-width: 800px) {
			display: inline-block;
			width: 1em;
		}
	}
`

const ExperiencePrice = styled(IconText)`
	${verticalMarginMixin};
	align-self: flex-start;
	color: ${palette('grayscale', 1)};
	margin-top: 0;

	& > :first-child {
		display: none;
		margin-right: 1em;

		@media screen and (min-width: 800px) {
			display: inline-block;
		}
	}

	@media screen and (min-width: 800px) {
		align-self: flex-start;
	}
`

const StyledRating = styled(Rating)`
	${verticalMarginMixin};
	font-size: calc(0.3em + 0.7vw);
	color: ${palette('primary', 1)};

	@media screen and (min-width: 800px) {
		width: 100%;
	}
`

const ButtonWrapper = styled.div`
	position: relative;
	z-index: 5;
	display: flex;
	flex-direction: row;
	justify-content: space-around;

	@media screen and (min-width: 800px) {
		width: 100%;
		margin: 0 auto;
	}

	a {
		&:first-child {
			margin-right: 0.5em;
		}
	}
`

const LetsGoButton = styled(Button)`
	margin-left: 0.1em;

	@media screen and (min-width: 800px) {
		width: 100%;
	}
`

const DeleteButton = styled(Button)`
	background-color: ${palette('tertiary', 1)};
`

const EditButton = styled(Button)`
	background-color: ${palette('primary', 1)};
`

const ExperienceCard = ({
	experience,
	myExperiencesPage,
	...props
}) => {
	let { width } = useWindowSize()
	let mobile = width < 800

	const sendAnalyticsData = () => {
		dataLayer.push({
			event: 'Experience selected from Search Page',
			experienceId: experience.experienceid,
			experienceName: experience.title,
		})
		window.analytics.track('Experience selected from Search Page', {
			experienceId: experience.experienceid,
			experienceName: experience.title,
		})
	}

	const ourPrice = Math.floor(experience.fixed_cost + (experience.fixed_cost_pp) + (experience.hourly_rate * (experience.duration_in_minutes / 60)))

	return (
		<StyledCard>

			<Shield icon="shield" size={35} />

			<StyledCarousel images={experience.photos} />

			<DetailsStrip>
				<TitleWrapper>
					<StyledRating type="experienceCard" initialRating={experience.rating} placeholderValue={experience.rating} />
					<ExperienceName level={4} bold="true">{experience.title}</ExperienceName>
				</TitleWrapper>

				<ExperienceDescription level={4}>{experience.tag_line}</ExperienceDescription>

				<HostWrapper>
					<StyledAvatar avatarUrl={experience.host_thumbnail_url} />
					<HostName level={4}>{experience.host_name}</HostName>
				</HostWrapper>

				<ExperienceTime icon="clock" palette="secondary" height={49}>
					{Math.round(experience.duration_in_minutes / 60 * 100) / 100} hours
				</ExperienceTime>

				<ExperiencePrice icon="dollar" palette="secondary" height={49}>
					{'Starting from $'}
					{ourPrice}
				</ExperiencePrice>

				{myExperiencesPage ?
					<ButtonWrapper>
						<EditButton
							to={`/my-experiences/${experience.nickname || experience.experienceid}/edit`}
						>
							Edit
						</EditButton>
						<DeleteButton onClick={() => props.removeExperience(experience.experienceid)}>Delete</DeleteButton>
					</ButtonWrapper>
					:
					<ButtonWrapper onClick={sendAnalyticsData}>
						<LetsGoButton to={{
							pathname: `/${props.match.params.cityname}/experiences/${experience.nickname}`,
							state: props.location.state
						}}
						palette="tertiary">
							Explore more
						</LetsGoButton>
					</ButtonWrapper>
				}

			</DetailsStrip>

			{!mobile && !myExperiencesPage &&
				<OverlayLink
					to={`/${props.match.params.cityname}/experiences/${experience.nickname}`}
					onClick={sendAnalyticsData}
				/>
			}

		</StyledCard>
	)
}

ExperienceCard.propTypes = {
	experience: T.object.isRequired,
	match: T.object.isRequired,
	adults: T.number,
	kids: T.number,
}

export default ExperienceCard