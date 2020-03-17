import React from 'react'
import { storiesOf } from '@storybook/react'
import Avatar from '.'

storiesOf('Avatar', module)
  .add('default', () => (
    <Avatar avatarUrl="https://i.ytimg.com/vi/vOWboQGcm88/maxresdefault.jpg" />
  ))
  .add('reverse', () => (
    <Avatar reverse avatarUrl="https://i.ytimg.com/vi/vOWboQGcm88/maxresdefault.jpg" />
  ))
