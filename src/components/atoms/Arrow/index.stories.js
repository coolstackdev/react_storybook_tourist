import React from 'react'
import { storiesOf } from '@storybook/react'
import Arrow from '.'

storiesOf('Arrow', module)
  .add('default', () => (
    <Arrow>Hello</Arrow>
  ))
  .add('reverse', () => (
    <Arrow reverse>Hello</Arrow>
  ))
  .add('another palette', () => (
    <Arrow palette="secondary">Hello</Arrow>
  ))
