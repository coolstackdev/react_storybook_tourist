import * as R from 'ramda'
import { initialUserSelectionsState } from './selectors'
import {
  CATEGORY_ADD,
  CATEGORY_REMOVE,
  LANGUAGE_ADD,
  LANGUAGE_REMOVE,
  ADULT_ADD,
  ADULT_REMOVE,
  KID_ADD,
  KID_REMOVE,
  CHANGE_EXPERIENCE_DATE,
  CHANGE_EXPERIENCE_TIME,
} from './actions'

export default (state = initialUserSelectionsState, { type, payload = {} }) => {
  switch (type) {
    case CATEGORY_ADD:
      return {
        ...state,
        categories: [
          ...state.categories,
          payload.category
        ]
      }
    case CATEGORY_REMOVE:
      return {
        ...state,
        categories: R.without([payload.category], state.categories)
      }
    case LANGUAGE_ADD:
      return {
        ...state,
        languages: [...state.languages, payload.language]
      }
    case LANGUAGE_REMOVE:
      return {
        ...state,
        languages: R.without([payload.language], state.languages)
      }
    case ADULT_ADD:
      return {
        ...state,
        adults: state.adults + 1
      }
    case ADULT_REMOVE:
      return {
        ...state,
        adults: state.adults - 1
      }
    case KID_ADD:
      return {
        ...state,
        kids: state.kids + 1
      }
    case KID_REMOVE:
      return {
        ...state,
        kids: state.kids - 1
      }
    case KID_REMOVE:
      return {
        ...state,
        kids: state.kids - 1
      }
    case CHANGE_EXPERIENCE_DATE:
      return {
        ...state,
        experienceDate: payload.experienceDate
      }
    case CHANGE_EXPERIENCE_TIME:
      return {
        ...state,
        experienceTime: payload.experienceTime
      }
    default:
      return state
  }
}
