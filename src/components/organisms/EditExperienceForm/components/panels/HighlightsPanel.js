import React from 'react'
import T from 'prop-types'
import styled, { css } from 'styled-components'
import { palette } from 'styled-tools'
import { font } from 'styled-theme'
import api from 'services/api'
import ImageUploader from 'react-images-upload'
import { createPhotoObj, moveObjectFieldToArray, moveStringToArray } from 'utils/helpers'
import {
	Heading,
	Card,
	Link,
	Image,
	Field,
} from 'components'
import { FieldExplanation } from '../index'
import { Highlights } from '../explanations'
import HighlightsPreviewContainer from '../explanations/HighlightsPreviewContainer'

const HighlightsPanel = ({
	explanationOpen,
	handleFocusField,
	...props
}) => {

	const uploadImageToBlob = (requestBody) => {
		api.post('/UploadFile', requestBody)
			.then(json => {
				const response = JSON.parse(json.d)
				if (response.statusCode >= 400) {
					console.error(response.message)
					return
				}

				if (props.detail.highlights_links_string === '') {
					props.updateAttribute('highlights_links_string', response.url)
				} else {
					props.updateAttribute('highlights_links_string', props.detail.highlights_links_string + '|' + response.url)
				}
			})
			.catch(err => {
				console.error('cannot upload photo:', err)
			})
	}

	const onDrop = (pictureFiles, pictureDataURLs) => {
		if (!pictureDataURLs) {
			return
		}
		let requestBody
		for (let i = 0; i < pictureDataURLs.length; i++) {

			requestBody = {
				str_contents: pictureDataURLs[i].split(',')[1],
				filename: pictureFiles[i].name,
				action_type: 3,
			}
			uploadImageToBlob(requestBody)
		}
	}

	return (
		<>
			<Field name="highlights" label="Highlights/Uniqueness" onFocus={() => handleFocusField('highlights')} />
			<FieldExplanation hidden={explanationOpen !== 'highlights'} content={
				<Highlights {...props} />
			}/>

			<ImageUploader
				withIcon={false}
				buttonText='+'
				onChange={onDrop}
				maxFileSize={5242880}
				// withPreview={true}
				label=''
				// defaultImages={moveObjectFieldToArray(props.detail.photos, 'photo_url')}
			/>
			{props.detail.highlights_links_string &&
				<HighlightsPreviewContainer images={moveStringToArray(props.detail.highlights_links_string)} {...props} />
			}

			{/* <Field name="roadmap" label="Roadmap" onFocus={() => handleFocusField('roadmap')} />
			<FieldExplanation hidden={explanationOpen !== 'roadmap'} content={
				<Roadmap {...props} />
			}/> */}
		</>
	)
}

HighlightsPanel.propTypes = {
}

export default HighlightsPanel