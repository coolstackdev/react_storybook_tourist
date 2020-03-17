import React from 'react'
import styled from 'styled-components'
import SectionWrapper from './SectionWrapper'
import { useWindowSize } from 'hooks'
import { 
  Image,
  Heading,
  Button
 } from 'components'

const StyledImage = styled(Image)`
  width: 30%;

  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 15px;
    margin-top: 20px;
  }
`

const TextArea = styled.div`
  font-size: 64px;
  font-family: Gloria Hallelujah;
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  line-height: 127px;
  width: 100%;
  justify-content: center;

  @media screen and (max-width: 500px) {
    font-size: 54px;
    flex-wrap: wrap;
    line-height: 88px;
  }
`

const StyledText = styled.div`
  &:first-child {
    color: #EB6D7F;
    margin-right: 20px;
  }

  &:nth-child(2n) {
    color: #53C9A6;
    margin-right: 15px;

    @media screen and (max-width: 500px) {
      margin: 0;
    }
  }

  &:last-child {
    color: #F4A839;
  }
`

const StyledHeading = styled(Heading)`
  color: #010101;
  font-size: 26px;
  line-height: 36px;
`

const StyledButton = styled(Button)`
  border-radius: 24px;
  padding: 6px 58px;
  font-size: 22px;
  background-color: #FFA840;
  font-weight: 800;
  margin-top: 17px;
  height: auto;

  &:hover, &:active {
    background: #FAE3C7;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SectionFirst = () => {
  let { width } = useWindowSize()
  let mobile = width < 800

  const handleClick = () => {
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight - 1420,
      behavior: 'smooth'
    });
  }

  return (
    <SectionWrapper>
      <Content>
        {!mobile &&
          <StyledImage imgSrc={require('../../../atoms/Icon/icons/people.svg')}/>
        }
        <TextArea>
          <StyledText>Locals</StyledText>
          <StyledText>Helping</StyledText>
          <StyledText>Travelers</StyledText>
        </TextArea>
        <StyledHeading>A Community of Helpers</StyledHeading>
        <StyledButton onClick={handleClick}>Learn more</StyledButton>
        {mobile &&
          <StyledImage imgSrc={require('../../../atoms/Icon/icons/people.svg')}/>
        }
      </Content>
    </SectionWrapper>
  )
}

export default SectionFirst