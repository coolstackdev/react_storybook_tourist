import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-tools'
import { useWindowSize } from 'hooks'
import {
	Heading,
	Link,
} from 'components'
import SectionWrapper from './SectionWrapper'
import { CitySlider } from '../containers'

const StyledSectionWrapper = styled(SectionWrapper)`
	align-items: flex-start;
`

const ExplainerHeading = styled(Heading)`
  margin-top: 0;
  max-width: 28em;
  font-size: 1.5rem;
  width: 10em;
  font-weight: bold;

  @media screen and (min-width: 700px) {
    font-size: 1.8rem;
  }
`

const SectionThree = ({
	...props
}) => {
	let { width } = useWindowSize()
	let mobile = width < 700

	return (
		<div className="section">
			<StyledSectionWrapper>
				<ExplainerHeading>Explore 75+ cities</ExplainerHeading>
				<Heading level={2}>We have experiences around the globe</Heading>
				<CitySlider />
			</StyledSectionWrapper>
		</div>
	)
}

export default SectionThree