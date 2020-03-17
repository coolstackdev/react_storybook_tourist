// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import ScrollToTop from 'react-router-scroll-top'
import {
  PageTemplate,
  Header,
  Footer,
  Breadcrumbs,
} from 'components'
import {
  ExperienceDetail,
  ExperiencePreviewList,
  SEO
} from 'containers'
import { useScrollPosition }from 'hooks'

const ExperiencePage = ({
  breadcrumbs,
  ...props
}) => {
  const pagePosition = useScrollPosition()
  const { cityname, experiencename } = props.match.params

  useEffect(() => {
    window.analytics.page('ExperiencePage')
  }, [])

  return (
    <>

      <PageTemplate
        header={<Header topPage={pagePosition === 0 && true} />}
        footer={<Footer />}
      >
        <SEO
          title={experiencename.replace(/-/g, ' ')}
          subject={experiencename.replace(/-/g, ' ')}
          keywords={`local tours in ${cityname}, ${cityname} personalised experiences, explore ${cityname}, things to do in ${cityname}, unique experiences in ${cityname}, hidden gems in ${cityname}, ${cityname} secret hangouts, what to see in ${cityname}`}
        />
        <ScrollToTop />
        <Breadcrumbs />
        <ExperienceDetail {...props} />
        <ExperiencePreviewList {...props} />
      </PageTemplate>
    </>
  )
}

ExperiencePage.defaultProps = {
}

export default withRouter(ExperiencePage)
