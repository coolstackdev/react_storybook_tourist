import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Autosuggest from 'react-autosuggest'
import { getSuggestedDisplayName } from 'utils/helpers'
import T from 'prop-types'
import axios from 'axios'

const SearchCities = ({
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
		const locationArray = suggestion.displayName.split(',')
		const cityName = locationArray[0]
		const countryName = locationArray[locationArray.length - 1]

		props.updateAttribute('city', cityName)
		props.updateAttribute('country', countryName.trim())
		props.updateAttribute('cityid', suggestion.cityid)
		setValue('')
	}

	const renderSuggestion = suggestion => {
		return (
			<span>
				{suggestion.displayName}
			</span>
		)
	}

	const inputProps = {
		placeholder: "",
		value,
		onChange,
	}

	return (
		<Autosuggest
			suggestions={suggestions}
			onSuggestionsFetchRequested={onSuggestionsFetchRequested}
			onSuggestionsClearRequested={onSuggestionsClearRequested}
			getSuggestionValue={getSuggestionValue}
			onSuggestionSelected={onSuggestionSelected}
			renderSuggestion={renderSuggestion}
			inputProps={inputProps}
			{...props}
		/>
	)
}

SearchCities.propTypes = {
	value: T.string,
	setValue: T.func,
	setSuggestions: T.func,
	onSuggestionsFetchRequested: T.func,
	onSuggestionsClearRequested: T.func,
	getSuggestionValue: T.func,
	onChange: T.func,
}

export default withRouter(SearchCities)
