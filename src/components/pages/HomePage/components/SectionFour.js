import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-tools'
import {
	Heading,
	Flex,
	Polaroid,
	Button,
	Paragraph,
} from 'components'
import SectionWrapper from './SectionWrapper'

const StyledSectionWrapper = styled(SectionWrapper)`
	padding: 0;

	@media screen and (min-width: 800px) {
		max-width: 1039px;
	}
`

const StyledButton = styled(Button)`
	align-self: flex-end;
	background-color: ${palette('secondary', 2)};
	margin: 0 auto;
	margin-bottom: 2rem;
	border-radius: 22.5px;
	width: 191px;
	font-family: Avenir;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
	letter-spacing: normal;

	@media screen and (min-width: 800px) {
		margin: 0;
	}
`

const Block = styled(Flex)`
	flex-direction: column;
	align-items: flex-start;
`

const StyledPolaroid = styled(Polaroid)`
	width: 20em;
	color: black !important;
	margin-left: 0;

	& h1 {
		color: ${palette('primary', 1)};
	}

	@media screen and (min-width: 800px) {
		margin-left: 47px;
		width: 471px;
	}
`

const ExplainerHeading = styled(Heading)`
  font-size: 24px;
	font-weight: bold;
	text-align: center;
	font-family: Avenir;
	font-weight: 900;
	width: 375px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
	letter-spacing: normal;
	color: black;

  @media screen and (min-width: 700px) {
		font-size: 50px;
		text-align: left;
		width: 521px;
  }
`

const ExplainerParagraph = styled(Paragraph)`
  margin-top: 0;
  max-width: 521px;
  width: 521px;
	
	margin-bottom: 2rem;
	width: 100%;
	text-align: center;
	font-family: Avenir;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
	letter-spacing: normal;
	
	@media screen and (min-width: 800px) {
		text-align: left;
		line-height: 1.88;
	}
`

const ContentWrapper = styled(Flex)`
	width: 100%;
	justify-content: center;
	flex-wrap: wrap;

	@media screen and (min-width: 800px) {
		justify-content: space-between;
	}
`

const SectionFour = ({
	handleClickSelectInterests,
	...props
}) => {

	return (
		<div className="section">
			<StyledSectionWrapper>
				<ContentWrapper>
					<Block>
						<ExplainerHeading>What are these experiences?</ExplainerHeading>
							<ExplainerParagraph>
							Whatever you want them to be. We offer private experiences so that you can do what you want at your own pace. Want food + drinks with an experienced food blogger, or sailing + diving experience with a trained navy marine, or a music venue + recording studio experience with an local DJ... we have you covered. Just select your interests and start exploring.
						</ExplainerParagraph>
						<StyledButton onClick={handleClickSelectInterests}>Learn more</StyledButton>
					</Block>
					<StyledPolaroid imgSrc="http://espn.go.com/i/eticket/20070710/photos/etick_g_tigerdubai_310.jpg" text="dubai, UAE 2018" />
				</ContentWrapper>
			</StyledSectionWrapper>
		</div>
	)
}

export default SectionFour