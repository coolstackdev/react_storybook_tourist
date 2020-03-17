import React, { useState } from 'react'
import T from 'prop-types'
import styled, { css } from 'styled-components'
import { palette } from "styled-tools";
import Dots from 'react-carousel-dots'
import { Arrow, Slide } from 'components'
import { moveObjectFieldToArray } from 'utils/helpers'
import './styles.scss'

const OuterWrapper = styled.div`
  position: relative;
	width: 100%;
  margin: 0 auto;
  overflow: hidden;
	white-space: nowrap;

	.react-carousel-dots-holder {
		position: absolute;
		bottom: 10px;
		left: 50%;
		margin-left: -70px;
		justify-content: center;

		.dot-holder {
			height: 6px !important;
			width: 6px !important;
			margin: 0 5px !important;

			.react-carousel-dots-dot {
				border: none !important;
				background-color: ${palette('grayscale', 5)};
				opacity: 0.4;

				&.active {
					background-color: ${palette('secondary', 3)};
					opacity: 1;
				}
			}
		}
	}
`

const InnerWrapper = styled.div`
	position: relative;
  height: 100%;
  width: 100%;
`

const panelStyles = css`
	position: absolute;
	z-index: 3;
	height: 100%;
	top: 0;
	bottom: 0;
	right: 0;
	width: 20%;
	cursor: pointer;

	& span {
		width: 42px;
		height: 42px;
		// color: #16ef76 !important
	}
`

const LeftPanel = styled.div`
	${panelStyles}
	left: 0;
`

const RightPanel = styled.div`
	${panelStyles}
	right: 0;
`

class Carousel extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			currentIndex: 0,
			translateValue: 0
		}
	}

	goToPrevSlide = () => {
		if (this.state.currentIndex === 0)
			return;

		this.setState(prevState => ({
			currentIndex: prevState.currentIndex - 1,
			translateValue: prevState.translateValue + this.slideWidth()
		}))
	}

	goToNextSlide = () => {
		if (this.state.currentIndex === this.props.images.length - 1) {
			return this.setState({
				currentIndex: 0,
				translateValue: 0
			})
		}

		this.setState(prevState => ({
			currentIndex: prevState.currentIndex + 1,
			translateValue: prevState.translateValue + -(this.slideWidth())
		}));
	}

	slideWidth = () => {
		return document.querySelector('.slider-wrapper').getBoundingClientRect().width
	}

	render() {
		if (!this.props.images) {
			return <h1>Loading</h1>
		}

		const experienceImages = moveObjectFieldToArray(this.props.images, 'photo_url')
		return (
			<OuterWrapper className={this.props.className}>

				<InnerWrapper className="slider-wrapper"
					style={{
						transform: `translateX(${this.state.translateValue}px)`,
						transition: 'transform ease-out 0.45s'
					}}>
					{
						experienceImages.map((image, i) => (
							<Slide key={i} image={image} />
						))
					}
				</InnerWrapper>
				<LeftPanel onClick={this.goToPrevSlide}>
					<Arrow
						direction="left"
						/>
				</LeftPanel>

				<RightPanel onClick={this.goToNextSlide}>
					<Arrow
						direction="right"
					/>
				</RightPanel>
				<Dots
					length={this.props.images.length}
					active={this.state.currentIndex}
					margin={10}
					size={25}
					visible={5}
				/>
			</OuterWrapper>
		);
	}
}

Carousel.defaultProps = {
}

Carousel.propTypes = {
	images: T.array.isRequired
}

export default Carousel