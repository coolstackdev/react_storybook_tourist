import React from 'react'
import styled from 'styled-components'
import SectionWrapper from './SectionWrapper'
import {
  Heading,
  Paragraph,
  Image
} from 'components'
import { JoinField } from 'containers'

const Content = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100vw;
  margin-left: calc(50% - 50.5vw);
  background-color: #E8F6F5;
  opaicy: 0.2;
  flex-direction: column;

  @media screen and (min-width: 1200px) {
    padding-left: 6em;
    padding-right: 6em;
  }

  @media screen and (max-width: 500px) {
    padding: 15px;
  }
`

const StyledHeading = styled(Heading)`
  font-weight: 800;
  font-size: 48px;
  line-height: 66px;
`

const Wrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 100px;
  flex-direction: row;
  display: flex;
  width: 100%;

  @media screen and (max-width: 500px) {
    flex-direction: column-reverse;
  }
`

const StyledImage = styled(Image)`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;

  & img {
    width: 500px;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 0;
    margin-top: 50px;

    & img {
      width: 100%;
    }
  }
`

const SectionFifth = () => {
  return (
    <SectionWrapper>
      <Content>
        <StyledHeading>
          Join our community today!
        </StyledHeading>
        <Wrapper>
          <StyledImage imgSrc={require('../../../atoms/Icon/icons/people3.svg')} />
          <JoinField />
        </Wrapper>
      </Content>
    </SectionWrapper>
  )
}

export default SectionFifth