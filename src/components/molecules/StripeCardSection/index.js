import React from 'react'
import styled from 'styled-components'
import { Label } from 'components'
import {
	CardElement,
	CardNumberElement,
	CardExpiryElement,
	CardCvcElement
} from 'react-stripe-elements'
import './styles.scss'

const style = {
	base: {
		color: '#55272d',
		fontSize: '16px',
		background: 'red',
	},
	invalid: {
		color: '#e5424d',
		':focus': {
			color: '#55272d',
		},
	},
}

const FieldWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-left: 15px;
	margin-right: 15px;
	height: 3em;
`

const StripeCardSection = ({}) => {
	return (
		<>
			<FieldWrapper>
				<CardNumberElement style={style} placeholder="Card number" form="payment-form" />
				<CardExpiryElement style={style} form="payment-form" />
				<CardCvcElement style={style} form="payment-form" />
			</FieldWrapper>
		</>
	)
}

export default StripeCardSection