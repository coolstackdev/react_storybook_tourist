export const initialState = {
  experience: {
    list: [],
    detail: {}
  }
}

export const initialResourceState = {
  list: [],
  detail: {}
}

export const initialNewExperienceDetailState = {
  experienceid: 'new',
  title: '',
  tag_line: '',
  categories: [],
  languages: 'English',
  city: '',
  country: '',
  experience_length: '00:00:00',
  description: '',
  included: '',
  expect: '',
  bring: '',
  start_location: '',
  end_location: '',
  latitude: 49.2827,
  longitude: -123.1207,
  currency: 'USD',
  fixed_cost: 0,
  fixed_cost_pp: 0,
  hourly_rate: 0,
  capacity: 0,
  discount: 0,
  photos: [],
  highlights: [],
  original_price: 0,
  highlights_links_string: ''
}

export const getResourceState = (state = initialState, resource) => {
  return (
    state[resource] || initialResourceState
  )
}

export const getList = (state = initialState, resource) => {
  return (
    getResourceState(state, resource).list
  )
}

export const getDetail = (state = initialState, resource) => {
  return (
    getResourceState(state, resource).detail
  )
}
