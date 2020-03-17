import React, { useState } from 'react'
import { useWait } from 'react-wait'
import T from 'prop-types'
import api from 'services/api'
import { formattedDateWithoutTime } from 'utils/helpers'
import { withRouter } from 'react-router-dom'
import { injectStripe } from 'react-stripe-elements'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { fromResource, fromUserSelections } from 'store/selectors'

import { StripeForm } from 'components'

const StripeFormContainer = ({
	detail,
	user,
	kids,
	adults,
	experienceDate,
	experienceTime,
	stripe,
	...props
}) => {
	const experiencename = props.match.params.experiencename
	const cityname = props.match.params.cityname
	const { cost, currency } = props.history.location.state.response

	const { startWaiting, endWaiting } = useWait()
	const [promoCodeId, setPromoCodeId] = useState('')
	const [costWithDiscount, setCostWithDiscount] = useState(cost)
	const [error, setError] = useState('')
	const [billingDetails, setBillingDetails] = useState({
		fullName: null,
		email: null,
		city: null,
		state: null,
		country: null,
	})

	const parsedDate = new Date(experienceDate)


	const handleSubmitPromoCode = (promocode) => {
		setError('')
		api.post('/QuoteBooking', {
			experienceid: detail.experienceid,
			startdate: `${formattedDateWithoutTime(parsedDate)} ${experienceTime}`,
			adults,
			kids,
			promocode,
		})
		.then(json => {
			const response = JSON.parse(json.d)
			setCostWithDiscount(cost - (response.discount_percentage / 100 * cost))

			if (parseInt(response.statusCode) >= 400) {
				console.error("QuoteBooking failed:", response.message)
				setError(response.message)
				return
			}
			setPromoCodeId(response.promocodeid)
		})
		.catch(err => {
			console.error(err)
		})
	}

	const handleSubmitPayment = (evt) => {
		evt.preventDefault()
		setError('')
		startWaiting('PayNow')
		if (promoCodeId > 0) {
			stripeTokenHandler()
		}
		if (stripe) {
			stripe
				.createToken()
				.then(result => {
					if (result.error) {
						console.error("error:", result.error.message)
						setError(result.error.message)
						endWaiting("PayNow")
					} else {
						stripeTokenHandler(result.token)
					}
				})
		} else {
			console.error("form submitted before Stripe.js loaded")
		}
	}

	const stripeTokenHandler = (token = '') => {
		const { fullName, email, city, state, country } = billingDetails
		const { experienceid, name } = detail

		if (!fullName || !email) {
			endWaiting("PayNow")
			setError('Please fill in all fields')
			return
		}

		api.post('/ProcessPayment', {
			token: token ? token.id : '',
			currency: currency,
			amount: costWithDiscount,
			description: `${experiencename} | ${fullName}`,
			experienceid: experienceid,
			userid: user ? user.userid : '',
			fullname: fullName,
			email: email,
			city,
			state,
			country,
			startdate: `${formattedDateWithoutTime(parsedDate)} ${experienceTime}`,
			adults,
			kids,
			promocodeId: promoCodeId ? promoCodeId : 0,
		})
		.then(json => {
			const response = JSON.parse(json.d)

			if (response.statusCode >= 400) {
				endWaiting('PayNow')
				setError('Something went wrong when trying to process your credit card')
				console.error(response.message)
				return
			}
			props.history.push(`/${cityname}/experiences/${experiencename}/payment-successful`, { response })
			endWaiting('PayNow')
		})
		.catch(error => {
			endWaiting("PayNow")
			setError('Server error: No experience selected')
			console.error(error)
		})
	}

	return (
		<StripeForm {...{
			detail,
			handleSubmitPayment,
			handleSubmitPromoCode,
			user,
			kids,
			adults,
			experienceDate,
			billingDetails,
			setBillingDetails,
			error,
			promoCodeId,
			costWithDiscount,
			currency,
			...props
		}}/>
	)
}

StripeFormContainer.propTypes = {
	detail: T.object.isRequired,
	user: T.object,
	kids: T.number.isRequired,
	adults: T.number.isRequired,
	// experienceDate: T.instanceOf(Date).isRequired,
}

const mapStateToProps = state => ({
	detail: fromResource.getDetail(state, 'experience'),
	kids: fromUserSelections.getKids(state),
	adults: fromUserSelections.getAdults(state),
	experienceDate: fromUserSelections.getDate(state),
	experienceTime: fromUserSelections.getTime(state),
	user: state.social.user
})

export default compose(
	connect(mapStateToProps),
	withRouter,
	injectStripe,
)(StripeFormContainer)
