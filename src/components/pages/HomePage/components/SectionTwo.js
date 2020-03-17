import React from 'react'
import styled from 'styled-components'
import { palette, ifProp } from 'styled-tools'
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
  max-width: 80em;
  margin-bottom: 40px;
  /* margin-bottom: 2.6em; */
  @media screen and (min-width: 700px) {
    max-width: 47em;
  }

  @media screen and (min-width: 800px) {
    max-width: 1039px;
  }
`

const ExplainerHeading = styled(Heading)`
  margin-top: 0;
  font-size: 24px !important;
  width: 458px;
  font-weight: 900;
  font-family: Avenir;
  color: black;
  width: 100%;
  text-align: center;
  /* max-width: 19em; */

  @media screen and (min-width: 700px) {
    text-align: left;
    font-size: 50px !important;
    max-width: 458px;
  }

  @media screen and (min-width: 800px) {
    max-width: 458px;
  }
  `

const ExplainerParagraph = styled(Paragraph)`
  margin-top: 0;
  margin-bottom: 1rem;
  width: 100%;
  text-align: center;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal
  line-height: 1.5;
  text-align: center;
  
  @media screen and (min-width: 700px) {
    max-width: 16em;
    text-align: left;
    line-height: 1.88;
  }

  @media screen and (min-width: 800px) {
    max-width: 449px;
    max-width: ${ifProp('second', '449px', '521px')}
    text-align: ${ifProp('second', 'left', 'right')}
  }
`

const StyledPolaroid = styled(Polaroid)`
  /* width: 17em; */
  margin-bottom: 1.8em;

  @media screen and (min-width: 700px) {
    width: 471px;
    height: 581px;
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
    margin-top: 10px;
    margin-bottom: 0;
    text-align: center;

    @media screen and (min-width: 800px) {
      text-align: right;
      margin-top: 0;
    }
  }
  & p {
    /* text-align: right; */
    margin-top: 32px;

    @media screen and (min-width: 800px) {
      margin-top: 55px;
    }
    /* margin-bottom: 2rem; */
  }
`

const LearnMoreButton = styled(Button)`
  background-color: ${palette('secondary', 2)};
  margin-top: 20px;
  width: 191px;
  height: 45px;
  border-radius: 22.5px;

  @media screen (min-width: 800px) {
    margin-top: 50px;
  }
`

const SectionTwo = (props) => {
	let { width } = useWindowSize()
	let mobile = width < 700

	return (
    <div className="section" id="what-we-do">
			<StyledSectionWrapper>
				<Segment>
					<ExplainerHeading>Memorable Experiences around the world</ExplainerHeading>
					<ExplainerParagraph second>
          Find unique experiences around the world that are created for you by locals. Locals use their knowledge and passions to create memorable unique experiences. You get to personalize these experiences based on your desires and needs.
					</ExplainerParagraph>
				</Segment>
				<Segment wrap="true">
					<StyledPolaroid imgSrc="https://cdn.britannica.com/26/162626-050-3534626F/Koala.jpg" text="australia Zoo, 2019" />
					<TextPart column="true">
						<ExplainerHeading>How does it work?</ExplainerHeading>
						<ExplainerParagraph>
              Local hosts create experiences based on their insights, personality, and expertise. You select your interests and we'll show you a range of experience to choose from. You pick the experience and get to personalize it in consultation with your host. And boom... you have an ideal experience that fits exactly what you're looking for.
						</ExplainerParagraph>
						<LearnMoreButton>Learn more</LearnMoreButton>
					</TextPart>
				</Segment>
			</StyledSectionWrapper>
		</div>
	)
}

export default SectionTwo