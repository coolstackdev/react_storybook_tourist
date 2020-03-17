import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { palette } from 'styled-tools'
import T from 'prop-types'
import { useScrollPosition, useWindowSize }from 'hooks'
import {
  PageTemplate,
  Header,
  Footer,
  Heading,
  Link,
  Paragraph,
  List,
  Button,
  Icon,
  Card,
} from 'components'
import { UserButton, SEO }from 'containers'

const StyledCard = styled(Card)`
  margin-top: 2em;
  margin-left: 1em;
  margin-right: 1em;
  max-width: 500px;

  @media screen and (min-width: 531px) {
    margin: 2em auto;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 660px;
  width: 100%;
  margin: 0 auto;
  padding: 1.5em;
`

const StyledIcon = styled(Icon)`
  border-radius: 50%;
  background-color: ${palette('secondary', 2)};
  color: ${palette('grayscale', 7)};
  font-size: 2.1em;
  height: 1.7em;
  width: 1.7em;
  padding: .3em;
`

const MainHeading = styled(Heading)`
  font-weight: bold;
  text-align: center;
  color: ${palette('secondary', 1)};
`

const SubHeading = styled(Heading)`
  text-align: center;
`

const StyledButton = styled(Button)`
  margin-top: 2em;
  white-space: normal;
  font-size: 1.2rem;
  height: 3.2em;
  max-width: 15em;
`

const PaymentSuccessfulPage = ({
  user,
  ...props
}) => {
  const { width } = useWindowSize()
  const pagePosition = useScrollPosition()

  const experienceId = props.match.params.experienceid
  const cityId = props.match.params.cityid
  const bookingReference = props.history.location.state.response.bookingid

  useEffect(() => {
    dataLayer.push({
      event: 'Payment Successful',
      experienceId,
      bookingReference
    })
    window.analytics.page('PaymentSuccessfulPage')
    window.analytics.track('Payment Successful', {
      experienceId,
      bookingReference
    })
  }, [])

  return (
    <PageTemplate
      header={<Header topPage={pagePosition === 0 && true} />}
      footer={<Footer />}
    >
      <SEO
        robots="noindex,nofollow"
      />
      <StyledCard flat={width > 800}>
        <Wrapper>
          <StyledIcon icon="check" />
          <MainHeading level={1}>Payment Successful</MainHeading>
          <Paragraph style={{ fontSize: '1.2rem' }}>We have created an account for you. <br /> Your password has been <b>emailed to you!</b></Paragraph>
          <SubHeading>We are all set to personalize your experience...</SubHeading>
          {!user &&
            <>
              <Paragraph>Now by signing up, you would be able to:</Paragraph>
              <List>
                <li>Something</li>
                <li>Something</li>
                <li>Something</li>
                <li>Something</li>
              </List>
            </>
          }
          {!user ?
            <UserButton>Sign up</UserButton>
            :
            <StyledButton to='/' palette="tertiary">Explore more unique experiences</StyledButton>
          }
        </Wrapper>
      </StyledCard>
    </PageTemplate>
    )
  }

  PaymentSuccessfulPage.defaultProps = {
    user: true
  }

  export default withRouter(PaymentSuccessfulPage)
