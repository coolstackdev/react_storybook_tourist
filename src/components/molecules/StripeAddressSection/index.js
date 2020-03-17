import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-tools'
import {
	Field,
	Label,
	Input
} from 'components'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	max-width: 500px;
	/* justify-content: space-between; */
	/* flex-wrap: wrap; */
`

const FieldWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-left: 15px;
	margin-right: 15px;

	:not(:last-child) {
		border-bottom: 1px solid #dfdfdf;
	}
`

const StyledLabel = styled(Label)`
	width: 48%;
	min-width: 70px;
	padding: 11px 0;
	color: ${palette('secondary', 1)};
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`

const StyledInput = styled(Input)`
	outline: none;
	border-style: none;
	width: 100%;
	padding: 11px 15px 11px 1em;
	color: ${palette('tertiary', 0)};
	background-color: transparent;
	font-size: 0.9em;

	&:-webkit-autofill, -webkit-autofill:hover, -webkit-autofill:focus {
		background: transparent;
		/* border: 1px solid transparent;
		-webkit-text-fill-color: transparent; */
  /* -webkit-box-shadow: 0 0 0px 1000px #000 inset; */
  /* transition: background-color 5000s ease-in-out 0s; */
	}
`


const StripeAddressSection = ({ billingDetails, setBillingDetails }) => {

	const onChange = ({ target }) => {
		setBillingDetails({
			...billingDetails,
			[target.name]: target.value
		})
	}

	return (
		<Wrapper>
			<FieldWrapper>
				<StyledLabel htmlFor="fullName">Full Name</StyledLabel>
				<StyledInput name="fullName" placeholder="Jane Doe" onChange={(e) => onChange(e)} form="payment-form"/>
			</FieldWrapper>
			<FieldWrapper>
				<StyledLabel htmlFor="email">Email</StyledLabel>
				<StyledInput name="email" placeholder="janedoe@gmail.com" onChange={(e) => onChange(e)} form="payment-form"/>
			</FieldWrapper>
			<FieldWrapper>
				<StyledLabel htmlFor="city">City</StyledLabel>
				<StyledInput name="city" placeholder="Vancouver" onChange={(e) => onChange(e)} form="payment-form"/>
			</FieldWrapper>
			<FieldWrapper>
				<StyledLabel htmlFor="state">State/Province</StyledLabel>
				<StyledInput name="state" placeholder="BC" onChange={(e) => onChange(e)} form="payment-form"/>
			</FieldWrapper>
			<FieldWrapper>
				<StyledLabel htmlFor="country">Country</StyledLabel>
				<StyledInput name="country" placeholder="Canada" onChange={(e) => onChange(e)} form="payment-form"/>
			</FieldWrapper>
		</Wrapper>
	)
}

export default StripeAddressSection