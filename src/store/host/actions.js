export const HOST_INFO_READ_REQUEST = 'HOST_INFO_READ_REQUEST'
export const HOST_INFO_READ_SUCCESS = 'HOST_INFO_READ_SUCCESS'
export const HOST_INFO_READ_FAILURE = 'HOST_INFO_READ_FAILURE'
export const HOST_INFO_RESET_STORE = 'HOST_INFO_RESET_STORE'

export const hostInfoReadRequest = (host, params) => {
  return {
    type: HOST_INFO_READ_REQUEST,
    payload: { params },
    meta: {
      host
    }
  }
}

export const hostInfoReadSuccess = (host, hostInfo, request, thunk) => {
  return {
    type: HOST_INFO_READ_SUCCESS,
    payload: hostInfo,
    meta: {
      request,
      thunk,
      host,
      entities: host
    }
  }
}

export const hostInfoReadFailure = (host, error, request, thunk) => {
  return {
    type: HOST_INFO_READ_FAILURE,
    error: true,
    payload: error,
    meta: {
      request,
      thunk,
      host
    }
  }
}

export const hostInfoResetStore = (host) => {
  return {
    type: HOST_INFO_RESET_STORE,
    meta: {
      host
    }
  }
}

export const HOST_INFO_ATTRIBUTE_UPDATE = 'HOST_INFO_ATTRIBUTE_UPDATE'

export const hostInfoAttributeUpdate = (attribute, payload) => {
  return {
    type: HOST_INFO_ATTRIBUTE_UPDATE,
    payload,
    meta: {
      host: 'hostInfo',
      attribute
    }
  }
}

export const INITIALIZE_NEW_HOST = 'INITIALIZE_NEW_HOST'

export const initializeNewHost = (host) => {
  return {
    type: INITIALIZE_NEW_HOST,
    meta: {
      host
    }
  }
}