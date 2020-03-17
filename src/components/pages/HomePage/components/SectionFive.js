import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-tools'
import {
	Heading,
	Flex,
	Button,
	Paragraph,
	Link,
	Icon
} from 'components'
import SectionWrapper from './SectionWrapper'

const StyledSectionWrapper = styled(SectionWrapper)`
	align-items: center;
	height: 78vh;

	@media screen and (min-width: 700px) {
		align-items: flex-start;
	}
`

const ExplainerContainer = styled(Flex)`
	flex-direction: column;
	align-items: center;
`

const ExplainerHeading = styled(Heading)`
  margin-top: 0;
	margin-bottom: 0;
  max-width: 28em;
  font-size: 1.5rem;
  width: 10em;
	font-weight: bold;
	text-align: center;

  @media screen and (min-width: 700px) {
		font-size: 2rem;
		text-align: left;
  }
`

const ExplainerParagraph = styled(Paragraph)`
  margin-top: 0;
  max-width: 28em;
	margin-top: 1.2rem;

	@media screen and (min-width: 700px) {
		width: 20em;
		text-align: left;
	}
`

const TrifectaList = styled(Flex)`
	width: 100%;
	flex-direction: column;
	justify-content: space-between;
	margin-top: 3rem;

	@media screen and (min-width: 500px) {
		flex-direction: row;
	}
`

const Trifecta = styled(Flex)`
	flex-direction: column;
	align-items: center;
	margin-bottom: 1em;

	h1, h2, h3 {
		font-weight: bold;
		margin-bottom: 0;
	}

	p {
		max-width: 13em;
	}

	&:not(:last-child) {
		margin-right: 1em;
	}

	@media screen and (min-width: 700px) {
		align-items: flex-start;
	}
`

const CallToActionWrapper = styled(Flex)`
	justify-content: center;
	width: 100%;
	margin-top: 3rem;

	& button {
		font-size: 1.4rem;
		font-weight: bold;
		margin: 0 auto;
		cursor: pointer;
		text-align: center;
		background-color: ${palette('tertiary', 1)};

		&:hover {
			text-decoration: none;
			transition: all 0.3s ease-in-out;
		}
	}
`

const SectionFive = (props) => {

	return (
		<div className="section">
			<StyledSectionWrapper>
				<ExplainerContainer>
					<ExplainerHeading>Stay safe, always.</ExplainerHeading>
					<ExplainerParagraph>
						We prioritize safety above all else so that you can have a great time without a bother, anywhere in the world.
					</ExplainerParagraph>
				</ExplainerContainer>
				{/* <StyledLink style={{ visibility: 'hidden' }}>See all safety</StyledLink> */}
				<TrifectaList>
					<Trifecta>
						<Icon icon="funnel" />
						<Heading level={3}>Screening</Heading>
						<Paragraph left="true">
							All of our hosts are vetted through a detailed screening and background checks.
						</Paragraph>
					</Trifecta>
					<Trifecta>
						<Icon icon="identification" />
						<Heading level={3}>Identity Verification</Heading>
						<Paragraph left="true">
							We request everyone on our platform to verify their identity before connecting people
						</Paragraph>
					</Trifecta>
					<Trifecta>
						<Icon icon="users" />
						<Heading level={3}>2-way Reviews</Heading>
						<Paragraph left="true">
							You can always read what others have to say for the people that you are going to meet
						</Paragraph>
					</Trifecta>
				</TrifectaList>
				<CallToActionWrapper>
					{/* <Heading as="a">Host with us</Heading> */}
					<Button onClick={props.handleMoveTop}>Experience With Us</Button>
				</CallToActionWrapper>
			</StyledSectionWrapper>
		</div>
	)
}

export default SectionFive