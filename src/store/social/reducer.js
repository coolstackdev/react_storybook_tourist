// https://github.com/diegohaz/arc/wiki/Reducers
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social
import { initialState } from './selectors'
import {
  SOCIAL_LOGIN_SUCCESS,
  SOCIAL_LOGOUT,
  EMAIL_LOGIN_SUCCESS,
  EMAIL_REGISTER_SUCCESS,
  HOST_ID_UPDATE,
} from './actions'

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SOCIAL_LOGIN_SUCCESS:
      return {
        ...state,
        user: payload,
      }
    case EMAIL_LOGIN_SUCCESS:
      return {
        ...state,
        user: payload,
      }
    case EMAIL_REGISTER_SUCCESS:
      return {
        ...state,
        user: payload,
      }
    case SOCIAL_LOGOUT:
      return {
        ...state,
        user: initialState.user,
      }
    case HOST_ID_UPDATE:
      return {
        ...state,
        user: {
          ...state.user,
          hostid: payload,
        }
      }
    default:
      return state
  }
}
