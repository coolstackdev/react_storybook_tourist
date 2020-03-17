import React from 'react'
import T from 'prop-types'
import styled from 'styled-components'
import { ifProp, prop } from 'styled-tools'

const Wrapper = styled.div`
	overflow: hidden;
	position: relative;
	z-index: 0;
	display: block;
	/* width: 100%; */
	width: ${prop('width')};
	/* height: ${(props) => ifProp('height', props.height)}px; */
`

const FeatureImage = styled.img`
	object-fit: cover;
	height: 100%;
	width: 100%;
`

const MainImageContainer = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 100;
	left: 0;
	top: 0;
	&::after {
		content: "";
		background: linear-gradient(180deg,transparent 0,rgba(0,0,0,.44));
		height: 33.33333%;
		width: 100%;
		display: block;
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 150;
	}
`

const Image = ({
	imgSrc,
	className,
	height,
	children,
}) => {
	return (
		<Wrapper className={className} height={height} >
			{/* {children && children} */}
			<FeatureImage src={imgSrc} />
			{/* <MainImageContainer>
				<FeatureImage src={imgSrc} />
			</MainImageContainer> */}
		</Wrapper>
	);
}

Image.propTypes = {
	imgSrc: T.string.isRequired
}

export default Image