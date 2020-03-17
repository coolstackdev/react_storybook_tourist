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
	border-radius: 58px;
	overflow: auto;
	box-shadow:0 0 13px rgba(0,0,0,0.8);

	@media screen and (min-width: 800px) {
		flex-direction: row;
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
	height: 250px;

	@media screen and (min-width: 500px) {
		border-top-left-radius: 0.5rem;
		border-top-right-radius: 0.5rem;
	}

	@media screen and (min-width: 800px) {
		height: 382px;
		width: 68%;
		border-top-left-radius: 0.5rem;
		border-bottom-left-radius: 0.5rem;
		border-top-right-radius: 0;
	}
`

const DetailsStrip = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 0.8rem 1.1rem;
	background-color: ${palette('grayscale', 7)};

	@media screen and (min-width: 800px) {
		width: 32%;
		padding: 1.2rem 0.8rem 41px 1.8rem;
	}

	// @media screen and (min-width: 1100px) {
	// 	padding: 1.2rem 1.8rem;
	// }
`

const TitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;

	@media screen and (min-width: 800px) {
	}
`

const HostWrapper = styled.div`
	position: relative;
	margin: 0.4rem 0;
	height: 14%;
	top: 0;
	align-items: center;
	display: flex;
	flex-direction: row;

	@media screen and (min-width: 800px) {
		margin: 0.5rem 0;
	}
`

const StyledAvatar = styled(Avatar)`
	max-height: 4rem;
	z-index: 2;
	pointer-events: none;
	float: left;

	& img {
		width: 30px;
		height: 30px;
	}

	@media screen and (min-width: 800px) {
		& img {
			width: 50px;
			height: 50px;
		}
	}
`

const HostName = styled(Heading)`
	${verticalMarginMixin};
	color: ${palette('grayscale', 1)};
	margin-left: .6em;
	font-size: 13px;
	font-weight: bold;
	max-width: 52%;
	display: inline-block;
	align-self: flex-end;
	line-height: 1.2;
	margin-top: 0px;
	margin-bottom: 10px;

	@media screen and (min-width: 800px) {
		color: ${palette('grayscale', 1)};
		margin-bottom: 15px;
		font-size: 1rem;
	}
`

const Shield = styled(Icon)`
	position: absolute;
	display: flex;
	align-content: center;
	justify-content: center;
	z-index: 2;
	margin: 0.3em;
	color: ${palette('secondary', 2)};
	right:  45%;
	top: 14px;

	@media screen and (max-width: 500px) {
		top: -1px;
		right: 70%;
		width: 17px;
	}
`

const ExperienceName = styled(Heading)`
	color: ${palette('grayscale', 0)};
	font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
	margin-bottom: 5px;
	margin-top: 5px;

	@media screen and (min-width: 800px) {
		font-size: 20px;
	}
`

const ExperienceDescription = styled(Paragraph)`
	margin-top: 0.1em;
	color: ${palette('grayscale', 1)};
	font-size: 13px;

	@media screen and (min-width: 800px) {
		line-height: 1.5;
		font-size: 16px;
	}
`

const ExperienceTime = styled(IconText)`
	${verticalMarginMixin};

	align-self: flex-start;
	color: black;
	display: flex;
	flex-direction: row;
	margin: 0 0 0 3px;
	font-size: 13px;

	& > :first-child {
		margin: 0;
		margin-right: 5px;
		width: 22px;
    height: 18px;
	}


	@media screen and (min-width: 800px) {
		font-size: 16px;

		& > :first-child {
			display: inline-block;
			width: 26.5px;
			height: 26.5px;
			margin-left: 3px;
			margin-right: 20px;
			margin-bottom: 10px;
		}

		& > :last-child {
			margin-top: 7px;
		}
	}
`

const ExperiencePrice = styled.div`
	font-size: 20px;

	& span:first-child {
		font-weight: bold;
	}
`

const BeforeDiscount = styled.span`
	text-decoration-line: line-through;
`

const Percent = styled.span`
	font-weight: bold;
	color: #f00;
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
	border-radius: 22.5px;
	font-weight: 500;
	width: 50%;
	margin-top: 5px;

	@media screen and (min-width:800px) {
		width: 62%;
	}
`

const DeleteButton = styled(Button)`
	background-color: ${palette('tertiary', 1)};
`

const EditButton = styled(Button)`
	background-color: ${palette('primary', 1)};
`

const FixedName = styled.span`
	font-weight: normal
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

	const ourPrice = ((experience.fixed_cost + (experience.fixed_cost_pp) + (experience.hourly_rate * (experience.duration_in_minutes / 60))) * (1 + (experience.commission / 100))).toFixed(2)
	const beforeDiscount = (ourPrice * (100 / (100 - experience.discount))).toFixed(2)

	return (
		<StyledCard>
			<StyledCarousel images={experience.photos} />
			<DetailsStrip>
				<Shield icon="shield" size={25} />
				<TitleWrapper>
					<StyledRating type="experienceCard" initialRating={experience.rating} placeholderValue={experience.rating} />
					<ExperienceName level={4} bold="true">{experience.title}</ExperienceName>
				</TitleWrapper>

				<ExperienceDescription level={4}>{experience.tag_line}</ExperienceDescription>

				<HostWrapper>
					<StyledAvatar avatarUrl={experience.host_thumbnail_url} />
					<HostName level={4}>
						{experience.host_name}
					</HostName>
				</HostWrapper>

				<ExperienceTime icon="passage-of-time" palette="secondary" height={49}>
					{Math.round(experience.duration_in_minutes / 60 * 100) / 100} hours
				</ExperienceTime>

				<ExperiencePrice>
					<span>{'Starting'}&nbsp;</span>
					<span>{experience.currency} </span>
					{experience.discount !== 0 && <BeforeDiscount>{beforeDiscount}</BeforeDiscount>}
					<span>&nbsp;{ourPrice}</span>
					{experience.discount !== 0 && <Percent> ({experience.discount}% off)</Percent> }
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
							Let's go
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