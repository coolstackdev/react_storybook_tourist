// https://github.com/diegohaz/arc/wiki/Example-components#icon
import React from 'react'
import { storiesOf } from '@storybook/react'
import Search from '.'

storiesOf('Search', module)
  .add('default', () => (
    <Search icon="close" />
  ))
  .add('palette', () => (
    <Search icon="close" palette="primary" />
  ))
  .add('palette reverse', () => (
    <Search icon="close" palette="primary" reverse />
  ))
  .add('height', () => (
    <Search icon="close" height={100} />
  ))
