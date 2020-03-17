export const initialState = {
  host: {
    hostInfo: {}
  }
}

export const initialHostState = {
  hostInfo: {}
}

export const initialNewHostInfoState = {
  availability_monday_start: 0,
  availability_monday_end: 0,
  availability_tuesday_start: 0,
  availability_tuesday_end: 0,
  availability_wednesday_start: 0,
  availability_wednesday_end: 0,
  availability_thursday_start: 0,
  availability_thursday_end: 0,
  availability_friday_start: 0,
  availability_friday_end: 0,
  availability_saturday_start: 0,
  availability_saturday_end: 0,
  availability_sunday_start: 0,
  availability_sunday_end: 0,
  tagline: '',
  about_me: '',
  best_way_to_reach: '',
  education_work_experience: '',
  how_heard_about_us: '',
  hostid: '',
  languages: '',
  profile_image: ''
}

export const getHostState = (state = initialState, host) => {
  return (
    state[host] || initialHostState
  )
}

export const getHostInfo = (state = initialState, host) => {
  return (
    getHostState(state, host).hostInfo
  )
}