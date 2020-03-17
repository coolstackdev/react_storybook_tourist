import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { palette, ifProp } from 'styled-tools'
import Dots from 'react-carousel-dots'
import { useScrollPosition }from 'hooks'
import {
  SwipeTemplate,
  Header,
  Footer,
  IconButton,
  Heading,
  GuestCounter,
  Categories,
} from 'components'
import { Languages, SEO } from 'containers'
import SwipeableViews from 'react-swipeable-views'
import './styles.scss'

const Root = styled.div`
  max-width: 400;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-left: 0.4em;
  margin-right: 0.4em;
  /* margin-top: 1em; */
  /* height: 70vh; */

  .react-carousel-dots-holder {
    width: auto;
    justify-content: center;
  }

  .react-carousel-dots-dot {
    border: none !important;
    background-color: ${palette('grayscale', 5)};

	&.active {
		background-color: ${palette('tertiary', 1)};
	}
}

  @media screen and (min-width: 800px) {
    /* margin-top: 2em; */
  }
`

const StyledSwipeableViews = styled(SwipeableViews)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & * > {
    overflow: hidden;
  }
`

const FilterSlideHeading = styled(Heading)`
  color: ${palette('secondary')};
  text-align: center;
  font-size: 1.3rem;
  margin-top: 0.55714em;

  @media screen and (min-width: 800px) {
    font-size: 1.6rem;
    margin-top: 1em;
  }
`

const StyledGuestCounter = styled(GuestCounter)`
	padding-left: 2em;
  padding-right: 2em;
  /* width: 47%; */
  margin: 0 auto;
`

const ButtonWrapper = styled.div`
  margin: ${ifProp('forward', '2rem auto 1.2rem', '0 auto')};
`

const ForwardButton = styled(IconButton)`
  color: ${palette('grayscale', 7)};
  border-radius: 0.6em;
`

const BackButton = styled(Heading)`
  color: ${ifProp('disabled', palette('grayscale', 3))};
  margin-right: auto;
  cursor: pointer;
  user-select: none;
`

const FilterPage = ({ ...props }) => {
  const pagePosition = useScrollPosition()
  const [currentSlide, setCurrentSlide] = useState(0)
  const numSlides = 3
  const { cityname } = props.match.params

  useEffect(() => {
    window.analytics.page('FilterPage')
  }, [])

  return (
    <>
      <SEO
        title="Personalize"
        subject='Select your preferences'
        description='Find experiences bases on your interests, personality, budget, and schedule. Select your criteria here.'
        keywords={`local tours in ${cityname}, ${cityname} personalised experiences, explore ${cityname}, things to do in ${cityname}, unique experiences in ${cityname}, hidden gems in ${cityname}, ${cityname} secret hangouts, what to see in ${cityname}`}
      />
      <SwipeTemplate
        header={<Header topPage={pagePosition === 0 && true} />}
      >
        <Root className="filter-page">
          <StyledSwipeableViews
            index={currentSlide}
            onSwitching={(index, type) => type === 'end' && setCurrentSlide(index)}
          >
            <Categories heading={<FilterSlideHeading level={1}>What are your interests?</FilterSlideHeading>} filterPage />
            <Languages heading={<FilterSlideHeading level={1}>What languages do you speak?</FilterSlideHeading>} />
            <StyledGuestCounter heading={<FilterSlideHeading level={1}>How many people?</FilterSlideHeading>} />
          </StyledSwipeableViews>
          <ButtonWrapper forward={true}>
            {currentSlide === numSlides - 1 ?
              <ForwardButton to={{
                pathname: `/${props.match.params.cityname}`,
                state: props.location.state
              }}
                icon="check"
                height={50}
                circle
                exact="true"
                palette="tertiary"
              >Explore</ForwardButton>
              :
              <ForwardButton
                icon="forwards"
                height={50}
                circle="true"
                right
                onClick={() => setCurrentSlide(currentSlide + 1)} palette="tertiary"
              >Continue</ForwardButton>
            }
          </ButtonWrapper>
          <Dots
            length={numSlides}
            active={currentSlide}
            margin={10}
            size={25}
          />
          <ButtonWrapper>
            <BackButton
              level={3}
              onClick={currentSlide > 0 ? () => setCurrentSlide(currentSlide - 1) : null}
              disabled={currentSlide === 0}
            >
              Back
            </BackButton>
          </ButtonWrapper>
        </Root>
      </SwipeTemplate>
    </>
  )
}

export default withRouter(FilterPage)
