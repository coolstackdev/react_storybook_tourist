import React from 'react'
import { storiesOf } from '@storybook/react'
import Dropdown from '.'

storiesOf('Dropdown', module)
  .add('default', () => (
    <Dropdown>Hello</Dropdown>
  ))
  .add('reverse', () => (
    <Dropdown reverse>Hello</Dropdown>
  ))
  .add('another palette', () => (
    <Dropdown palette="secondary">Hello</Dropdown>
  ))
