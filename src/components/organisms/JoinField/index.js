import React, { useState } from 'react'
import styled from 'styled-components'
import { useWait } from 'react-wait'
import Autosuggest from 'react-autosuggest'
import './styles.scss'
import {
  Field,
  IconText,
  Button,
  ReduxField,
  Spinner,
  ErrorMessage,
  Heading
} from 'components'

const JoinWrapper = styled.div`
  width: 465px;
  padding-left: 55px;
  margin-top: 20px;

  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 0;
    margin: 0;
  }
`

const StyledField = styled(Field)`

  & input {
    border: none !important;
    box-shadow: 0px 0px 12px rgba(199, 199, 199, 0.25);
    border-radius: 4px;
    padding: 12px 24px;
    height: auto;
    font-size: 18px;
    line-height: 25px;
  }
`

const StyledIconText = styled(IconText)`
  line-height: 15px;
  color: #6B6B6B;
  display: flex;
  justify-content: center;

  & span:last-child {
    font-size: 14px;
  }
`

const StyledCheckbox = styled(Field)`
  margin-top: 16px;
  display: flex;
  flex-direction: row;

  & label {
    font-size: 16px;
    line-height: 24px;
    color: #464646;
  }
`

const StyledButton = styled(Button)`
  width: 100%;
  background-color: #03C8A8;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 24px;
  font-size: 22px;
  line-height: 30px;
`

const JoinField = ({
  handleSubmit,
  handleChange,
  checkboxChange,
  successJoin,
  onChange,
  // onSuggestionSelected,
  onSuggestionsFetchRequested,
  onSuggestionsClearRequested,
  onSuggestionSelected,
  getSuggestionValue,
  cityValue,
  suggestions,
  ...props
}) => {
  const { Wait, isWaiting } = useWait()

  const inputProps = {
    placeholder: "Your City*",
    value: cityValue,
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
    <JoinWrapper>
      {!successJoin ?
        <form onSubmit={handleSubmit} method="post">
          {!props.user &&
          <>
            <StyledField placeholder="Name*" name="fullName" onChange={handleChange} component={ReduxField} />
            <StyledField placeholder="Email*" name="email" type="email" onChange={handleChange} component={ReduxField} />
            <StyledField placeholder="Password*" name="password" type="password" onChange={handleChange} component={ReduxField} />
          </>
          }
          {/* <StyledField placeholder="Your city*" name="city" onChange={handleChange} component={ReduxField} /> */}
          <Autosuggest 
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            onSuggestionSelected={onSuggestionSelected}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
          />
          <StyledIconText icon="lock-join">We respect your privacy</StyledIconText>
          <StyledCheckbox name="notify_for_mobile" onChange={checkboxChange} component={ReduxField} type="checkbox" label="Email me when instant traveler-host matching mobile app is launched" />
          <StyledCheckbox name="has_vehicle" onChange={checkboxChange} component={ReduxField} type="checkbox" label="I have a vehicle that I can use for helping travelers" />
          <ErrorMessage>{props.error}</ErrorMessage>
          <StyledButton type="submit" disabled={isWaiting("Join")}>
            <Wait on="Join" fallback={<Spinner />} >
              Join Community!
            </Wait>
          </StyledButton>
        </form>
        :
        <>
          <Heading>Congratulations {props.fullName}! You are part of our community now!</Heading>
          <StyledButton onClick={() => {window.open("https://community.instahop.io")}}>Go to Community Page</StyledButton>
        </>
      }
    </JoinWrapper>
  )
}

export default JoinField