import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { StripeProvider } from 'react-stripe-elements'
import { Waiter } from 'react-wait'
import { useCookies } from "react-cookie"
import moment from 'moment'
import { getParameterByName, formattedDateWithoutTime } from 'utils/helpers'
import LogRocket from 'logrocket'
import './themes/global-styles.scss'

import {
  HomePage,
  NotFoundPage,
  FilterPage,
  TermsOfServicePage,
  PrivacyPolicyPage,
  SearchPage,
  ExperiencePage,
  EditExperiencePage,
  MyExperiencesPage,
  PaymentSuccessfulPage,
} from 'components'
import { PaymentPage } from 'containers'

LogRocket.init(process.env.LOGROCKET_APP_ID)

import theme from './themes/default'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['utm-params'])

  const urlParamsExist = getParameterByName('utm_campaign') === "" ? false : true

  const setUtmCookies = () => {
    if (!cookies.utm_campaign && urlParamsExist) {
      setCookie('utm_source', getParameterByName('utm_source'))
      setCookie('utm_medium', getParameterByName('utm_medium'))
      setCookie('utm_campaign', getParameterByName('utm_campaign'))
      setCookie('utm_date', moment(new Date()))
    }
  }

  useEffect(() => {
    setUtmCookies()
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <Waiter>
        <StripeProvider apiKey={process.env.PUBLISHABLE_STRIPE_KEY}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/terms-of-service" component={TermsOfServicePage} />
            <Route exact path="/privacy-policy" component={PrivacyPolicyPage} />
            <Route exact path="/my-experiences" component={MyExperiencesPage} />
            <Route exact path="/my-experiences/create" component={EditExperiencePage} />
            <Route exact path="/my-experiences/:experiencename/edit" component={EditExperiencePage} />
            <Route exact path="/:cityname/personalize" component={FilterPage} />
            <Route exact path="/:cityname/experiences" component={SearchPage}>
              <Redirect to="/:cityname" />
            </Route>
            <Route exact path="/:cityname" component={SearchPage} />
            <Route exact path="/:cityname/experiences/:experiencename" component={ExperiencePage} />
            <Route exact path="/:cityname/experiences/:experiencename/payment" component={(routeProps) => <PaymentPage {...routeProps} />} />
            <Route exact path="/:cityname/experiences/:experiencename/payment-successful" component={PaymentSuccessfulPage} />
            <Route component={NotFoundPage} />
            <GlobalStyle />
          </Switch>
        </StripeProvider>
      </Waiter>
    </ThemeProvider>
  )
}

export default App
