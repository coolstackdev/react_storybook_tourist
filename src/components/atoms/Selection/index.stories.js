import React from 'react'
import { storiesOf } from '@storybook/react'
import Selection from '.'

storiesOf('Selection', module)
  .add('default', () => (
    <Selection text="family fun" />
  ))
  .add('reverse', () => (
    <Selection reverse text="family fun" />
  ))
  .add('selected', () => (
    <Selection selected={true} text="family fun" />
  ))
  .add('invalid', () => (
    <Selection invalid text="family fun" />
  ))
