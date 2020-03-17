import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { useScrollPosition } from 'hooks'
import {
  PageTemplate,
  Header,
  Footer,
  Image
} from 'components'
import SectionFirst from './components/SectionFirst'
import SectionSecond from './components/SectionSecond'
import SectionThird from './components/SectionThird'
import SectionFourth from './components/SectionFourth'
import SectionFifth from './components/SectionFifth'
// import { SectionFirst, SectionSecond, SectionThird } from './components'
import { SEO } from 'containers'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

const Content = styled.div`
  font-family: Avenir;
  font-size: 20px;
  font-style: normal;
  font-weight: normal;

`

const StyledImage = styled(Image)`
  position: absolute;

  &:first-child {
    left: 0;
    top: 600px;
  }

  &:nth-child(2) {
    right: 0;
    top: 920px;
  }
`

const JoinCommunityPage = (props) => {
  const pagePosition = useScrollPosition()
  useEffect(() => {
    window.analytics.page('JoinCommunityPage')
  }, [])

  return (
    <>
      <SEO title={'Join Community Page'} />
      <PageTemplate 
        header={<Header topPage={pagePosition === 0 && true} />}
        footer={<Footer />}
      >
        <StyledImage imgSrc={require('../../atoms/Icon/icons/join-community-left-background.svg')} />
        <StyledImage imgSrc={require('../../atoms/Icon/icons/join-community-right-background.svg')} />
        <SectionFirst />
        <SectionSecond />
        <SectionThird />
        <SectionFourth />
        <SectionFifth />
      </PageTemplate>
    </>
  )
}

export default withRouter(JoinCommunityPage)