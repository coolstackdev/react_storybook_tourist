import React from 'react'
import { storiesOf } from '@storybook/react'
import { Interests } from 'components'

storiesOf('Interests', module)
  .add('default', () => (
    <Interests />
  ))
