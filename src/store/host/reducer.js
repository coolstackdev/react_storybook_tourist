import { initialState, initialNewHostInfoState, getHostState, getHostInfo } from './selectors'
import get from 'lodash/get'
import {
  HOST_INFO_READ_REQUEST,
  HOST_INFO_READ_SUCCESS,
  HOST_INFO_RESET_STORE,
  INITIALIZE_NEW_HOST,
  HOST_INFO_ATTRIBUTE_UPDATE
} from './actions'

export default (state = initialState, {type, payload, meta}) => {
  const host = get(meta, 'host')
  const attribute = get(meta, 'attribute')

  if (!host) {
    return state
  }

  switch(type) {
    case HOST_INFO_READ_REQUEST:
      return {
        [host]: {
          ...getHostState(state, host),
          hostInfo: getHostInfo(initialState, host)
        }
      }
    case HOST_INFO_READ_SUCCESS:
      return {
        ...state,
        [host]: {
          ...getHostState(state, host),
          hostInfo: {
            ...getHostInfo(state, host),
            ...payload
          }
        }
      }
    case HOST_INFO_RESET_STORE:
      return {
        ...state,
        [host]: {
          ...getHostState(state, host),
          hostInfo: initialState
        }
      }
    case INITIALIZE_NEW_HOST:
      return {
        ...state,
        [host]: {
          ...getHostState(state, host),
          hostInfo: initialNewHostInfoState,
        }
      }
    case HOST_INFO_ATTRIBUTE_UPDATE:
      return {
        ...state,
        [host]: {
          ...getHostState(state, host),
          hostInfo: {
            ...state[host].hostInfo,
            [attribute]: payload
          }
        }
      }
    default:
      return state
  }
}