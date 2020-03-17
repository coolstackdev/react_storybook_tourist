import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useScrollPosition } from 'hooks'
import {
  PageTemplate,
  Header,
  Footer,
} from 'components'
import { SEO, EditHostForm } from 'containers'
import { SnackbarProvider, useSnackbar } from 'notistack'

const HostProfilePage = (props) => {
  const pagePosition = useScrollPosition()
  useEffect(() => {
    window.analytics.page('HostProfilePage')
  }, [])

  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
    >
      <SEO
          title={`Host Profile Page`}
      />
      <PageTemplate
          header={<Header topPage={pagePosition === 0 && true} />}
          footer={<Footer />}
      >
        <EditHostForm {...props} />
      </PageTemplate>
    </SnackbarProvider>
  )
}

export default withRouter(HostProfilePage)