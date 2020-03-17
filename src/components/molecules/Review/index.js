import React from 'react'
import T from 'prop-types'
import styled, { css } from 'styled-components'

import {
	Heading,
	Paragraph,
	Rating,
	Card
} from 'components'

const StyledCard = styled(Card)`
	display: flex;
	flex-direction: column;
	padding: 1em;
`

const Head = styled.div`
	display: block;
`

const HeadField = styled(Heading)`
	${Head} & {
		display: inline;
	}
`

const Pipe = styled.span`
	padding-left: .5em;
	padding-right: .5em;
`

const Body = styled.div`
	display: flex;
	flex-direction: row;
`

const Review = ({ }) => {
	return (
		<StyledCard>
			<Head>
				<HeadField bold="true" level={6}>Rob</HeadField>
				<Pipe>|</Pipe>
				<HeadField level={6}>20 Jul, 2018</HeadField>
				<Pipe>|</Pipe>
				<Rating />
			</Head>
			<Body>
				<Paragraph>
					Dear Armando, thank you for your hospitality.
					From fetching us at our hotel, taking us via the metro, walking
					us through Isola and Brera, taking us to a nice local bar
					with delicious meal and then giving us suggestions on
					shopping and eating. We will remember the fun we had
				</Paragraph>

			</Body>
		</StyledCard>
	)
}


export default Review