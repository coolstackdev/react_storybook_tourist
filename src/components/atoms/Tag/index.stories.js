import React from 'react'
import { storiesOf } from '@storybook/react'
import Tag from '.'

storiesOf('Tag', module)
  .add('default', () => (
    <Tag>Hello</Tag>
  ))
  .add('reverse', () => (
    <Tag reverse>Hello</Tag>
  ))
  .add('another palette', () => (
    <Tag palette="secondary">Hello</Tag>
  ))
