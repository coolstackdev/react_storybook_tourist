import React, { useEffect } from 'react'
import T from 'prop-types'
import styled from 'styled-components'
import { font } from 'styled-theme'
import { palette } from 'styled-tools'
import Slider from "react-slick"
import '../../../organisms/ExperiencePreviewList/slick.scss'
import '../../../organisms/ExperiencePreviewList/slick-theme.scss'
import {
	Heading,
	Icon,
	Polaroid
} from 'components'
import { CityCard } from '../components'

const Container = styled.div`
	position: relative;
	width: 100%;

	.slick-track {
		padding-bottom: 32px;
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

const StyledPolaroid = styled(Polaroid)`
	height: 22em;
	width: 14em;
`

const CitySlider = ({
	list,
	experienceId,
	loading,
	...props
}) => {
	var settings = {
		dots: false,
		// infinite: false,
		arrows: false,
		speed: 500,
		slidesToShow: 3,
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

	const cityList = list.map(city => {
		return (
			<CityCard
				key={city.cityid}
				url={city.thumbnail_url}
				nickname={city.nickname}
				{...props}
			/>
		)
	})

	return (
		<Container>
			<PrevArrow icon="backwards" onClick={previous} />
			<Slider ref={c => slider = c} {...settings}>
				{cityList}
			</Slider>
			<NextArrow icon="forwards" onClick={next} />
		</Container>
	)
}

CitySlider.propTypes = {
}

export default CitySlider