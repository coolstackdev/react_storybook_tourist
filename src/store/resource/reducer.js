// https://github.com/diegohaz/arc/wiki/Reducers
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#resource
import findIndex from 'lodash/findIndex'
import get from 'lodash/get'
import { initialState, getResourceState, initialNewExperienceDetailState, getList, getDetail } from './selectors'
import {
  RESOURCE_CREATE_SUCCESS,
  RESOURCE_LIST_READ_REQUEST,
  RESOURCE_LIST_READ_SUCCESS,
  RESOURCE_DETAIL_READ_REQUEST,
  RESOURCE_DETAIL_READ_SUCCESS,
  RESOURCE_UPDATE_SUCCESS,
  RESOURCE_DELETE_SUCCESS,
  RESOURCE_DETAIL_RESET_STORE,
  INITIALIZE_NEW_EXPERIENCE,
  ATTRIBUTE_UPDATE,
} from './actions'

const updateOrDeleteReducer = (state, { type, payload, meta }) => {
  const resource = get(meta, 'resource')
  const needle = get(meta, 'request.needle')
  const needleIsObject = typeof needle === 'object'
  const list = getList(state, resource)
  const index = needleIsObject ? findIndex(list, needle) : list.indexOf(needle)

  if (index < 0) {
    return state
  }

  switch (type) {
    case RESOURCE_UPDATE_SUCCESS:
      return {
        ...state,
        [resource]: {
          ...getResourceState(state, resource),
          list: [
            ...list.slice(0, index),
            needleIsObject ? { ...list[index], ...payload } : payload,
            ...list.slice(index + 1),
          ],
        },
      }
    case RESOURCE_DELETE_SUCCESS:
      return {
        ...state,
        [resource]: {
          ...getResourceState(state, resource),
          list: [
            ...list.slice(0, index),
            ...list.slice(index + 1),
          ],
        },
      }
    // istanbul ignore next
    default:
      return state
  }
}

export default (state = initialState, { type, payload, meta }) => {
  const resource = get(meta, 'resource')
  const attribute = get(meta, 'attribute')

  if (!resource) {
    return state
  }

  switch (type) {
    case RESOURCE_CREATE_SUCCESS:
      return {
        ...state,
        [resource]: {
          ...getResourceState(state, resource),
          list: [payload, ...getList(state, resource)],
        },
      }
    case RESOURCE_LIST_READ_REQUEST:
      return {
        ...state,
        [resource]: {
          ...getResourceState(state, resource),
          list: getList(initialState, resource)
        }
      }
    case RESOURCE_LIST_READ_SUCCESS:
      return {
        ...state,
        [resource]: {
          ...getResourceState(state, resource),
          list: payload,
        },
      }
    case RESOURCE_DETAIL_READ_REQUEST:
      return {
        ...state,
        [resource]: {
          ...getResourceState(state, resource),
          detail: getDetail(initialState, resource),
        }
      }
    case RESOURCE_DETAIL_READ_SUCCESS:
      return {
        ...state,
        [resource]: {
          ...getResourceState(state, resource),
          detail: {
            ...getDetail(state, resource),
            ...payload
          },
        },
      }

    case RESOURCE_DETAIL_RESET_STORE:
      return {
        ...state,
        [resource]: {
          ...getResourceState(state, resource),
          detail: initialState
        }
      }

    case RESOURCE_UPDATE_SUCCESS:
    case RESOURCE_DELETE_SUCCESS:
      return updateOrDeleteReducer(state, { type, payload, meta })

    case INITIALIZE_NEW_EXPERIENCE:
      return {
        ...state,
        [resource]: {
          ...getResourceState(state, resource),
          detail: initialNewExperienceDetailState,
        }
      }

    case ATTRIBUTE_UPDATE:
      return {
        ...state,
        [resource]: {
          ...getResourceState(state, resource),
          detail: {
            ...state[resource].detail,
            [attribute]: payload
          }
        }
      }

    default:
      return state
  }
}
