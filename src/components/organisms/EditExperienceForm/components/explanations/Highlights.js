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

const Highlights = ({
	...props
}) => {

	const handleDelete = (i) => {
		props.updateAttribute('highlights', props.detail.highlights.filter((tag, index) => index !== i))
	}

	const handleAddition = (tag) => {
		props.updateAttribute('highlights', [...props.detail.highlights, tag.text])
	}

	// const handleDrag = (tag, currPos, newPos) => {
	// 	const tags = [...tags];
	// 	const newTags = tags.slice();

	// 	newTags.splice(currPos, 1);
	// 	newTags.splice(newPos, 0, tag);

	// 	// re-render
	// 	props.updateAttribute('highlights', newTags)
	// }

	const makeObjectFromArray = (inputArr) => {
		const outputArr = []
		inputArr.forEach(el => {
			outputArr.push({
				id: el,
				text: el
			})
		})

		return outputArr
	}

	return (
		<div className="react-tags">
			<ReactTags
				tags={makeObjectFromArray(props.detail.highlights)}
				handleDelete={handleDelete}
				handleAddition={handleAddition}
				// handleDrag={handleDrag}
				delimiters={delimiters}
				inputFieldPosition="bottom"
				allowDragDrop={false}
			/>
		</div>
	)
}

Highlights.propTypes = {
}

export default Highlights