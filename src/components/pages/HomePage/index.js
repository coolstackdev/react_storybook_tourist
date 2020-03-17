import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { palette, ifProp } from 'styled-tools'
import { useWindowSize, useHopServiceApi, useScrollPosition } from 'hooks'
import {
  Header,
  PageTemplate,
  Icon,
} from 'components'
import { SectionOne, SectionTwo, SectionThree, SectionFour, SectionFive, HomeFooter } from './components'
import FullpageTemplate from '../../templates/FullpageTemplate.js'
import { SEO } from 'containers'
const MoreWrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 3;
  bottom: 20px;
  left: 50%;
  cursor: pointer;
  color: ${palette('secondary', 1)};
  display: ${ifProp('hidden', 'none')};
`

const MoreText = styled.span``

const MoreButton = styled(Icon)``

const HomePage = (props) => {
  const [isHidden, setIsHidden] = useState(false)
  const [{ data, isLoading, isError }, doFetch, setBody] = useHopServiceApi()
  let { width } = useWindowSize()
  let mobile = width < 800

  const fullpageOptions = {
    scrollOverflow: true,
    sectionsColor: ["#FEFEFE"],
    navigation: true,
    afterLoad: (origin, destination, direction) => setIsHidden(destination.isLast)
  }

  const pagePosition = useScrollPosition()

  useEffect(() => {
    window.analytics.page('HomePage')
  }, [])

  const handleMoveDown = () => {
    fullpage_api.moveSectionDown()
  }

  const handleMoveTop = () => {
    mobile ? window.scrollTo(0, 0) : fullpage_api.moveTo(1, 0)
  }

  const handleClickSelectInterests = () => {
    // setBody({ count: 1 })
    // doFetch('/GetPopularCities')
    // console.log('data:', data)
    props.history.push({
      pathname: `/global/personalize`,
      state: 'global'
    })
  }

  let ConditionalTemplate = PageTemplate
  if (!mobile) {
    ConditionalTemplate = FullpageTemplate
  }
  return (
    <>
      {!mobile &&
        <MoreWrapper onClick={handleMoveDown} hidden={isHidden}>
          <MoreText>More</MoreText>
          <MoreButton icon="chevron-down" />
        </MoreWrapper>
      }
      <ConditionalTemplate
        header={<Header topPage={pagePosition === 0 && true} />}
        // footer={<HomeFooter/>}
        flex
        {...fullpageOptions}
      >
        <SEO
          title="Home"
          subject="Travel Your Way"
          description="Unique private experiences that are curated just for you. Travel Your Way. Explore the hidden gems in a city with a local host. Find experiences based on your interests, personality, budget, and schedule."
          keywords="local tours, personalised experiences, explore city, things to do, unique experiences, hidden gems, secret hangouts, instahop, hopohop"
        />
        <SectionOne mobile={mobile} {...props} />
        <SectionTwo />
        <SectionThree />
        <SectionFour handleClickSelectInterests={handleClickSelectInterests} />
        <SectionFive handleMoveTop={handleMoveTop} />
        <HomeFooter/>
      </ConditionalTemplate>
    </>
  )
}

export default withRouter(HomePage)
