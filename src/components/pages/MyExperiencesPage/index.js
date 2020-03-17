import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { palette, ifProp } from 'styled-tools'
import { withRouter } from 'react-router-dom'
import { useScrollPosition }from 'hooks'
import {
  PageTemplate,
  Header,
} from 'components'
import { MyExperienceList, SEO } from 'containers'

const MyExperiencesPage = (props) => {

  const pagePosition = useScrollPosition()

  useEffect(() => {
    window.analytics.page('MyExperiencesPage')
  }, [])

  return (
    <>
      <SEO
        title={`My Experiences`}
        subject={`Explore experiences you have created`}
        description={`This is your list of experiences created by you`}
      />
      <PageTemplate
        header={<Header topPage={pagePosition === 0 && true} />}
      >
        <MyExperienceList {...props} />
      </PageTemplate>
    </>
  )
}

export default withRouter(MyExperiencesPage)
