import React, { useState } from 'react'
import T from 'prop-types'
import Dropdown from 'react-dropdown'
import styled, { css } from 'styled-components'
import { palette, ifProp } from 'styled-tools'
import { font } from 'styled-theme'
import { Label, Flex } from 'components'
import { formatDurationArray } from 'utils/helpers'

const Wrapper = styled(Flex)`
	.Dropdown-root {
		display: inline-block;
	}
`

const dayOptions = [...Array(8).keys()]
const hourOptions = [...Array(25).keys()]
const minuteOptions = [0, 15, 30, 45]

const DurationSelection = ({
	...props
}) => {

	const onSelect = (evt, type) => {
		let durationArray = (' ' + props.detail.experience_length).slice(1).split(':')

		switch (type) {
			case 'days':
				durationArray[0] = evt.value
				break;
			case 'hours':
				durationArray[1] = evt.value
				break;
			case 'minutes':
				durationArray[2] = evt.value
				break;
			default:
				console.log('didn\'t select one of: days/hours/minutes')
		}
		props.updateAttribute('experience_length', formatDurationArray(durationArray).join(':'))
	}

	return (
		<Wrapper justifyContent="space-around">
			<Flex column="true">
				<Label>Days</Label>
				<Dropdown options={dayOptions} value={props.detail.experience_length.split(':')[0]} onChange={(evt) => onSelect(evt, 'days')} placeholder="Days" />
			</Flex>
			<Flex column="true">
				<Label>Hours</Label>
				<Dropdown options={hourOptions} value={props.detail.experience_length.split(':')[1]} onChange={(evt) => onSelect(evt, 'hours')} placeholder="Hours" />
			</Flex>
			<Flex column="true">
				<Label>Minutes</Label>
				<Dropdown options={minuteOptions} value={props.detail.experience_length.split(':')[2]} onChange={(evt) => onSelect(evt, 'minutes')} placeholder="Minutes" />
			</Flex>
		</Wrapper>
	)
}

DurationSelection.propTypes = {
}

export default DurationSelection