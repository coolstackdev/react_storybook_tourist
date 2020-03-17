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
	padding: 1em;
	background-color: ${palette('grayscale', 6)};
`

const FlexWrapperColumn = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: auto;
	margin-bottom: auto;
`

const CardBody = styled(FlexWrapperColumn)`
	margin-left: 1.6em;
`

const HostName = styled(Heading)`
	color: ${palette('grayscale', 2)};
	font-weight: bold;
`

const HostOrigin = styled(Heading)`
	color: ${palette('secondary', 1)};
	letter-spacing: 1px;
	font-size: 1.1rem;
	font-weight: bold;
`

const HostCard = ({
	className,
	...props
}) => {

	return (
		<StyledCard flat className={className}>
			<FlexWrapperColumn>
				<Avatar avatarUrl={props.detail.host_thumbnail_url} />
				<HostName center="true" level={4}>{props.detail.host_name}</HostName>
			</FlexWrapperColumn>
			<CardBody>
				<HostOrigin level={4}>Your Host is from {props.detail.city}, {props.detail.country}</HostOrigin>
				<ReadMoreReact text={props.detail.host_summary} readMoreText="Read more" />
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