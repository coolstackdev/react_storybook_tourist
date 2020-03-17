import React, { useState } from 'react'
import { useWait } from 'react-wait'
import styled from 'styled-components'
import { palette, ifProp, ifNotProp } from 'styled-tools'
import { AnimateOnChange } from 'react-animation'
import {
	StripeCardSection,
	StripeAddressSection,
	Button,
	Spinner,
	ErrorMessage,
	Input,
} from 'components'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 33em;
	/* min-width: 30em; */

	@media screen and (min-width: 940px) {
		margin-left: 1em;
		margin-right: 1em;
	}
`

//* Payment Form
const PaymentFormWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* border-radius: 4px; */
	border-radius: 0.8em;
`

const PaymentForm = styled.form`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	transition-property: opacity, transform;
	transition-duration: 0.35s;
	transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
`

const FieldSet = styled.fieldset`
	margin: 0 0 20px;
	padding: 0;
	border-style: none;
	background-color: ${palette('grayscale', 7)};
	box-shadow: 0 5px 10px 0 rgba(57,58,61,0.15);
	/* border-radius: 4px; */
	border-radius: .8em;
`

//* Payment button row
const PaymentButtonRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	margin-top: 1em;
	margin-bottom: 0.5em;
`

const StyledButton = styled(Button)`
	line-height: 2.4em;
	border-radius: 15px;
	font-size: 1.5em;
	/* margin-bottom: 2em; */
	background-color: ${palette('tertiary', 1)};
`

const ImageWrapper = styled.div`
	height: 100%;
	width: 13em;
`

const Image = styled.img`
	width: 100%;
	object-fit: contain;
`

//* Promo code
const PromoCodeContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 1em;
`

const PromoCodeWrapper = styled.div`
	/* display: flex;
	flex-direction: row;
	justify-content: center; */
`

const PromoCodePrompt = styled.span`
	align-self: center;
	cursor: pointer;
	margin-bottom: .4em;
	text-decoration: underline;
	color: ${palette('tertiary', 0)};
	user-select: none;
	display: ${ifProp('visible', 'none')};
`

const PromoCodeForm = styled.div`
	display: ${ifNotProp('visible', 'none', 'flex')};
`

const PromoCodeInput = styled(Input)`
	border-top-right-radius: 0px;
	border-bottom-right-radius: 0px;
	outline: none;
`

const ButtonWrapper = styled.div`
	text-align: center;
`

const ApplyCodeButton = styled(Button)`
	border-bottom-left-radius: 0px;
	border-top-left-radius: 0px;
	background-color: ${palette('secondary', 2)};
`

const PromoCodeSuccess = styled.span`
	color: ${palette('secondary', 2)};
`

const PromoCodeFailure = styled.span`
	color: ${palette('danger', 0)};
`

const StripeForm = ({
	handleSubmitPayment,
	handleSubmitPromoCode,
	stripe,
	detail,
	user,
	kids,
	adults,
	experienceDate,
	billingDetails,
	setBillingDetails,
	promoCodeId,
	costWithDiscount,
	currency,
	...props
}) => {
	const [promoCodeVisibility, setPromoCodeVisibility] = useState(false)
	const [promoCode, setPromoCode] = useState('')
	const { Wait, isWaiting } = useWait()

	return (
		<Container>
			<PaymentFormWrapper>

				<PaymentForm onSubmit={handleSubmitPayment} id="payment-form">
					<FieldSet>
						<StripeAddressSection billingDetails={billingDetails} setBillingDetails={setBillingDetails} />
					</FieldSet>

					{promoCodeId === 1 ||
						<FieldSet>
							<StripeCardSection />
						</FieldSet>
					}
					<PaymentButtonRow>
						<ImageWrapper>
							<Image src={require('../../atoms/Icon/icons/payment-badge.png')} />
						</ImageWrapper>
						<ButtonWrapper>
							<ErrorMessage>{props.error}</ErrorMessage>
							<StyledButton disabled={isWaiting("PayNow")} type="">
								<Wait on="PayNow" fallback={<Spinner />}>
									Pay ${costWithDiscount} {currency}
								</Wait>
							</StyledButton>
						</ButtonWrapper>
					</PaymentButtonRow>
				</PaymentForm>

			</PaymentFormWrapper>
			<PromoCodeContainer>
				{promoCodeId === 0 && <PromoCodeFailure>Promo code invalid</PromoCodeFailure>}
				{promoCodeId === 1 && <PromoCodeSuccess>Promo code successfully applied!</PromoCodeSuccess>}
				<PromoCodeWrapper>
					<PromoCodePrompt visible={promoCodeVisibility} onClick={() => setPromoCodeVisibility(true)}>Promo code?</PromoCodePrompt>
					<PromoCodeForm visible={promoCodeVisibility} id="promocode-form">
						<PromoCodeInput onChange={(e) => setPromoCode(e.target.value)} name="promocode" placeholder="Enter your promo code" spellcheck="false" form="promocode-form" />
						<ApplyCodeButton palette="tertiary" onClick={() => handleSubmitPromoCode(promoCode)}>Apply Code</ApplyCodeButton>
					</PromoCodeForm>
				</PromoCodeWrapper>
			</PromoCodeContainer>
		</Container>
	)
}

export default StripeForm