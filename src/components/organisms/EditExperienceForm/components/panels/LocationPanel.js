import React from 'react'
import T from 'prop-types'
import styled, { css } from 'styled-components'
import { palette } from 'styled-tools'
import { font } from 'styled-theme'
import {
	Map,
	Field,
} from 'components'

const StyledMap = styled(Map)`
	height: 10em;
	border-radius: 0.6em;
`
const LocationPanel = ({
	...props
}) => {

	const onClickMap = (ref, map, evt) => {
		props.updateAttribute('latitude', evt.latLng.lat())
		props.updateAttribute('longitude', evt.latLng.lng())
	}

	return (
		<>
			<Field name="start" label="Start point" onChange={(e) => props.updateAttribute('start_location', e.target.value)} value={props.detail.start_location} />
			<Field name="end" label="End point" onChange={(e) => props.updateAttribute('end_location', e.target.value)} value={props.detail.end_location} />
			<StyledMap lat={props.detail.latitude} lng={props.detail.longitude} onClickMap={onClickMap} zoom={10} />
		</>
	)
}

LocationPanel.propTypes = {
}

export default LocationPanel