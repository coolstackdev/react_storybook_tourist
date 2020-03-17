import React, { useState } from 'react'
import T from 'prop-types'
import styled, { css } from 'styled-components'
import { palette, ifProp } from 'styled-tools'
import { font } from 'styled-theme'
import Autosuggest from 'react-autosuggest'
import '../../styles.scss'
import allLanguages from 'utils/allLanguages'

const Wrapper = styled.div`
	position: relative;
`

const LanguageAutosuggest = ({
	className,
	...props
}) => {
	const [value, setValue] = useState('')
	const [suggestions, setSuggestions] = useState([])

	const getSuggestions = value => {
		const inputValue = value.trim().toLowerCase()
		const inputLength = inputValue.length

		return inputLength === 0 ? [] : allLanguages.filter(lang =>
			lang.name.toLowerCase().slice(0, inputLength) === inputValue
		)
	}

	const onChange = (event, { newValue }) => {
		setValue(newValue)
	}

	const onSuggestionsClearRequested = () => {
		setSuggestions([])
	}

	const getSuggestionValue = suggestion => suggestion.name

	const onSuggestionsFetchRequested = ({ value }) => {
		setSuggestions(getSuggestions(value))
	}

	const onSuggestionSelected = (event, { suggestion }) => {
		setValue('')
		if (!props.detail.languages) {
			props.updateAttribute('languages', suggestion.name)
			return
		}
		props.updateAttribute('languages', `${props.detail.languages}, ${suggestion.name}`)
	}

	const renderSuggestion = suggestion => (
		<span>
			{suggestion.name}
		</span>
	)

	const inputProps = {
		placeholder: 'What languages do you speak?',
		value,
		onChange
	}

	return (
		<Wrapper className="language-search">
			<Autosuggest
				suggestions={suggestions}
				onSuggestionsFetchRequested={onSuggestionsFetchRequested}
				onSuggestionsClearRequested={onSuggestionsClearRequested}
				onSuggestionSelected={onSuggestionSelected}
				getSuggestionValue={getSuggestionValue}
				renderSuggestion={renderSuggestion}
				inputProps={inputProps}
			/>
		</Wrapper>
	)
}

LanguageAutosuggest.propTypes = {
}

export default LanguageAutosuggest