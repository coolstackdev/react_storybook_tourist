import React from 'react'
import T from 'prop-types'
import styled from 'styled-components'
import { font } from 'styled-theme'
import { palette } from 'styled-tools'
import Slider from "react-slick"
import '../../organisms/ExperiencePreviewList/slick.scss'
import '../../organisms/ExperiencePreviewList/slick-theme.scss'
import {
	Heading,
	Icon,
	Polaroid
} from 'components'
import { ExperiencedCard } from 'components'

const Container = styled.div`
	position: relative;
	width: 100%;
	padding: 0 60px;
	.slick-track {
		padding-bottom: 32px;
	}
  margin-top: 20px;
	margin-bottom: 30px;
	
	@media screen and (max-width: 500px) {
		padding: 0 20px;
	}
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


const ExperiencedSlider = ({
	highlightlist,
	...props
}) => {
	var settings = {
		dots: false,
		// infinite: false,
		arrows: false,
		speed: 500,
		slidesToShow: 2,
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

	const list = highlightlist.map(highlight => {
		return (
			<ExperiencedCard
				key={highlight.key}
				url={highlight.url}
				name={highlight.name}
				{...props}
			/>
		)
	})

	return (
		<Container>
			<PrevArrow icon="backwards" onClick={previous} />
			<Slider ref={c => slider = c} {...settings}>
				{list}
			</Slider>
			<NextArrow icon="forwards" onClick={next} />
		</Container>
	)
}

ExperiencedSlider.propTypes = {
}

export default ExperiencedSlider