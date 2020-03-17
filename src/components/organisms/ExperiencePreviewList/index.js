import React, { useEffect } from 'react'
import T from 'prop-types'
import styled from 'styled-components'
import { font } from 'styled-theme'
import { palette } from 'styled-tools'
import Slider from "react-slick"
import "./slick.scss"
import "./slick-theme.scss"
import './styles.scss'
import {
	ExperiencePreviewCard,
	Heading,
	Icon,
} from 'components'

const Container = styled.div`
	position: relative;
`

const StyledSlider = styled(Slider)`
	.slick-list {
		padding-bottom: 30px;
	}
`

const SectionHeading = styled(Heading)`
	font-weight: bold;
	text-align: center;
	color: ${palette('secondary', 0)};
	margin-top: 1.4em;
	margin-bottom: 1.4em;
`

const Arrow = styled(Icon)`
	position: absolute;
	bottom: 42%;
	font-size: 1.6em;
	z-index: 3;
	background-color: ${palette('grayscale', 8)};
	border-radius: 50%;
	padding: 0.3em;
	height: 2em;
	width: 2em;
	opacity: 0.9;

	@media screen and (min-width: 800px) {
		font-size: 2em;
	}
`

const PrevArrow = styled(Arrow)`
	left: 0;
`

const NextArrow = styled(Arrow)`
	right: 0;
`

const ExperiencePreviewList = ({
	list,
	experienceId,
	loading,
	cityName,
	...props
}) => {
	var settings = {
		dots: false,
		infinite: true,
		arrows: false,
		speed: 500,
		// slidesToShow: slidesVisible(),
		variableWidth: true,
		slidesToScroll: 1
	}

	let slider
	const next = () => {
		slider.slickNext();
	}
	const previous = () => {
		slider.slickPrev();
	}

	const experienceList = list.map(experience => {
		return (
			<ExperiencePreviewCard
				key={experience.experienceid}
				experience={experience}
				experienceId={experienceId}
				adults={2}
				kids={2}
				{...props}
			/>
		)
	})

	return (
		<>
			{/* {loading &&
				<Spinner />
			} */}
			{loading ||
				<>
					<Container>
						<SectionHeading>More Experiences in {cityName}</SectionHeading>
						<PrevArrow icon="backwards" onClick={previous}/>
						<StyledSlider ref={c => slider = c} {...settings}>
							{experienceList}
						</StyledSlider>
						<NextArrow icon="forwards" onClick={next} />
					</Container>
				</>
			}
		</>
	)

}

ExperiencePreviewList.propTypes = {
	list: T.arrayOf(T.shape({
		experienceid: T.string.isRequired,
		title: T.string.isRequired,
		host_name: T.string.isRequired,
		host_thumbnail_url: T.string.isRequired,
		rating: T.number.isRequired,
		tag_line: T.string.isRequired,
		duration_in_minutes: T.number.isRequired,
		base_price: T.number.isRequired,
		number_in_base: T.number.isRequired,
		extra_person_cost: T.number.isRequired,
		currency: T.string.isRequired,
	})),
	loading: T.bool,
}

export default ExperiencePreviewList