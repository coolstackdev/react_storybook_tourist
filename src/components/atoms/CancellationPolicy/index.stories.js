import React from 'react'
import { storiesOf } from '@storybook/react'
import CancellationPolicy from '.'

storiesOf('CancellationPolicy', module)
  .add('default', () => (
    <CancellationPolicy>Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.</CancellationPolicy>
  ))
  .add('reverse', () => (
    <CancellationPolicy reverse>Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.</CancellationPolicy>
  ))
  .add('palette', () => (
    <CancellationPolicy palette="primary">Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.</CancellationPolicy>
  ))
  .add('palette reverse', () => (
    <CancellationPolicy palette="primary" reverse>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </CancellationPolicy>
  ))
  .add('palette opaque', () => (
    <CancellationPolicy palette="primary" opaque>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </CancellationPolicy>
  ))
  .add('palette opaque reverse', () => (
    <CancellationPolicy palette="primary" opaque reverse>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </CancellationPolicy>
  ))
