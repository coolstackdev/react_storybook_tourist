import React from 'react'
import T from 'prop-types'
import Autosuggest from 'react-autosuggest'
import styled from 'styled-components'
import { palette, ifNotProp, ifProp } from 'styled-tools'
import './styles.scss'
import {
  Button,
  Icon
} from 'components'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin: ${ifProp('filterBlock', '0 20px')};
  
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.92;
  letter-spacing: normal;
  text-align: center;

  & input {
    font-size: 14px;
    box-shadow: 0px 1px 32px 10px rgba(0, 0, 0, 0.1) !important;
    padding-left: 2rem !important;
    color: black;
  }

  & ::placeholder {
    color: #777878 !important;
    opacity: 1;
  }
  
  @media screen and (min-width: 800px) {
    & input {
      font-size: 16px;
      padding-left: 5rem !important;
      height: ${ifNotProp('filterblock', '85px !important')}
    }
  }
`

const SearchIcon = styled(Icon)`
  position: absolute;
  top: 17px;
  bottom: 19px;
  left: 9px;
  z-index: 1;
  margin: auto;
  font-size: 1.4em;
  color: ${palette('grayscale', 4)};

  @media screen and (min-width: 800px) {
    font-size: 2.15em;
    top: 0;
    bottom: 0;
    left: 16px;
  }
`

const ContinueButton = styled(Button)`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 100%;
  background-color: ${palette('tertiary', 1)};
  border-radius: 42.5px;
  
  font-weight: 500;

  @media screen and (min-width: 800px) {
    width: 199px;
    font-size: 30px;
  }
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
  suggestions,
  filterBlock
}) => {
  const inputProps = {
    placeholder: "Where is your destination?",
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
      {!filterBlock &&
        <ContinueButton>Explore</ContinueButton>
      }
    </Wrapper>
  )
}

export default Search
