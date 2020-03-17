import React from 'react'
import { storiesOf } from '@storybook/react'
import HighlightsList from '.'

storiesOf('HighlightsList', module)
  .add('default', () => (
    <HighlightsList>Hello</HighlightsList>
  ))
  .add('reverse', () => (
    <HighlightsList reverse>Hello</HighlightsList>
  ))
  .add('another palette', () => (
    <HighlightsList palette="secondary">Hello</HighlightsList>
  ))
