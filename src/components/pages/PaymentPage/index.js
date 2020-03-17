import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { Elements } from 'react-stripe-elements'
import { useScrollPosition }from 'hooks'
import {
  PageTemplate,
  SummaryCard,
  Header,
  Footer,
  HorizontalRule,
} from 'components'
import { StripeForm, SEO } from 'containers'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 1em;
  margin-right: 1em;

  @media screen and (min-width: 940px) {
    flex-direction: row;
    align-items: flex-start;
  }
`

const StyledHorizontalRule = styled(HorizontalRule)`
  width: 85%;

  @media screen and (min-width: 940px) {
    display: none;
  }
`

const PaymentPage = ({...props}) => {
  const pagePosition = useScrollPosition()

  useEffect(() => {
    window.analytics.page('PaymentPage')
  }, [])

  return (
    <PageTemplate
      header={<Header topPage={pagePosition === 0 && true} />}
      footer={<Footer />}
    >
      <SEO
        robots="noindex,nofollow"
      />
      <Wrapper>
        <SummaryCard {...props} />
        <StyledHorizontalRule />
        <Elements>
          <StripeForm />
        </Elements>
      </Wrapper>
    </PageTemplate>
  )
}

export default withRouter(PaymentPage)
