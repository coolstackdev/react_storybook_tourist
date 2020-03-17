import React from 'react'
import { storiesOf } from '@storybook/react'
import { Map } from 'components'

storiesOf('Map', module)
  .add('default', () => (
    <Map name="field" />
  ))
