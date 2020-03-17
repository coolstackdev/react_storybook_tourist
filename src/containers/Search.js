import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getSuggestedDisplayName } from 'utils/helpers'
import T from 'prop-types'
import axios from 'axios'

import { Search } from 'components'

const SearchContainer = ({
	...props
}) => {
	const [value, setValue] = useState('')
	const [suggestions, setSuggestions] = useState([])

	const getCityList = () => {
		axios.post('https://api.hopohop.com/API/HopService.asmx/GetCityList', {
			phrase: value,
			count: 5
		})
		.then(json => {
			const response = json.data.d
			const locationsArray = getSuggestedDisplayName(response)
			setSuggestions(locationsArray)
		})
		.catch(err => {
			console.warn(err)
		})
	}

	const onChange = (event, { newValue }) => {
		setValue(newValue)
	}

	const onSuggestionsClearRequested = () => {
		setSuggestions([])
	}

	const getSuggestionValue = suggestion => suggestion.displayName

	const onSuggestionsFetchRequested = ({ value }) => {
		getCityList()
	}

	const onSuggestionSelected = (event, { suggestion }) => {
		const urlEndpoint = props.filterBlock ? '' : 'personalize'

		if (suggestion.nickname) {
			props.history.push(`/${suggestion.nickname}/${urlEndpoint}`)
		} else {
			props.history.push(`/${suggestion.cityid}/${urlEndpoint}`)
		}

		dataLayer.push({
			event: 'City search',
			city: suggestion.displayName
		})
		window.analytics.track('City search', {
			city: suggestion.displayName
		})
	}

	return (
		<Search
			value={value}
			suggestions={suggestions}
			onSuggestionsFetchRequested={onSuggestionsFetchRequested}
			onSuggestionsClearRequested={onSuggestionsClearRequested}
			getSuggestionValue={getSuggestionValue}
			onSuggestionSelected={onSuggestionSelected}
			onChange={onChange}
			{...props}
		/>
	)
}

SearchContainer.propTypes = {
	value: T.string,
	setValue: T.func,
	suggestions: T.arrayOf(T.string),
	setSuggestions: T.func,
	onSuggestionsFetchRequested: T.func,
	onSuggestionsClearRequested: T.func,
	getSuggestionValue: T.func,
	onChange: T.func,
}

export default withRouter(SearchContainer)
