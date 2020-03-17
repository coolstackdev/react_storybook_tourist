// https://github.com/diegohaz/arc/wiki/Sagas
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social

// as soon as we get a resolution to the outcome of this yielded side effect, the Redux Saga middleware calls next() for us, and on we go until the next yield, or the outcome of done() is true.
//
// anything following `yield` will be called and send the value back to the iterator object
//

import loadScript from 'simple-load-script'
import { take, put, call, fork, takeLatest } from 'redux-saga/effects'
import * as actions from './actions'
import api from 'services/api'
import Cookies from 'js-cookie'

export const promises = {
  fbLogin: options => new Promise((resolve, reject) => {
    window.FB.login((response) => {
      // istanbul ignore else
      if (response.authResponse) {
        resolve(response.authResponse)
      } else {
        reject(response.status)
      }
    }, options)
  }),
  fbGetMe: options => new Promise((resolve) => {
    window.FB.api('/me', options, me => resolve(me))
  }),
  loadGoogleAuth2: () => new Promise((resolve) => {
    window.gapi.load('auth2', resolve)
  }),
}

export const appendFbRoot = () => {
  const fbRoot = document.createElement('div')
  fbRoot.id = 'fb-root'
  document.body.appendChild(fbRoot)
}

export const serviceAction = (suffix, service) => ({ type, payload }) =>
  type === `SOCIAL_LOGIN_${suffix}` && payload && payload.service === service

export function* loginFacebook({ scope = 'public_profile', fields = 'id,name,email', ...options } = {}) {
  const request = {
    service: 'facebook', scope, fields, ...options,
  }

  try {
    yield call(promises.fbLogin, { scope, ...options })
    const data = yield call(promises.fbGetMe, { fields })
    const picture = `https://graph.facebook.com/${data.id}/picture?type=normal`
    let json = yield call(api.post, `/LoginByFacebook`, { email: data.email, facebookId: data.id })
    let response
    response = JSON.parse(json.d)
    if (response[401]) {
      const utm_campaign = Cookies.get('utm_campaign')
      const utm_source = Cookies.get('utm_source')
      const utm_medium = Cookies.get('utm_medium')
      const utm_date = Cookies.get('utm_date')

      json = yield call(api.post, `/RegisterByFacebook`, {
        email: data.email,
        facebookId: data.id,
        fullname: data.name,
        picture,
        utm_campaign: utm_campaign ? utm_campaign : "",
        utm_source: utm_source ? utm_source : "",
        utm_medium: utm_medium ? utm_medium : "",
        utm_date: utm_date ? utm_date : "",
        utm_term: "N/A",
        utm_content: "123",
      })
    }
    response = JSON.parse(json.d)
    LogRocket.identify(response.userid, {
      email: data.email,
      fullName: data.name
    })
    window.analytics.identify(response.userid, {
      email: data.email,
      fullName: data.name
    })
    yield put(actions.socialLoginSuccess({ ...data, ...response, picture }, request))
  } catch (e) {
    yield put(actions.socialLoginFailure(e, request))
  }
}

export function* prepareFacebook({ clientId, version = 'v2.8', ...options }) {
  const request = {
    service: 'facebook', clientId, version, ...options,
  }
  try {
    yield call(appendFbRoot)
    yield call(loadScript, '//connect.facebook.net/en_US/sdk.js')
    yield call([window.FB, window.FB.init], { appId: clientId, version, ...options })
  } catch (e) {
    yield put(actions.socialLoginFailure(e, request))
  }
}

export function* watchSocialLoginFacebook() {
  const { payload } = yield take(serviceAction('PREPARE', 'facebook'))
  yield call(prepareFacebook, payload)
  while (true) {
    const { payload } = yield take(serviceAction('REQUEST', 'facebook'))
    yield call(loginFacebook, payload)
  }
}

export function* loginGoogle({ scope = 'profile', ...options } = {}) {
  const request = { service: 'google', scope, ...options }
  try {
    const auth2 = yield call(window.gapi.auth2.getAuthInstance)
    const user = yield call([auth2, auth2.signIn], { scope, ...options })
    const profile = yield call([user, user.getBasicProfile])
    const name = yield call([profile, profile.getName])
    const picture = yield call([profile, profile.getImageUrl])
    yield put(actions.socialLoginSuccess({ name, picture }, request))
  } catch (e) {
    yield put(actions.socialLoginFailure(e, request))
  }
}

export function* prepareGoogle({ clientId, ...options }) {
  const request = { service: 'google', clientId, ...options }
  try {
    yield call(loadScript, '//apis.google.com/js/platform.js')
    yield call(promises.loadGoogleAuth2)
    yield call(window.gapi.auth2.init, { client_id: clientId, ...options })
  } catch (e) {
    yield put(actions.socialLoginFailure(e, request))
  }
}

export function* watchSocialLoginGoogle() {
  const { payload } = yield take(serviceAction('PREPARE', 'google'))
  yield call(prepareGoogle, payload)
  while (true) {
    const { payload } = yield take(serviceAction('REQUEST', 'google'))
    yield call(loginGoogle, payload)
  }
}

export default function* ({ api }) {
  yield fork(watchSocialLoginFacebook) //using fork, we can ensure that watchSocialLoginFB doesn't block the thread
  yield fork(watchSocialLoginGoogle)
}
