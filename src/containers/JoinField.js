import React, { useEffect, useState } from 'react'
import T from 'prop-types'
import { connect } from 'react-redux'
import { useCookies } from 'react-cookie'
import { useWait } from 'react-wait'
import api from 'services/api'
import LogRocket from 'logrocket'
import { fromSocial } from 'store/selectors'
import { getSuggestedDisplayName } from 'utils/helpers'
import axios from 'axios'
import {
  emailRegisterSuccess,
  emailRegisterFailure
} from 'store/actions'

import { JoinField } from 'components'

const JoinFieldContainer = ({
  emailRegisterSuccess,
  emailRegisterFailure,
  ...props
}) => {

  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const [check, setCheck] = useState({ notify_for_mobile: false, has_vehicle: false })
  const [cookies, setCookie, removeCookie] = useCookies(['utm-params'])
  const [error, setError] = useState('')
  const [successJoin, setSuccessJoin] = useState(false)
  const [suggestions, setSuggestions] = useState([])
  const [cityValue, setCityValue] = useState('')
  const [cityId, setCityId] = useState('')
  const { startWaiting, endWaiting } = useWait()

  const getCityList = () => {
		axios.post('https://api.hopohop.com/API/HopService.asmx/GetCityList', {
			phrase: cityValue,
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
		setCityValue(newValue)
  }
  
  const onSuggestionsClearRequested = () => {
		setSuggestions([])
	}

	const getSuggestionValue = suggestion => suggestion.displayName

	const onSuggestionsFetchRequested = ({ value }) => {
		getCityList()
  }
  
  const onSuggestionSelected = (event, { suggestion }) => {
    console.log(suggestion.cityid)
    setCityId(suggestion.cityid)
	}

  const checkboxChange = (e) => {
    const { name, checked } = e.target
    setCheck(prevState => {
      return { ...prevState, [name]: checked }
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setCredentials(prevState => {
      return { ...prevState, [name]: value }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    startWaiting('Join')

    if (!props.user) {

      if (!credentials.fullName || !cityValue) {
        setError('You have to type your fullname and city')
        endWaiting('Join')
        return
      }

      return (
        api.post('/RegisterByEmailToJoinCommunity', {
          fullname: credentials.fullName,
          email: credentials.email,
          password: credentials.password,
          cityid: cityId,
          notify_for_mobile: check.notify_for_mobile,
          has_vehicle: check.has_vehicle,
          utm_campaign: cookies.utm_campaign ? cookies.utm_campaign : "",
          utm_source: cookies.utm_source ? cookies.utm_source : "",
          utm_medium: cookies.utm_medium ? cookies.utm_medium : "",
          utm_date: cookies.utm_date ? cookies.utm_date : "",
          utm_term: cookies.utm_term ? cookies.utm_term : "",
          utm_content: cookies.utm_content ? cookies.utm_content : "",
        })
        .then(json => {
          const response = JSON.parse(json.d)
          endWaiting('Join')
          if (!response.userid) {
            console.error(response.message)
            setError(response.message)
            emailRegisterFailure(response.message)
            return response.message
          }
          LogRocket.identify(response.userid, {
            email: credentials.email,
            fullName: credentials.firstname + credentials.lastname
          })
          window.analytics.identify(response.userid, {
            email: credentials.email,
            fullName: credentials.firstname + credentials.lastname
          })
          setSuccessJoin(true)
          emailRegisterSuccess(response)
        })
        .catch(err => {
          console.error("Unable to register email:", err)
          setError(err)
          endWaiting('Join')
          emailRegisterFailure(err)
        })
      )
    } else {
      if (!cityValue) {
        setError('Please type a city')
        endWaiting('Join')
        return
      }

      return (
        api.post('/JoinCommunity', {
          userid: props.user.userid,
          token: props.user.token,
          cityid: cityId,
          notify_for_mobile: check.notify_for_mobile,
          has_vehicle: check.has_vehicle
        })
        .then(json => {
          const response = JSON.parse(json.d)
          endWaiting('Join')
          setSuccessJoin(true)
        })
      )
    }
  }

  return (
    <JoinField 
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      checkboxChange={checkboxChange}
      error={error}
      successJoin={successJoin}
      fullName={credentials.fullName}
      cityValue={cityValue}
			suggestions={suggestions}
			onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      onSuggestionSelected={onSuggestionSelected}
      getSuggestionValue={getSuggestionValue}
      onChange={onChange}
      {...props}
    />
  )
}

const mapStateToProps = state => ({
  user: fromSocial.getUser(state),
})

const mapDispatchToProps = dispatch => ({
  emailRegisterSuccess: (response) => dispatch(emailRegisterSuccess(response)),
  emailRegisterFailure: (response) => dispatch(emailRegisterFailure(response)),
})

export default connect(mapStateToProps, mapDispatchToProps)(JoinFieldContainer)