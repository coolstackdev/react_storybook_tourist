import React, { useState, useEffect } from 'react'
import T from 'prop-types'
import { CitySlider } from '../components'
import api from 'services/api'

const CitySliderContainer = ({
	...props
}) => {
	const [cityList, setCityList] = useState([])

	const getCityList = () => {
		api.post('/GetPopularCities', { count: 20 })
		.then(json => {
			const result = json.d
			setCityList(result)
		})
	}

	useEffect(() => {
		getCityList()
	}, [])

	return <CitySlider list={cityList} />
}

CitySliderContainer.propTypes = {
}

CitySliderContainer.defaultProps = {
}



export default CitySliderContainer
