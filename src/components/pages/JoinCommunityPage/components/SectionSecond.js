import React from 'react'
import styled from 'styled-components'
import SectionWrapper from './SectionWrapper'
import { useWindowSize } from 'hooks'
import {
  Heading,
  Paragraph,
  Polaroid,
  Image
} from 'components'

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  padding: 180px 70px 0px 120px;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    padding: 15px;
  }
`

const TextArea = styled.div`
  display: flex;
  width: 52%;
  flex-direction: column;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`

const ExplainerHeading = styled(Heading)`
  color: #010101;
  font-size: 48px;
  line-height: 66px;
  font-weight: 800;
`

const ExplainerParagraph = styled(Paragraph)`
  font-size: 20px;
  line-height: 38px;

  & span:first-child {
    color: #53C9A6;
  }

  & span:last-child {
    color: #F4A839;
  }

  &:last-child {
    & span:first-child {
      color: #F4A839;
    }
  
    & span:last-child {
      color: #EB6D7F;
    } 
  }
`

const SpecialText = styled.span`
  font-family: Gloria Hallelujah;
`

const StyledPolaroid = styled(Polaroid)`
  transform: matrix(0.98, 0.17, -0.18, 0.99, 0, 0);
  box-shadow: 0px 0px 24px rgba(188, 188, 188, 0.25);
  width: 40%;
	height: 40%;
	padding: 20px;
  margin-left: 110px;
  margin-top: 100px;
  
  & h1 {
    font-size: 20px;
    color: #124C47;
  }

  @media screen and (max-width: 500px) {
    width: 90%;
    margin: 0;
    margin: 31px auto;
  }
`

const StyledImage = styled(Image)`
  margin-left: 85px;
  margin-top: 50px;
`

const Description = styled

const SectionSecond = () => {
  let { width } = useWindowSize()
  let mobile = width < 800

  return (
    <SectionWrapper>
      <Content>
        <TextArea>
          <ExplainerHeading>Who are we?</ExplainerHeading>
          {mobile &&
            <StyledPolaroid imgSrc={require('../../../atoms/Icon/icons/Vancouver.png')} text="Vancouver September 2019" />
          }
          <ExplainerParagraph>
            This community is a friendly group to exchange information between <SpecialText>travelers</SpecialText> and <SpecialText>locals</SpecialText>.
          </ExplainerParagraph>
          <ExplainerParagraph>
            As a <SpecialText>local</SpecialText> you can <SpecialText>help travelers</SpecialText> visiting your city by answering their questions about local authentics,
            food, places to see, or any other problems they face.
          </ExplainerParagraph>
        </TextArea>
        {!mobile &&
          <StyledPolaroid imgSrc={require('../../../atoms/Icon/icons/Vancouver.png')} text="Vancouver September 2019" />
        }
        {/* <StyledImage imgSrc={require('../../../atoms/Icon/icons/Vancouver.png')} /> */}
      </Content>
    </SectionWrapper>
  )
}

export default SectionSecond