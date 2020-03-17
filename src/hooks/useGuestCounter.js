import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fromUserSelections } from 'store/selectors'
import { adultAdd, adultRemove, kidAdd, kidRemove } from 'store/actions'

const useGuestCounter = () => {
	const dispatch = useDispatch()

	const adults = useSelector(state => fromUserSelections.getAdults(state))
	const kids = useSelector(state => fromUserSelections.getKids(state))

	const removeAdult = () => {
		if (adults > 1) {
			dispatch(adultRemove())
			dataLayer.push({
				event: 'remove adult',
				currentValue: adults - 1
			})
				window.analytics.track('remove adult', {
				currentValue: adults - 1
			})
			return false
		}
		return true
	}

	const addAdult = () => {
		dispatch(adultAdd())
		dataLayer.push({
			event: 'add adult',
			currentValue: adults + 1
		})
		window.analytics.track('add adult', {
			currentValue: adults + 1
		})
	}

	const removeKid = () => {
		kids > 0 && dispatch(kidRemove())
		dataLayer.push({
			event: 'remove kid',
			currentValue: kids - 1
		})
		window.analytics.track('remove kid', {
			currentValue: kids - 1
		})
	}

	const addKid = () => {
		dispatch(kidAdd())
		dataLayer.push({
			event: 'add kid',
			currentValue: kids + 1
		})
		window.analytics.track('add kid', {
			currentValue: kids + 1
		})
	}

	return {
		adults,
		kids,
		addAdult,
		removeAdult,
		addKid,
		removeKid,
	}
}

export default useGuestCounter