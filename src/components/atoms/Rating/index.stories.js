import React from 'react'
import { storiesOf } from '@storybook/react'
import Rating from '.'

storiesOf('Rating', module)
  .add('default', () => (
    <Rating />
  ))