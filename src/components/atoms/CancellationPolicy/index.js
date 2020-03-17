import React from 'react'
import T from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'
import { Paragraph, Heading, List } from 'components'

const CancellationPolicy = () => {
  return (
    <>
      <Heading level={2} bold="true">Cancellation Policy</Heading>
      <Paragraph style={{ marginBottom: '1em' }}>Life happens, plans change and sometimes you have to cancel your amazing plans.But that's okay, Here's our cancellation policy:</Paragraph>
      <b>For guests:</b>
      <List>
        <li>If the booking is canceled by the host you receive a 100 % refund.</li>
        <li>If you cancel the booking as a guest More than 48 hours before the experience date we will refund 100 % of the total price.</li>
        <li>If you cancel the booking as a guest Less than 48 days before the experience date: The host will be fully paid, you won’t receive a refund.</li>
      </List>
      <b>For hosts:</b>
      <List>
        <li>If the booking is canceled by the host the guest receives a 100 % refund.</li>
        <li>All bookings must be confirmed within 48 hours.If you reject or don’t confirm within this time range, the booking request expires and no payment will be made to you.</li>
        <li>If the booking is canceled by the guest more than 48 hours before the experience date you won't receive any payment.</li>
        <li>If the booking is canceled Less than 48 before the experience date: you get your full share of the booking amount.</li>
      </List>
      <Heading level={4} bold="true" style={{ marginTop: '1.6em' }}>Important notice for booking canceled by the host:</Heading>
      <Paragraph>When you cancel a confirmed booking, you won't receive any payment. But more importantly: your confirmation rate will be negatively influenced and your chances to receive future bookings will decrease.</Paragraph>
    </>
  )
}

export default CancellationPolicy
