import * as R from 'ramda'
import React from 'react'
import styled from 'styled-components'
import { Image } from 'components'

const Wrapper = styled.div``

const ImageWrapper = styled.div`
	display: inline-block;
	max-width: 200px;
	width: 100%;
	height: 100%;
	overflow: hidden;
	position: relative;
	-webkit-transition:0.3s all ease;
	transition:0.3s ease all;

	&:hover {
		span {
			top: 0;
		}
	}
`

const HoverImage = styled.span`
	color: #fff;
	position: absolute;
	height: 100%;
	top: -100%;
	width: 100%;
	left: 0;
	background-color: #000;
	transition: all 0.3s ease;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0.7;
	font-size: 30px;
	cursor: pointer;
`

const HighlightsPreviewContainer = ({
	images,
	...props
}) => {

	const removeImage = (index) => {
		const removedList = R.remove(index, 1, images)
		props.updateAttribute('highlights_links_string', removedList.join('|'))
	}

	return (
		<Wrapper>
			{images.map((image, i) => {
				return (
					<ImageWrapper key={image} onClick={() => removeImage(i)} >
						<Image imgSrc={image} />
						<HoverImage>Remove</HoverImage>
					</ImageWrapper>
				)
			})}
		</Wrapper>
	)
}

HighlightsPreviewContainer.propTypes = {
}

export default HighlightsPreviewContainer