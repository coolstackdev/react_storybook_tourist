import React from 'react'
import styled from 'styled-components'
import SectionWrapper from './SectionWrapper'
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
  padding: 30px 70px 40px 40px;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    padding: 15px;
  }
`

const StyledPolaroid = styled(Polaroid)`
  box-shadow: 0px 0px 24px rgba(188, 188, 188, 0.25);
  border-radius: 4px;
  transform: rotate(-10deg);
  width: 40%;
  height: 40%;
  padding: 20px;
  
  & h1 {
    font-size: 20px;
    color: #124C47;
  }

  @media screen and (max-width: 500px) {
    padding: 0;
    width: 90%;
    margin: 40px auto;
  }
`

const ExplainerParagraph = styled(Paragraph)`
  font-size: 20px;
  color: #464646;
  line-height: 38px;
  width: 52%;
  margin-left: 110px;
  margin-top: 50px;

  & span:first-child {
    color: #53C9A6;
  }

  & span:nth-child(2n) {
    color: #F4A839;
  }

  & span:last-child {
    color: #EB6D7F;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    margin: 0;
  }
`

const SpecialText = styled.span`
  font-family: Gloria Hallelujah;
`

const StyledImage = styled(Image)`

`

const SectionThird = () => {
  return (
    <SectionWrapper>
      <Content>
        <StyledPolaroid imgSrc={require('../../../atoms/Icon/icons/Marocco.png')} text="Marocco October 2019" />
        {/* <StyledImage imgSrc={require('../../../atoms/Icon/icons/Dubai.png')} /> */}
        <ExplainerParagraph>
          As a <SpecialText>traveler</SpecialText> you can ask a question/recommendation to get help from locals.
          You can <SpecialText>Share your experiences</SpecialText> in the city with our community to help other travelers find 
          <SpecialText> the best of city</SpecialText> as well. Pay it forward by helping travelers visiting your home city.
        </ExplainerParagraph>
      </Content>
    </SectionWrapper>
  )
}

export default SectionThird