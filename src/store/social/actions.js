// https://github.com/diegohaz/arc/wiki/Actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social
export const SOCIAL_LOGIN_PREPARE = 'SOCIAL_LOGIN_PREPARE'
export const SOCIAL_LOGIN_REQUEST = 'SOCIAL_LOGIN_REQUEST'
export const SOCIAL_LOGIN_SUCCESS = 'SOCIAL_LOGIN_SUCCESS'
export const SOCIAL_LOGIN_FAILURE = 'SOCIAL_LOGIN_FAILURE'
export const SOCIAL_LOGIN = 'SOCIAL_LOGIN'
export const SOCIAL_LOGOUT = 'SOCIAL_LOGOUT'

export const socialLoginPrepare = (service, { clientId, ...options } = {}) => {
  return {
    type: SOCIAL_LOGIN_PREPARE,
    payload: {
      service,
      clientId,
      ...options,
    }
  }
}

export const socialLoginRequest = (service, { clientId, ...options } = {}) => {
  return {
    type: SOCIAL_LOGIN_REQUEST,
    payload: {
      service,
      clientId,
      ...options,
    },
    meta: {
      gtm: service,
    },
  }
}

export const socialLoginSuccess = (user, request) => {
  return {
    type: SOCIAL_LOGIN_SUCCESS,
    payload: user,
    meta: {
      request,
    },
  }
}

export const socialLoginFailure = (error, request) => {
  return {
    type: SOCIAL_LOGIN_FAILURE,
    error: true,
    payload: error,
    meta: {
      request,
    },
  }
}

export const EMAIL_LOGIN_SUCCESS = 'EMAIL_LOGIN_SUCCESS'
export const EMAIL_LOGIN_FAILURE = 'EMAIL_LOGIN_FAILURE'
export const EMAIL_REGISTER_SUCCESS = 'EMAIL_REGISTER_SUCCESS'
export const EMAIL_REGISTER_FAILURE = 'EMAIL_REGISTER_FAILURE'

export const emailLoginSuccess = (user) => {
  return {
    type: EMAIL_LOGIN_SUCCESS,
    payload: user,
  }
}

export const emailLoginFailure = (error) => {
  return {
    type: EMAIL_LOGIN_FAILURE,
    error: true,
    payload: error,
  }
}

export const emailRegisterSuccess = (user) => {
  return {
    type: EMAIL_REGISTER_SUCCESS,
    payload: user,
  }
}

export const emailRegisterFailure = (error) => {
  return {
    type: EMAIL_REGISTER_FAILURE,
    error: true,
    payload: error,
  }
}

export const socialLogout = () => {
  return {
    type: SOCIAL_LOGOUT
  }
}