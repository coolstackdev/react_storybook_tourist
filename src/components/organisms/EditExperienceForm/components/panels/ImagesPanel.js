import React, { useState } from 'react'
import T from 'prop-types'
import styled, { css } from 'styled-components'
import { palette } from 'styled-tools'
import { font } from 'styled-theme'
import api from 'services/api'
import { createPhotoObj, moveObjectFieldToArray } from 'utils/helpers'
import ImageUploader from 'react-images-upload'
import {
	List
} from 'components'
import ImagePreviewContainer from '../explanations/ImagePreviewContainer'

const StyledList = styled(List)`
	columns: 2;
	list-style: none;
`

const ImagesPanel = ({
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
				props.updateAttribute('photos', [...props.detail.photos, createPhotoObj(response.url)])
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
			<StyledList>
				<li>Min number of images: 3</li>
				<li>Max number of images: 10</li>
				<li>Min resolution 72 DPI</li>
				<li>Max resolution 300 DPI</li>
			</StyledList>
			<ImageUploader
				withIcon={false}
				buttonText='+'
				onChange={onDrop}
				maxFileSize={5242880}
				// withPreview={true}
				label=''
				// defaultImages={moveObjectFieldToArray(props.detail.photos, 'photo_url')}
			/>
			<ImagePreviewContainer images={moveObjectFieldToArray(props.detail.photos, 'photo_url')} {...props} />
		</>
	)
}

ImagesPanel.propTypes = {
}

export default ImagesPanel