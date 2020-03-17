import React, { useEffect } from 'react'
import styled from 'styled-components'

import {
  PageTemplate,
  Header,
  Footer,
  Heading,
  Paragraph,
  HorizontalRule,
  Button
} from 'components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media screen and (min-width: 765px) {
    flex-direction: row;
  }
`

const TextPortion = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 765px) {
    width: 50%;
  }
`

const Content = styled.div`
  max-width: 30rem;
  margin: 2rem;
`

const ImagePortion = styled.div`
  position: relative;
  padding-bottom: 100%;
  width: 100%;

  @media screen and (min-width: 765px) {
    display: flex;
    width: 50%;
    min-height: 100vh;
    padding-bottom: 0;
  }
`

const Image = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url('https://www.hopohop.com/svg/404.svg');
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-width: 765px) {
    background-position: left;
  }
  @media screen and (min-width: 992px) {
    background-position: center;
  }
`



const NotFoundPage = () => {

  useEffect(() => {
    window.analytics.page('NotFoundPage')
  }, [])

  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Wrapper>
        <TextPortion>
          <Content>
            <Heading>404</Heading>
            <HorizontalRule />
            <Paragraph>Sorry, the page you are looking for could not be found.</Paragraph>
            <Button to="/">GO HOME</Button>
          </Content>
        </TextPortion>

        <ImagePortion>
          <Image />
        </ImagePortion>

      </Wrapper>
    </PageTemplate>
  )
}

export default NotFoundPage
