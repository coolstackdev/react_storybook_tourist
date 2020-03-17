import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useScrollPosition } from 'hooks'
import {
  PageTemplate,
  Header,
  Footer,
} from 'components'
import { EditExperienceForm, SEO } from 'containers'

const EditExperiencePage = (props) => {
  const pagePosition = useScrollPosition()
  useEffect(() => {
    window.analytics.page('EditExperiencePage')
  }, [])
  console.log(props)

  return (
    <>
      <SEO
        title={`Edit Experience`}
        // subject={`Explore experiences in ${cityname}`}
        // description={`Unique private experiences that are curated just for you in ${cityname}. Travel Your Way. Explore the hidden gems in ${cityname} with a local host. Find experiences bases on your interests, personality, budget, and schedule.`}
        // keywords={`local tours in ${cityname}, ${cityname} personalised experiences, explore ${cityname}, things to do in ${cityname}, unique experiences in ${cityname}, hidden gems in ${cityname}, ${cityname} secret hangouts, what to see in ${cityname}`}
      />
      <PageTemplate
        header={<Header topPage={pagePosition === 0 && true} />}
        footer={<Footer />}
      >
        <EditExperienceForm {...props} />
      </PageTemplate>
    </>
  )
}

export default withRouter(EditExperiencePage)
