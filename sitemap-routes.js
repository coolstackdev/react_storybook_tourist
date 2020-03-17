import React from 'react'
import { Switch, Route } from 'react-router-dom'

export default (
	<Switch>
		<Route exact path="/" />
		<Route exact path="/terms-of-service" />
		<Route exact path="/privacy-policy" />
		<Route exact path="/:cityname/personalize" />
		<Route exact path="/:cityname" />
		<Route exact path="/:cityname/experiences/:experiencename" />
		<Route exact path="/:cityname/experiences/:experiencename/summary" />
		<Route exact path="/:cityname/experiences/:experiencename/payment" />
		<Route exact path="/:cityname/experiences/:experiencename/payment-successful" />
	</Switch>
)