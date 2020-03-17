import React from 'react'
import styled from 'styled-components'
import { palette, font } from 'styled-theme'

import { Heading, List, Link, Icon, Flex } from 'components'
import SectionWrapper from './SectionWrapper'
import { ifProp } from 'styled-tools'

const StyledSectionWrapper = styled(SectionWrapper)`
  display: flex;
	@media screen and (min-width: 700px) {
		align-items: flex-start;
	}

	@media screen and (min-width: 800px) {
		max-width: 1039px;
	}
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #4BC39E;
  width: 100%;
  height: 300px;
  margin-top: 0;

  @media screen and (min-width: 700px) {
    margin-top: 120px;
    height: 469px;
  }
`

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 2em auto;

  @media screen and (min-width: 800px) {
		max-width: 1039px;
	}
`

const StyledBottom = styled(Heading)`
	width: 100%;
	font-family: Avenir;
	font-size: 24px;
	font-weight: 900;
	font-stretch: normal;
	font-style: normal;
	line-height: 2;
  letter-spacing: normal;
  text-align: center;

  @media screen and (max-width: 500px) {
    margin: 0;
  }
  
  @media screen and (min-width: 700px) {
    font-size: 50px;
    width: 50%;
    text-align: left;
  }
`

const CallToActionWrapper = styled(Flex)`
	justify-content: center;
	width: 100%;
  margin-top: 1rem;
  flex-direction: column;

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
  
  @media screen and (min-width: 700px) {
    margin-top: 9rem;
    flex-direction: row;
  }
`

const Block = styled(Flex)`
	flex-direction: row;
  align-items: flex-start;
  margin: 0 auto;
  border-bottom: 1px solid white;
  height: 237px;
  width: 100%;
  padding: 0;

  @media screen and (min-width: 800px) {
    max-width: 900px;
    margin: 2em auto;
    height: 286px;
	}
`

const CompanyList = styled.div`
  list-style-type: none;
  height: 100%;
  width: 50%;

  & li:first-child{
    margin-bottom: 13px;
  }
`

const HelpList = styled.div`
  list-style-type: none;

  & li:first-child{
    margin-bottom: 13px;
  }
`

const LinkList = styled.div`
  width: 100%;
  display: flex;
  margin-left: 30px;
  margin-top: 40px;

  & li{
    margin-bottom: 8px;
  }

  @media screen and (min-width: 700px) {
    margin-left: 440px;
    margin-top: 65px;
  }

`

const StyledLink = styled(Link)`
  color: white !important;
  font-family: Avenir;
  font-size: 12px;
  font-weight: ${ifProp('top', '900', '500')};
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;

  &:hover {
    color: #0056b3 !important;
  }

  @media screen and (min-width: 700px) {
    font-size: 16px;
    color: white;
  }
`

const BottomWrapper = styled(Flex)`
  flex-direction: row;
  align-items: flex-start;
  margin: 0 auto;
  width: 100%;
  padding: 0;
  max-width: 900px;
`

const StyledSpan = styled.span`
  font-family: Avenir;
  font-size: 12px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  width: 110px;
  margin-right: 20px;
  margin-left: 20px;

  @media screen and (min-width: 700px) {
    margin-left: 0;
    margin-right: 143px;
    width: 208px;
  }
`

const StyledDiv = styled.div`
  text-align: left;
  display: flex;
  margin-top: 18px;

  & a{
    font-size: 12.8px;
    margin-right: 20px;
    margin-top: 7px;
  }

  & a:last-child{
    margin-right:0;
  }

  @media screen and (min-width: 700px) {
    & a{
      font-size: 14px;
      margin-right: 76px;
      margin-top: 0;
    }
  }
`

const HomeFooter = (props) => {
  return (
    <div className="section">
      <StyledSectionWrapper>
        <CallToActionWrapper>
            <StyledBottom as="a">Host with us</StyledBottom>
            {/* <Button onClick={props.handleMoveTop}>Experience With Us</Button> */}
            <StyledBottom as="a">Experience with us</StyledBottom>
        </CallToActionWrapper>
      </StyledSectionWrapper>
      <footer>
        <Wrapper {...props}>
          <Block>
            <LinkList>
              <CompanyList>
                <li><StyledLink top to="/terms-of-service">Company</StyledLink></li>
                <li><StyledLink to="/privacy-policy">Press & media</StyledLink></li>
                <li><StyledLink to="/terms-of-service">Investor Relations</StyledLink></li>
                <li><StyledLink to="/privacy-policy">Safety</StyledLink></li>
                <li><StyledLink to="/terms-of-service">Careers</StyledLink></li>
              </CompanyList>
              <HelpList>
                <li><StyledLink top to="/terms-of-service">Help & Support</StyledLink></li>
                <li><StyledLink to="/privacy-policy">Guests</StyledLink></li>
                <li><StyledLink to="/terms-of-service">Hosts</StyledLink></li>
                <li><StyledLink to="/privacy-policy">Frequently Asked Questions</StyledLink></li>
                <li><StyledLink onClick={() => {window.open("https://hopohop027387.typeform.com/to/Rm3bu4")}}>Contact Us</StyledLink></li>
              </HelpList>
            </LinkList>
          </Block>
          <BottomWrapper>
            <StyledDiv>
              <StyledSpan>Ⓒ hopOhop 2019. All Rights Reserved.</StyledSpan>
              <StyledLink top to="/terms-of-service">Privacy</StyledLink>
              <StyledLink top to="/terms-of-service">Accessibility</StyledLink>
              <StyledLink top to="/terms-of-service">Terms</StyledLink>
            </StyledDiv>
          </BottomWrapper>
        </Wrapper>
      </footer>
    </div>
  )
}

export default HomeFooter
