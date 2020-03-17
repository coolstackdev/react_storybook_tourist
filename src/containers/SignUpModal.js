import React, { useState, useEffect } from 'react'
import LogRocket from 'logrocket'
import T from 'prop-types'
import { connect } from 'react-redux'
import { useWait } from 'react-wait'
import { useCookies } from 'react-cookie'
import { fbAppId, googleClientId } from 'config'
import { createValidator, required } from 'services/validation'
import api from 'services/api'
import { fromSocial } from 'store/selectors'
import {
  socialLoginPrepare,
  socialLoginRequest,
  emailLoginSuccess,
  emailLoginFailure,
  emailRegisterSuccess,
  emailRegisterFailure,
  modalHide,
} from 'store/actions'

import { SignUpModal } from 'components'

let SignUpModalContainer = ({
  prepareGoogle,
  prepareFacebook,
  emailLoginSuccess,
  emailLoginFailure,
  emailRegisterSuccess,
  emailRegisterFailure,
  ...props
}) => {
  
  const [signInType, setSignInType] = useState('register')
  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const [cookies, setCookie, removeCookie] = useCookies(['utm-params'])
  const [error, setError] = useState('')
  const { startWaiting, endWaiting } = useWait()

  useEffect(() => {
    prepareGoogle()
    prepareFacebook()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setCredentials(prevState => {
      return { ...prevState, [name]: value }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    startWaiting('SignIn')
    if (signInType === 'login') {
      return (
        api.post('/Login', credentials)
        .then(json => {
          const response = JSON.parse(json.d)
          endWaiting('SignIn')
          if (!response.userid) {
            console.error(response.message)
            setError(response.message)
            emailLoginFailure(response.message)
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
          endWaiting('SignIn')
          emailLoginSuccess(response)
        })
        .catch(err => {
          console.error("unable to login:", err)
          setError(err)
          endWaiting('SignIn')
          emailLoginFailure(err)
        })
      )
    } else if (signInType === 'register') {
      if (!credentials.fullName) {
        setError('Please provide your full name')
        endWaiting('SignIn')
        return
      }
      return (
        api.post('/RegisterByEmail', {
          fullname: credentials.fullName,
          email: credentials.email,
          password: credentials.password,
          utm_campaign: cookies.utm_campaign ? cookies.utm_campaign : "",
          utm_source: cookies.utm_source ? cookies.utm_source : "",
          utm_medium: cookies.utm_medium ? cookies.utm_medium : "",
          utm_date: cookies.utm_date ? cookies.utm_date : "",
          utm_term: cookies.utm_term ? cookies.utm_term : "",
          utm_content: cookies.utm_content ? cookies.utm_content : "",
        })
        .then(json => {
          const response = JSON.parse(json.d)
          endWaiting('SignIn')
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
          emailRegisterSuccess(response)
        })
        .catch(err => {
          console.error("Unable to register email:", err)
          setError(err)
          endWaiting('SignIn')
          emailRegisterFailure(err)
        })
      )
    } else {
      console.error("error: No signin type?")
    }
  }

  return <SignUpModal
    {...props}
    signInType={signInType}
    setSignInType={setSignInType}
    handleSubmit={handleSubmit}
    handleChange={handleChange}
    error={error}
  />
}

SignUpModalContainer.propTypes = {
  prepareGoogle: T.func.isRequired,
  prepareFacebook: T.func.isRequired,
}
const mapStateToProps = state => ({
  user: fromSocial.getUser(state),
})

const mapDispatchToProps = dispatch => ({
  prepareGoogle: () => dispatch(socialLoginPrepare('google', { clientId: googleClientId })),
  prepareFacebook: () => dispatch(socialLoginPrepare('facebook', { clientId: process.env.FACEBOOK_APP_ID })),
  onFacebookLogin: () => dispatch(socialLoginRequest('facebook')),
  onGoogleLogin: () => dispatch(socialLoginRequest('google')),
  emailLoginSuccess: (response) => dispatch(emailLoginSuccess(response)),
  emailLoginFailure: (response) => dispatch(emailLoginFailure(response)),
  emailRegisterSuccess: (response) => dispatch(emailRegisterSuccess(response)),
  emailRegisterFailure: (response) => dispatch(emailRegisterFailure(response)),
  onClose: () => dispatch(modalHide('register')),
})

SignUpModalContainer = connect(mapStateToProps, mapDispatchToProps)(SignUpModalContainer)

export default SignUpModalContainer
