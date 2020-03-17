// https://github.com/diegohaz/arc/wiki/Reducers
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#modal
import { initialState } from './selectors'
import { MODAL_SHOW, MODAL_HIDE, APPLY_SELECTED } from './actions'

export default (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case APPLY_SELECTED:
      return {
        ...state,
        [payload.name]: true
      }
    case MODAL_SHOW:
      return {
        ...state,
        [payload.name]: true,
      }
    case MODAL_HIDE:
      if (payload.name) {
        return {
          ...state,
          [payload.name]: false,
        }
      }
      return initialState
    default:
      return state
  }
}
