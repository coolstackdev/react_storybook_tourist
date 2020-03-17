// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { palette, ifProp } from 'styled-tools'
import { withRouter } from 'react-router-dom'
import CountUp from 'react-countup'
import { useScrollPosition }from 'hooks'
import {
  PageTemplate,
  Header,
  Flex,
  IconButton,
  Heading,
  FilterBlock,
} from 'components'
import { ExperienceList, SEO } from 'containers'

const Container = styled.div`
  position: relative;
`

const FilterButton = styled(IconButton)`
  margin-left: auto;
  color: ${palette('secondary', 0)};
  background-color: ${palette('grayscale', 8)};
	border: 1px solid ${palette('grayscale', 5)};

	& span {
		&:first-child {
			background-color: transparent;
      transform: ${ifProp('filterOpen', 'rotate(180deg)')};
      transition: .4s cubic-bezier(0.165, 0.84, 0.44, 1);
		}
    &:nth-child(2) {
      color: ${palette('secondary', 0)};
      height: 2em;
    }
	}
`

const StyledHeading = styled(Heading)`
	display: inline;
	font-size: 1.1em;
	color: ${palette('secondary', 0)};
	margin-left: .8em;

	@media screen and (min-width: 800px) {
		font-size: 1.35em;
		margin-left: 0;
	}

	& .countUp {
		font-weight: bold;
	}
`

const SearchPage = (props) => {

  const [filterOpen, setFilterOpen] = useState(false)
  const [numExperiences, setNumExperiences] = useState(null)
  const pagePosition = useScrollPosition()
  const { cityname } = props.match.params

  useEffect(() => {
    window.analytics.page('SearchPage')
  }, [])

  const handleClickFilterButton = () => {
    setFilterOpen(!filterOpen)
  }

  return (
    <>
      <SEO
        title={`${cityname} Experiences`}
        subject={`Explore experiences in ${cityname}`}
        description={`Unique private experiences that are curated just for you in ${cityname}. Travel Your Way. Explore the hidden gems in ${cityname} with a local host. Find experiences bases on your interests, personality, budget, and schedule.`}
        keywords={`local tours in ${cityname}, ${cityname} personalised experiences, explore ${cityname}, things to do in ${cityname}, unique experiences in ${cityname}, hidden gems in ${cityname}, ${cityname} secret hangouts, what to see in ${cityname}`}
      />
      <PageTemplate
        header={<Header topPage={pagePosition === 0 && true} />}
      >
        <Container>
          <Flex>
            {filterOpen && <FilterBlock setFilterOpen={setFilterOpen} />}
            <StyledHeading level={2}>
              {' '}
              <CountUp className="countUp" delay={1} end={numExperiences} />
              {' '}
              experiences to explore
						</StyledHeading>

            <FilterButton onClick={handleClickFilterButton} filterOpen={filterOpen} icon="filter" className="ignore-react-onclickoutside">{filterOpen ? 'Close' : 'Filters'}</FilterButton>
          </Flex>
          <ExperienceList setNumExperiences={setNumExperiences} {...props} />
        </Container>
      </PageTemplate>
    </>
  )
}

export default withRouter(SearchPage)
