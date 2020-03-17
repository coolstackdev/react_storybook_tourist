const experienceDate = new Date()
experienceDate.setDate(experienceDate.getDate() + 1)
export const initialState = {}
export const initialUserSelectionsState = {
  categories: [],
  languages: [{
    id: 42,
    name: 'English',
  }],
  adults: 1,
  kids: 0,
  experienceDate: null,
  experienceTime: null
}

export const getUserSelectionsState = (state = initialState, userSelections) =>
  state[userSelections] || initialUserSelectionsState

export const getDate = (state = initialState) =>
  state.experienceDate

export const getTime = (state = initialState) =>
  state.experienceTime

export const getCategories = (state = initialState) =>
  state.categories

export const getLanguages = (state = initialState) =>
  state.languages

export const getAdults = (state = initialState) =>
  state.adults

export const getKids = (state = initialState) =>
  state.kids
  // getUserSelectionsState(state, userSelections).kids
