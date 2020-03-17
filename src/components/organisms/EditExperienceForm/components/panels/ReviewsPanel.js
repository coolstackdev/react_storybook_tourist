import React, { useState } from 'react'
import T from 'prop-types'
import styled, { css } from 'styled-components'
import { palette } from 'styled-tools'
import { font } from 'styled-theme'
import api from 'services/api'
import moment from 'moment'
import ImageUploader from 'react-images-upload'
import { toast } from 'react-toastify'
import {
	Field,
	Button,
	Calendar,
	Image
} from 'components'

const DateWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;

	& div:last-child {
		top: 100px;
		left: 0;
	}
`

const StyledButton = styled(Button)`
	position: relative;
	left: 85%;
	border-radius: 30px;
	padding-left: 20px;
	padding-right: 20px;
`

const ImageWrapper = styled.div`
	margin: 0 auto;
	max-width: 300px;
	width: 100%;
	height: 100%;
	overflow: hidden;
	position: relative;
	-webkit-transition:0.3s all ease;
	transition:0.3s ease all;

	&:hover {
		span {
			top: 0;
		}
	}
`

const HoverImage = styled.span`
	color: #fff;
	position: absolute;
	height: 100%;
	top: -100%;
	width: 100%;
	left: 0;
	background-color: #000;
	transition: all 0.3s ease;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0.7;
	font-size: 30px;
	cursor: pointer;
`

const ReviewsPanel = ({
	...props
}) => {
	const [calendarOpen, setCalendarOpen] = useState(false)
	const [reviewDate, setReviewDate] = useState('')
	const [reviewerPhoto, setReviewerPhoto]= useState('')

	const reviewNotify = () => toast("Review Saved!")

	const handleChooseDate = (value) => {
		setReviewDate(value)
		setCalendarOpen(false)
	}

	const handleDateLabelClick = () => {
		setCalendarOpen(!calendarOpen)
	}

	const onSubmit = (event) => {
		event.preventDefault()

		const data = new FormData(event.target)
		api.post('/InsertReview2', {
			experienceid: props.detail.experienceid,
			username: data.get('username'),
			comment: data.get('comment'),
			date: data.get('date'),
			score: data.get('score'),
			reviewer_photo_url: reviewerPhoto
		})
			.then(() => {
			reviewNotify()
		})
		.catch(err => {
			console.error(err)
		})

		event.target.reset()
		setReviewerPhoto('')
		setReviewDate('')
	}

	const uploadImageToBlob = (requestBody) => {
		api.post('/UploadFile', requestBody)
			.then(json => {
				const response = JSON.parse(json.d)
				if (response.statusCode >= 400) {
					console.error(response.message)
					return
				}
				setReviewerPhoto(response.url)
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
				action_type: 2,
			}
			uploadImageToBlob(requestBody)
		}
	}

	const removeImage = () => {
		setReviewerPhoto('')
	}

	return (
		<>
		<form onSubmit={onSubmit}>
			<StyledButton type="submit">Add Review</StyledButton>
			<Field name="username" label="Username" />
			<Field name="comment" label="Comment" />
			<DateWrapper>
				<Field  onClick={handleDateLabelClick} autoComplete="off" name="date" label="Date" onChange={(e) => {setReviewDate(e.target.value)}} value={ reviewDate? moment(reviewDate).format('YYYY-MM-DD') : ''} />
				<Calendar
					handleChooseDate={handleChooseDate}
					calendarOpen={calendarOpen}
					setCalendarOpen={setCalendarOpen}
					reviewCalendar
				/>
			</DateWrapper>
			<Field name="score" label="Score" type="number" />
		</form>
		<ImageUploader
			withIcon={false}
			buttonText='Upload Reviewer Photo'
			onChange={onDrop}
			maxFileSize={5242880}
			label=''
		/>
		{reviewerPhoto &&
			<ImageWrapper onClick={() => removeImage()}>
				<Image imgSrc={reviewerPhoto}/>
				<HoverImage>Remove</HoverImage>
			</ImageWrapper>
		}
		</>
	)
}

ReviewsPanel.propTypes = {
}

export default ReviewsPanel