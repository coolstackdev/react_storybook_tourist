import React from 'react'
import T from 'prop-types'
import styled, { css } from 'styled-components'
import { palette, prop } from 'styled-tools'
import ReadMoreReact from 'read-more-react'
import './styles.scss'
import TimeAgo from 'timeago-react'

import {
	Heading,
	Paragraph,
	Avatar,
	Card,
	Rating
} from 'components'

const StyledCard = styled(Card)`
	display: flex;
	border-radius: 15px;
	box-shadow: 0px 0px 16px 7px rgba(0,0,0,0.15);
	margin-top: 30px;

	& > div:first-child {
		width: 22%;
	}

	& > div:last-child {
		width: 78%;
	}

	@media screen and (max-width: 500px) {
		flex-direction: column;

		& > div:first-child {
			text-align: center;
			width: 100%;
			padding: 0;
			padding-top: 15px;
		}
		
		& > div:last-child {
			width: 100%;
			padding: 15px;	
		}
	}
`

const FlexWrapperColumn = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: auto;
	margin-bottom: auto;
	padding: 19px 39px 20px 20px;

	img {
		width: 114px;
		height: 114px;
	}

	.read-more-button {
		font-size: 14px;
		line-height: 1.5;
		color: #51C5A1;
		font-weight: 500;
		margin-top: 0;
	}
`

const CardBody = styled(FlexWrapperColumn)`
	padding: 23px 30px 17px 0;	

	.displayed-text {
		font-size: 19px;
		line-height: 1.32;
		color: #6b6b6b;
	}

	@media screen and (max-width: 500px) {
		.display-text-group {
			text-align: center;
		}

		.displayed-text {
			font-size: 16px;
		}
	}
`

const ReviewName = styled(Heading)`
	text-align: left;
	font-weight: bold;
	font-size: 20px;
	line-height: 1.6;
	color: #000;
	margin: 0;
	width: 80%;
`

const ReviewOrigin = styled(Heading)`
	letter-spacing: 1px;
	font-size: 18px;
	color: #000;
	margin-top: 0;
`

const ReviewWrapper = styled.div`
	margin-top: 50px;
`

const StyledRating = styled(Rating)`
	color: #F2A034;
`

const FlexWrapperRow = styled.div`
	display: flex;
	flex-direction: row;
`

const StyledTimeAgo = styled(TimeAgo)`
	font-size: 14px;
	line-height: 1.5;
	color: #BEBEBE;
	margin-bottom: 20px;

	@media screen and (max-width: 500px) {
		margin-bottom: 10px;
	}
`

const ReviewCards = ({
	className,
	...props
}) => {

	const reviewList = props.detail.reviews.map( (review, index) => {
		const res = review.date.split('/')
		const date = res[2] + '-' + res[0] + '-' + res[1] + ' 00:00:00'
		
		return (
			<StyledCard key={index} flat className={className}>
				<FlexWrapperColumn>
					<Avatar avatarUrl={review.reviewer_photo_url} />
				</FlexWrapperColumn>
				<CardBody>
					<FlexWrapperRow>
						<ReviewName center="true" level={4}>{review.reviewer_name}</ReviewName>
						<StyledRating initialRating={review.score} placeholderValue={review.score}/>
					</FlexWrapperRow>
					<StyledTimeAgo datetime={date}/>
					<ReadMoreReact text={review.comment} readMoreText="Read More" />
				</CardBody>
			</StyledCard>
		)
	})

	return (
		<ReviewWrapper>
			{reviewList}
		</ReviewWrapper>
	)
}

export default ReviewCards