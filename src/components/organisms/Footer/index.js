import React from 'react'
import styled from 'styled-components'
import { palette, font } from 'styled-theme'
import { ifProp } from 'styled-tools'

import { Heading, List, Link, Icon, Flex } from 'components'

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-evenly;
//   background-color: ${palette('secondary', 2)};
//   padding: 2rem 0;
//   height: 100%;
//   min-height: 100%;
//   font-family: ${font('primary')};

//   > :not(:last-child) {
//     border-right: 1px solid ${palette('grayscale', 7)};
//   }
// `

// const SectionWrapper = styled.div`
//   flex-grow: 1;
// `

// const FooterSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 100%;
// `

// const BrandWrapper = styled(FooterSection)``

// const ImageWrapper = styled.div`
//   width: 9em;
//   height: 100%;
//   position: relative;
// `

// const Image = styled.img`
//   width: 100%;
//   object-fit: contain;
// `

// const Slogan = styled(Heading)`
//   font-family: ${font('cursive')};
//   color: ${palette('grayscale', 7)};
//   font-size: 1em;
// `

// const LinkWrapper = styled(FooterSection)`
//   font-size: 0.8em;

//   & > * {
//     color: ${palette('grayscale', 7)}
//   }
// `

// const StyledList = styled(List)`
//   padding: 0;

//   > * {
//     list-style: none;
//     text-align: center;

//     > * {
//       color: ${palette('grayscale', 7)};
//     }
//   }
// `

// const SocialWrapper = styled(FooterSection)`

//   > * {
//     color: ${palette('grayscale', 7)};
//     cursor: pointer;
//   }

//   @media screen and (min-width: 600px) {
//     flex-direction: row;
//   }
// `

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #4BC39E;
  width: 100%;
  height: 300px;
  margin-top: 0;

  @media screen and (min-width: 700px) {
    // margin-top: 120px;
    height: 469px;
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
  margin-right: 10px;
  margin-left: 20px;

  @media screen and (min-width: 321px) {
    margin-right: 40px;
  }

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
    margin-right: 10px;
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
  }
`

const Footer = (props) => {
  return (
    // <Wrapper {...props}>

    //   <SectionWrapper>
    //     <BrandWrapper>
    //         <ImageWrapper>
    //           <Image src={require('../../atoms/Icon/icons/instahop-logo-footer.png')} />
    //         </ImageWrapper>
    //         <Slogan>travel YOUR way!</Slogan>
    //     </BrandWrapper>
    //   </SectionWrapper>

    //   <SectionWrapper>
    //     <LinkWrapper>
    //       <StyledList>
    //         <li><Link to="/terms-of-service">Terms of Service</Link></li>
    //         <li><Link to="/privacy-policy">Privacy Policy</Link></li>
    //       </StyledList>
    //       <div>
    //         &copy; Hopohop Experiences
    //       </div>
    //     </LinkWrapper>
    //   </SectionWrapper>

    //   <SectionWrapper>
    //     <SocialWrapper>
    //       <Icon as="a" icon="fb-logo" href="https://www.facebook.com/HopoHop-116890805876606/" target="_blank" />
    //       <Icon as="a" icon="ig-logo" href="https://www.instagram.com/adventurehoppin/" target="_blank" />
    //       <Icon as="a" icon="li-logo" href="https://www.linkedin.com/company/hopohop/" target="_blank"/>
    //     </SocialWrapper>
    //   </SectionWrapper>

    // </Wrapper>
    <Wrapper {...props}>
      <Block>
        <LinkList>
          <CompanyList>
            <li><StyledLink top to="/terms-of-service">Company</StyledLink></li>
            <li><StyledLink to="/privacy-policy">Press & media</StyledLink></li>
            <li><StyledLink to="/terms-of-service">Investor Relations</StyledLink></li>
            <li><StyledLink onClick={() => {window.open("https://phoenixcdn.azureedge.net/general/Safety.pdf")}}>Safety</StyledLink></li>
            <li><StyledLink to="/terms-of-service">Careers</StyledLink></li>
          </CompanyList>
          <HelpList>
            <li><StyledLink top to="/terms-of-service">Help & Support</StyledLink></li>
            <li><StyledLink onClick={() => {window.open("https://phoenixcdn.azureedge.net/general/Guests.pdf")}}>Guests</StyledLink></li>
            <li><StyledLink onClick={() => {window.open("https://phoenixcdn.azureedge.net/general/Hosts.pdf")}}>Hosts</StyledLink></li>
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
  )
}

export default Footer
