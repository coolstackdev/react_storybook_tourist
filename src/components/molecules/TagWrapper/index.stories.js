import React from 'react'
import { storiesOf } from '@storybook/react'
import { TagWrapper } from 'components'

const tags = ['Istanbul', 'Vancouver', 'Lima']

storiesOf('TagWrapper', module)
  .add('default', () => (
    <TagWrapper tags={tags} />
  ))
  .add('right', () => (
    <TagWrapper tags={tags} icon="close">Hello</TagWrapper>
  ))
