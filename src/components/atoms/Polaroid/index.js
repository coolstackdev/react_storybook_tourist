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
	box-shadow: 0px 0px 20px 14px rgba(0,0,0,.15);
	padding: 31px 34px;
	background-color: ${palette('grayscale', 8)};
`

const StyledHeading = styled(Heading)`
	font-family: ${font('cursive')};
	color: ${palette('tertiary', 1)};
	font-size: 30px;
	user-select: none;
	margin-top: 15px;
`

const Polaroid = ({
	imgSrc,
	text,
	height,
	className,
}) => {
	return (
		<Wrapper className={className} height={height} >
			<Image height="449" imgSrc={imgSrc} />
			<StyledHeading>{text}</StyledHeading>
		</Wrapper>
	);
}

Polaroid.propTypes = {
	imgSrc: T.string.isRequired
}

export default Polaroid