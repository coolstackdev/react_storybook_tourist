import React from 'react'
import T from 'prop-types'
import styled from 'styled-components'
import { ifProp, prop, palette } from 'styled-tools'
import { font } from 'styled-theme'
import {
	Image,
	Heading,
} from 'components'

const Wrapper = styled.div`
	overflow: hidden;
	position: relative;
	z-index: 0;
	display: block;
	width: ${prop('width')};
	box-shadow: 0 6px 16px 0 rgba(0,0,0,.15);
	padding: 0.9em;
	background-color: ${palette('grayscale', 8)};
`

const StyledHeading = styled(Heading)`
	font-family: ${font('cursive')};
	color: ${palette('tertiary', 1)};
	font-size: 1.2rem;
	user-select: none;
`

const Polaroid = ({
	imgSrc,
	text,
	height,
	className,
}) => {
	return (
		<Wrapper className={className} height={height} >
			<Image imgSrc={imgSrc} />
			<StyledHeading>{text}</StyledHeading>
		</Wrapper>
	);
}

Polaroid.propTypes = {
	imgSrc: T.string.isRequired
}

export default Polaroid