import React from 'react'
import { storiesOf } from '@storybook/react'
import Slide from '.'

storiesOf('Slide', module)
  .add('default', () => (
    <Slide>Hello</Slide>
  ))
  .add('reverse', () => (
    <Slide reverse>Hello</Slide>
  ))
  .add('another palette', () => (
    <Slide palette="secondary">Hello</Slide>
  ))
