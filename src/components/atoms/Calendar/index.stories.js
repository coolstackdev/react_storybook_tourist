import React from 'react'
import { storiesOf } from '@storybook/react'
import Calendar from '.'

storiesOf('Calendar', module)
  .add('default', () => (
    <Calendar>Hello</Calendar>
  ))
  .add('reverse', () => (
    <Calendar reverse>Hello</Calendar>
  ))
  .add('another palette', () => (
    <Calendar palette="secondary">Hello</Calendar>
  ))
