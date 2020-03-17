import React from 'react'
import T from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp, prop } from 'styled-tools'

const Wrapper = styled.span`
	position: relative;
`

const Slash = styled.div`
	position: absolute;
	transform: rotate(45deg);
	height: 155%;
	width: 1.5px;
	background-color: ${palette('danger', 0)};
	top: -7px;
	right: 0;
	/* left: ${ifProp('currencySymbol', '16px', '7px')}; */
	left: ${prop('offset')}px;
`

const SlashedPrice = ({
	price,
	currencySymbol,
	...props
}) => {
	const offset = (price.toString().length + (currencySymbol ? 1 : 0)) * 5

	return (
		<Wrapper>
			{currencySymbol && '$'}
			{price}
			<Slash offset={offset} {...props} />
		</Wrapper>
	)
}

SlashedPrice.propTypes = {
	price: T.number.isRequired,
	currencySymbol: T.bool,
}


export default SlashedPrice
