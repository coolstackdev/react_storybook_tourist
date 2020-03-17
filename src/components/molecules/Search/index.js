import React from 'react'
import T from 'prop-types'
import Autosuggest from 'react-autosuggest'
import styled from 'styled-components'
import { palette, ifNotProp } from 'styled-tools'
import './styles.scss'
import {
  Button,
  Icon
} from 'components'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: ${ifNotProp('filterBlock', '3.2em')};

  & input {
    font-size: 1rem;
  }
`

const SearchIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 16px;
  z-index: 1;
  margin: auto;
  font-size: 1.15em;
  color: ${palette('grayscale', 4)};
`

const ContinueButton = styled(Button)`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 100%;
  background-color: ${palette('tertiary', 1)};
`

const StyledAutosuggest = styled(Autosuggest)`
  position: absolute;
  font-size: 0.9rem;
`

const Search = ({
  onChange,
  onSuggestionSelected,
  onSuggestionsFetchRequested,
  onSuggestionsClearRequested,
  getSuggestionValue,
  value,
  suggestions
}) => {

  const inputProps = {
    placeholder: "What is your destination?",
    value,
    onChange,
  }

  const renderSuggestion = suggestion => {
    return (
      <span>
        {suggestion.displayName}
      </span>
    )
  }

  return (
    <Wrapper className="city-search">
      <SearchIcon icon="search" />
      <StyledAutosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        onSuggestionSelected={onSuggestionSelected}
        // focusInputOnSuggestionClick={!isMobile}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
      {/* <ContinueButton>Continue</ContinueButton> */}
    </Wrapper>
  )
}

export default Search
