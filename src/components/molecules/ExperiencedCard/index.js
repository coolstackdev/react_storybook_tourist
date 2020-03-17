import React from 'react'
import T from 'prop-types'
import styled, { css } from 'styled-components'
import { palette } from 'styled-tools'
import { font } from 'styled-theme'
import {
	Heading,
	Card,
	Link,
	Image,
} from 'components'

const StyledCard = styled(Card)`
	display: flex;
	flex-direction: column;
	align-items: space-between;
	flex-wrap: wrap;
	margin-left: .7em;
	margin-right: 1.7em;
	width: 306px;
	min-height: 28rem;
	padding: 1rem;
`

const StyledImage = styled(Image)`
	height: 22em;
	/* border-radius: 0.8rem; */
`

const CityNameHeading = styled(Heading)`
	margin-top: 0.6em;
	margin-bottom: 0;
  font-size: 23px;
  text-align: center;
  color: #000;
`

const ExperiencedCard = ({
	url,
	name,
	...props
}) => {

	return (
		<StyledCard>
      { url === '' ?
			  <StyledImage imgSrc={require('../../atoms/Icon/icons/blank.png')} />
        :
        <StyledImage imgSrc={url} />
      }
			<CityNameHeading>{name}</CityNameHeading>
		</StyledCard>
	)
}

ExperiencedCard.propTypes = {
}

export default ExperiencedCard