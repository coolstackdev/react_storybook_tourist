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

const StyledButton = styled(Button)`
	align-self: flex-end;
	background-color: ${palette('secondary', 2)};
	margin: 0 auto;
	margin-bottom: 2rem;

	@media screen and (min-width: 800px) {
		margin: 0;
	}
`

const Block = styled(Flex)`
	flex-direction: column;
	align-items: flex-start;
`

const StyledPolaroid = styled(Polaroid)`
  width: 17em;
`

const ExplainerHeading = styled(Heading)`
  margin-top: 0;
	margin-bottom: 0;
  max-width: 28em;
  font-size: 1.5rem;
  width: 10em;
	font-weight: bold;
	width: 100%;
	text-align: center;

  @media screen and (min-width: 700px) {
    font-size: 2rem;
  }
`

const ExplainerParagraph = styled(Paragraph)`
  margin-top: 0;
  max-width: 28em;
  width: 20em;
  /* text-align: left; */
	margin-top: 2rem;
	margin-bottom: 2rem;
	width: 100%;
	text-align: center;
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
			<SectionWrapper>
				<ContentWrapper>
					<Block>
						<ExplainerHeading>What are these experiences?</ExplainerHeading>
							<ExplainerParagraph>
								Whatever you want them to be. We offer private experiences so that you can do what you want at your own pace. Want food + drinks with an experienced food blogger, or sailing + diving experience with a trained navy marine, or a music venue + recording studio experience with an local DJ... we have you covered. Just select your interests and start exploring.
						</ExplainerParagraph>
						<StyledButton onClick={handleClickSelectInterests}>Select Interests</StyledButton>
					</Block>
					<StyledPolaroid imgSrc="http://espn.go.com/i/eticket/20070710/photos/etick_g_tigerdubai_310.jpg" text="dubai, UAE 2018" />
				</ContentWrapper>
			</SectionWrapper>
		</div>
	)
}

export default SectionFour