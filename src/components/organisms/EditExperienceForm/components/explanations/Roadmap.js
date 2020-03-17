import React, { useState } from 'react'
import T from 'prop-types'
import styled, { css } from 'styled-components'
import { palette, ifProp } from 'styled-tools'
import { font } from 'styled-theme'
import { WithContext as ReactTags } from 'react-tag-input'

const KeyCodes = {
	comma: 188,
	enter: 13,
}

const delimiters = [KeyCodes.comma, KeyCodes.enter]

const Roadmap = ({
	...props
}) => {

	const handleDelete = (i) => {
		props.setRoadmap(props.roadmap.filter((tag, index) => index !== i))
	}

	const handleAddition = (tag) => {
		props.setRoadmap([...props.roadmap, tag])
	}

	const handleDrag = (tag, currPos, newPos) => {
		console.log(tag)
		const tags = [...tags];
		const newTags = tags.slice();

		newTags.splice(currPos, 1);
		newTags.splice(newPos, 0, tag);

		// re-render
		props.setRoadmap(newTags)
	}

	return (
		<div className="react-tags">
			<ReactTags
				tags={props.roadmap}
				handleDelete={handleDelete}
				handleAddition={handleAddition}
				handleDrag={handleDrag}
				delimiters={delimiters}
				inputFieldPosition="bottom"
			/>
		</div>
	)
}

Roadmap.propTypes = {
}

export default Roadmap