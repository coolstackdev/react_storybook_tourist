import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-tools'
import { useWindowSize } from 'hooks'
import {
	Heading,
	Paragraph,
	Flex,
	Polaroid,
	Button,
} from 'components'
import SectionWrapper from './SectionWrapper'

const StyledSectionWrapper = styled(SectionWrapper)`
  /* margin-top: 6rem; */
`

const Segment = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 30em;
  /* margin-bottom: 2.6em; */
  @media screen and (min-width: 700px) {
    max-width: 37em;
  }

  @media screen and (min-width: 800px) {
    max-width: 43em;
  }
`

const ExplainerHeading = styled(Heading)`
  margin-top: 0;
  font-size: 1.5rem;
  width: 10em;
  font-weight: bold;
  width: 100%;
  text-align: center;
  /* max-width: 19em; */

  @media screen and (min-width: 700px) {
    text-align: left;
    font-size: 2rem;
    max-width: 10em;
  }

  @media screen and (min-width: 800px) {
    max-width: 10em;
  }
  `

const ExplainerParagraph = styled(Paragraph)`
  margin-top: 0;
  margin-bottom: 1rem;
  width: 100%;
  text-align: center;

  @media screen and (min-width: 700px) {
    max-width: 16em;
    text-align: left;
  }

  @media screen and (min-width: 800px) {
    max-width: 20em;
  }
`

const StyledPolaroid = styled(Polaroid)`
  /* width: 17em; */
  margin-bottom: 1.8em;

  @media screen and (min-width: 700px) {
    width: 15em;
  }
`


const TextPart = styled(Flex)`
  /* align-items: flex-start; */
  width: initial;
  flex: 1;
  /* margin-left: 1.3em; */

  @media screen and (min-width: 700px) {
    flex: initial;
    align-items: flex-end;
  }

  & h1 {
    /* text-align: right; */
    margin-bottom: 0;
  }
  & p {
    /* text-align: right; */
    margin-top: 2rem;
    /* margin-bottom: 2rem; */
  }
`

const LearnMoreButton = styled(Button)`
  background-color: ${palette('secondary', 2)};
`

const SectionTwo = (props) => {
	let { width } = useWindowSize()
	let mobile = width < 700

	return (
    <div className="section" id="what-we-do">
			<StyledSectionWrapper>
				<Segment>
					<ExplainerHeading>Memorable Experiences around the world</ExplainerHeading>
					<ExplainerParagraph>
						Find unique experiences around the world that are created for you by locals. Locals use their knowledge and passions to create memorable unique experiences. You get to personalize these experiences based on your desires and needs.
					</ExplainerParagraph>
				</Segment>
				<Segment wrap="true">
					<StyledPolaroid imgSrc="https://cdn.britannica.com/26/162626-050-3534626F/Koala.jpg" text="Australia Zoo, 2019" />
					<TextPart column="true">
						<ExplainerHeading>How does it work?</ExplainerHeading>
						<ExplainerParagraph>
							Local hosts create experiences based on their insights, personality, and expertise. You select your interests and we'll show you a range of experience to choose from. You pick the experience and get to personalize it in consultation with your host.  And boom... you have an ideal experience that fits exactly what you're looking for.
						</ExplainerParagraph>
						{/* <LearnMoreButton>Learn more</LearnMoreButton> */}
					</TextPart>
				</Segment>
			</StyledSectionWrapper>
		</div>
	)
}

export default SectionTwo