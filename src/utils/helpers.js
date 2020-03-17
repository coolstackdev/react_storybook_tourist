export const moveObjectFieldToArray = (obj, key) => {
	return obj.map(el => el[key])
}
export const truncate =  (str, length, ending) => {
	if (length == null) {
		length = 100
	}
	if (ending == null) {
		ending = '...'
	}
	if (str.length > length) {
		return str.substring(0, length - ending.length) + ending
	} else {
		return str
	}
}

export const getSuggestedDisplayName = (arrayOfLocations) => {
	const listOfDisplayNames = []
	let displayName = ''
	arrayOfLocations.forEach((location, i) => {
		displayName += location.name

		if (location.region) {
			displayName += `, ${location.region}`
		}

		displayName += `, ${location.country}`
		const element = {
			displayName,
			cityid: location.cityid,
			nickname: location.nickname ? location.nickname : null
		}
		listOfDisplayNames.push(element)
		displayName = ''
	})
	return listOfDisplayNames
}

export const formattedDateWithoutTime = (date) => {
	const dateString = date.toLocaleString("en-US").split(',').slice(0, 1)[0].toString()
	return dateString.split('/').map(dateElement => {
		return dateElement.length < 2 ? "0" + dateElement : dateElement
	}).join('/')
}

export const convertTimeFromRawToProper = (rawTime) => {
	let time = ''
	const splitTime = rawTime.toString().split('.')
	time += splitTime[0]
	if (splitTime[1]) {
		time += ':30'
	} else {
		time += ':00'
	}
	return time
}

export const getTimesForCurrentDate = (date, availabilities) => {
	if (!availabilities) {
		return []
	}
	if (!availabilities.hasOwnProperty(formattedDateWithoutTime(date))) {
		return []
	}
	const rawTimes = availabilities[formattedDateWithoutTime(date)]
	const properTimes = rawTimes.map(rawTime => {
		return convertTimeFromRawToProper(rawTime)
	})
	return properTimes
}

export const getTourCost = (basePrice, numAdults, includedInBasePrice, costPerAdditionalAdult) => {
	if (basePrice === undefined || numAdults === undefined || includedInBasePrice === undefined || includedInBasePrice === undefined) {
		console.error('incorrect number of args passed to getTourCost()')
		return
	}

	let difference = 0
	let finalCost = basePrice
	if (numAdults > includedInBasePrice) {
		difference = numAdults - includedInBasePrice
	}
	finalCost += difference * costPerAdditionalAdult
	return finalCost
}

export const getParameterByName = (name) => {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
		results = regex.exec(location.search);
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

export const createLanguagesAttr = (languageStr) => {
	return languageStr.split(',').map(language => {
		return {
			language: language.trim(),
			level: 'Fluent'
		}
	})
}

export const createPhotosAttr = (photosArr) => {
	return photosArr.map((photoObj, i) => {
		return {
			...photoObj,
			order: i + 1
		}
	})
}

export const createPhotoObj = (url) => {
	return {
		__type: "Framework.Photo",
		photo_url: url,
		order: null
	}
}

// export const minutesToDuration = (minutes) => {
// 	const numDays = Math.floor(minutes / 1440)
// 	const numHours = Math.floor(((minutes % 1440) % 3600) / 60)
// 	const numMinutes = Math.floor((minutes % 1440) % 60)
// 	return [numDays, numHours, numMinutes]
// 	// return `${numDays} days | ${numHours} hours | ${numMinutes} minutes`
// }

export const formatDurationArray = (arr) => {
	return arr.map(el => {
		if (el.toString().length !== 2) {
			return "0" + el
		}
		return el
	})
}