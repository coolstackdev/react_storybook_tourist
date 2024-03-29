// https://github.com/diegohaz/arc/wiki/Actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#modal
export const MODAL_SHOW = 'MODAL_SHOW'
export const MODAL_HIDE = 'MODAL_HIDE'
export const APPLY_SELECTED = 'APPLY_SELECTED'

export const modalShow = name => {
  return {
    type: MODAL_SHOW,
    payload: {
      name,
    },
    meta: {
      gtm: name,
    },
  }
}

export const modalHide = name => {
  return {
    type: MODAL_HIDE,
    payload: {
      name,
    },
  }
}

export const applySelected = name => {
  return {
    type: APPLY_SELECTED,
    payload: {
      name,
    },
    meta: {
      gtm: name,
    }
  }
}
