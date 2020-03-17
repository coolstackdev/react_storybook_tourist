import React from 'react'
import styled from 'styled-components'
import SectionWrapper from './SectionWrapper'
import { useWindowSize } from 'hooks'
import {
  Heading,
  Paragraph,
  Image
} from 'components'

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  padding-left: 20px;
  margin-bottom: 260px;

  @media screen and (max-width: 500px) {
    padding: 15px;
    margin: 0;
    overflow-wrap: break-word;
  }
`

const TextArea = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  margin-top: 100px;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`

const ExplainerHeading = styled(Heading)`
  color: #010101;
  font-size: 47px;
  line-height: 66px;
  font-weight: 800;
`

const ExplainerParagraph = styled(Paragraph)`
  font-size: 20px;
  line-height: 36px;
 
  &:nth-child(2) {
    & span {
      color: #F4A839;
    }
  }

  &:nth-child(3) {
    & span {
      color: #53C9A6;
    }
  }

  &:last-child {
    & span:first-child {
      color: #EB6D7F;
    }

    & span:last-child {
      color: #53C9A6;
    }
  }
`

const SpecialText = styled.span`
  font-family: Gloria Hallelujah;
`

const StyledParagraph = styled.label`
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

const StyledImage = styled(Image)`
  position: absolute;
  width: 53%;
  max-width: 700px;
  right: 0;

  @media screen and (max-width: 500px) {
    position: relative;
    margin: 15px auto;
    width: 100%;
  }
`

const SectionFourth = () => {
  let { width } = useWindowSize()
  let mobile = width < 800

  return (
    <SectionWrapper>
      <Content>
        <TextArea>
          <ExplainerHeading>How to join us?</ExplainerHeading>
          <ExplainerParagraph>
            We are building a Unique Mobile Application to Connect Travelers with Locals <SpecialText>Instantly</SpecialText>
          </ExplainerParagraph>
          {mobile &&
            <StyledImage imgSrc={require('../../../atoms/Icon/icons/people2_mobile.svg')} />
          }
          <ExplainerParagraph>
            Meanwhile, simply <SpecialText>Sign up</SpecialText> at the bottom this page and we will notify you when the app is ready
          </ExplainerParagraph>
          <ExplainerParagraph>
            You can also join our <SpecialText>Facebook page: </SpecialText>
            <StyledParagraph onClick={() => {window.open("https://www.facebook.com/localShelptravelers")}}>
              https://www.facebook.com
              {mobile &&
                <br></br>
              }
              <SpecialText>/localShelptravelers</SpecialText>
            </StyledParagraph>
          </ExplainerParagraph>
        </TextArea>
        {!mobile &&
          <StyledImage imgSrc={require('../../../atoms/Icon/icons/people2.svg')} />
        }
      </Content>
    </SectionWrapper>
  )
}

export default SectionFourth