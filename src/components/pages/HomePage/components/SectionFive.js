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

const StyledBottom = styled(Heading)`
	width: 50%;
	font-family: Avenir;
	font-size: 50px;
	font-weight: 900;
	font-stretch: normal;
	font-style: normal;
	line-height: 2;
	letter-spacing: normal;
`

const StyledIcon = styled(Icon)`
	width: 43px;
	height: 42px;

	@media screen and (min-width: 700px) {
		width: 63px;
		height: 62px;
	}
`

const StyledLink = styled(Link)`
	font-family: Avenir;
	font-size: 16px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.1;
	letter-spacing: normal;
	border-bottom: solid 1.5px #b9b6b6;
	padding-bottom: 2px;
	margin-top: 23px;

	@media screen and (min-width: 800px) {
		margin-top: 78px;
		font-size: 20px;
		margin-top: 38px;
	}
`

const StyledSectionWrapper = styled(SectionWrapper)`
	align-items: center;

	@media screen and (min-width: 700px) {
		align-items: flex-start;
	}

	@media screen and (min-width: 800px) {
		max-width: 1039px;
	}
`

const ExplainerContainer = styled(Flex)`
	flex-direction: column;
	align-items: center;
`

const StyledHeading = styled(Heading)`
	color: black;
	font-size: 18px;
	height: 15%;
	margin-top: 10px;

	@media screen and (min-width: 700px) {
		font-size: 20px;
	}
`

const StyledParagraph = styled(Paragraph)`
	margin-top: 11px;
	font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.88;
	letter-spacing: normal;
	font-size: 16px;
	width: 306px !important;
	text-align: center;

	@media screen and (min-width: 700px) {
		text-align: left;
	}
`

const ExplainerHeading = styled(Heading)`
	padding: 8.5px 0;
  max-width: 38em;
  width: 322px;
	font-weight: bold;
	margin: 0;
	font-family: Avenir;
  font-size: 24px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
	letter-spacing: normal;
	color: black;
	text-align: center;

  @media screen and (min-width: 700px) {
		font-size: 50px;
		text-align: left;
		margin-right: 210px;
  }
`

const ExplainerParagraph = styled(Paragraph)`
  margin-top: 0;
	max-width: 38em;
	width: 100%;
	margin-top: 14px;
	font-family: Avenir;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
	letter-spacing: normal;
	text-align: center;

	@media screen and (min-width: 700px) {
		width: 20em;
		text-align: left;
		font-size: 20px;
		width: 540px;
	}
`

const TrifectaList = styled(Flex)`
	width: 100%;
	flex-direction: column;
	justify-content: space-between;
	margin-top: 51px;

	@media screen and (min-width: 500px) {
		flex-direction: row;
		margin-top: 81px;
	}
`

const Trifecta = styled(Flex)`
	flex-direction: column;
	align-items: center;
	margin-bottom: 1em;
	width: 306px;
	height: 100%;

	h1, h2, h3 {
		font-weight: bold;
		margin-bottom: 0;
	}

	p {
		max-width: 33em;
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
						We prioritize safety above all else so that you can have a great time without a bother, anywhere in the world
					</ExplainerParagraph>
				</ExplainerContainer>
				<StyledLink>See all safety</StyledLink>
				<TrifectaList>
					<Trifecta>
						<StyledIcon icon="funnel" />
						<StyledHeading level={3}>Screening</StyledHeading>
						<StyledParagraph left="true">
							All of our hosts are vetted through a detailed screening and background checks.
						</StyledParagraph>
					</Trifecta>
					<Trifecta>
						<StyledIcon icon="identification" />
						<StyledHeading level={3}>Identity Verification</StyledHeading>
						<StyledParagraph left="true">
							We request everyone on our platform to verify their identity before connecting people
						</StyledParagraph>
					</Trifecta>
					<Trifecta>
						<StyledIcon icon="users" />
						<StyledHeading level={3}>2-way Reviews</StyledHeading>
						<StyledParagraph left="true">
							You can always read what others have to say for the people that you are going to meet
						</StyledParagraph>
					</Trifecta>
				</TrifectaList>
				{/* <CallToActionWrapper>
					<StyledBottom as="a">Host with us</StyledBottom>
					<Button onClick={props.handleMoveTop}>Experience With Us</Button>
					<StyledBottom as="a">Experience with us</StyledBottom>
				</CallToActionWrapper> */}
			</StyledSectionWrapper>
		</div>
	)
}

export default SectionFive