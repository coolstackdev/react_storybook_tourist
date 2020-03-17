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
	align-items: center;
	
	@media screen and (min-width: 800px) {
		max-width: 1039px;
		align-items: flex-start;
  }
`

const ExplainerHeading = styled(Heading)`
  margin-top: 0;
  max-width: 375px;
	width: 15em;
	font-family: Avenir;
  font-size: 24px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
	font-weight: bold;
	color: black;
	margin-bottom: 0;
	text-align: center;

  @media screen and (min-width: 700px) {
		font-size: 50px;
		width: 10em;
		text-align: left;
  }
`

const StyledHeading = styled(Heading)`
	font-size: 16px;
	border-bottom: solid 2.5px #b9b6b6;
	text-align: center;
	max-width: 375px;

	@media screen and (min-width: 800px) {
		font-size: 20px;
		text-align: left;
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
				<ExplainerHeading>Explore over 75+ cities</ExplainerHeading>
				<StyledHeading level={2}>View our cities</StyledHeading>
				<CitySlider />
			</StyledSectionWrapper>
		</div>
	)
}

export default SectionThree