import React from 'react'
import T from 'prop-types'
import styled, { css } from 'styled-components'
import { palette } from 'styled-tools'
import ReadMoreReact from 'read-more-react'
import './styles.scss'

import {
	Heading,
	Paragraph,
	Avatar,
	Card
} from 'components'

const Wrapper = styled.div`` //this is glitched. it must stay or will ruin styles.

const StyledCard = styled(Card)`
	display: flex;
	flex-direction: row;
	border-radius: 58px;
	box-shadow: 0px 0px 16px 7px rgba(0,0,0,0.15);

	@media screen and (max-width: 500px) {
		flex-direction: column;
	}
`

const FlexWrapperColumn = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: auto;
	margin-bottom: auto;
	margin: auto;
	padding: 19px 41px 26px 28px;

	img {
		width: 154px;
		height: 154px;
	}

	@media screen and (max-width: 500px) {
		padding: 19px 26px 26px 28px;
		
		img {
			width: 100px;
			height: 100px;
		}
	}
`

const CardBody = styled(FlexWrapperColumn)`
	padding: 19px 30px 26px 0;

	.displayed-text {
		font-size: 20px;
		line-height: 1.7;
	}

	@media screen and (max-width: 500px) {
		padding: 0 20px 20px 20px;

		.display-text-group {
			text-align: center;
		}

		.displayed-text {
			font-size: 16px;
			line-height: 1.3;
		}
	}
`

const HostName = styled(Heading)`
	text-align: left;
	font-weight: bold;
	font-size: 20px;
	line-height: 1.2;
	color: #000;

	@media screen and (max-width: 500px) {
		text-align: center;
		margin-top: 0;
	}
`

const HostOrigin = styled(Heading)`
	letter-spacing: 1px;
	font-size: 18px;
	color: #000;
	margin-top: 0;

	@media screen and (max-width: 500px) {
		text-align: center;
	}
`

const HostCard = ({
	className,
	...props
}) => {

	return (
		<StyledCard flat className={className}>
			<FlexWrapperColumn>
				<Avatar avatarUrl={props.detail.host_thumbnail_url} />
			</FlexWrapperColumn>
			<CardBody>
				<HostName center="true" level={4}>{props.detail.host_name}</HostName>
				<HostOrigin level={4}>Your Host is from: {props.detail.city}, {props.detail.country}</HostOrigin>
				<ReadMoreReact text={props.detail.host_summary} readMoreText="Read More" />
			</CardBody>
		</StyledCard>
	)
}

HostCard.propTypes = {
	detail: T.shape({
		host_thumbnail_url: T.string,
		host_name: T.string.isRequired,
		city: T.string.isRequired,
		country: T.string.isRequired,
		host_summary: T.string
	})
}

export default HostCard