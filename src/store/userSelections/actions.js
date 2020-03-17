export const CATEGORY_ADD = 'CATEGORY_ADD'
export const CATEGORY_REMOVE = 'CATEGORY_REMOVE'
export const LANGUAGE_ADD = 'LANGUAGE_ADD'
export const LANGUAGE_REMOVE = 'LANGUAGE_REMOVE'

export const categoryAdd = (category) => {
	return {
		type: CATEGORY_ADD,
		payload: {
			category,
		}
	}
}

export const categoryRemove = (category) => {
	return {
		type: CATEGORY_REMOVE,
		payload: {
			category,
		}
	}
}

export const languageAdd = (language) => {
	return {
		type: LANGUAGE_ADD,
		payload: {
			language,
		}
	}
}

export const languageRemove = (language) => {
	return {
		type: LANGUAGE_REMOVE,
		payload: {
			language,
		}
	}
}

export const ADULT_ADD = 'ADULT_ADD'
export const ADULT_REMOVE = 'ADULT_REMOVE'
export const KID_ADD = 'KID_ADD'
export const KID_REMOVE = 'KID_REMOVE'

export const adultAdd = () => {
	return {
		type: ADULT_ADD,
	}
}

export const adultRemove = () => {
	return {
		type: ADULT_REMOVE,
	}
}

export const kidAdd = () => {
	return {
		type: KID_ADD,
	}
}

export const kidRemove = () => {
	return {
		type: KID_REMOVE,
	}
}

export const CHANGE_EXPERIENCE_DATE = 'CHANGE_EXPERIENCE_DATE'
export const CHANGE_EXPERIENCE_TIME = 'CHANGE_EXPERIENCE_TIME'

export const changeExperienceDate = (experienceDate) => {
	return {
		type: CHANGE_EXPERIENCE_DATE,
		payload: {
			experienceDate
		}
	}
}

export const changeExperienceTime = (experienceTime) => {
	return {
		type: CHANGE_EXPERIENCE_TIME,
		payload: {
			experienceTime
		}
	}
}
