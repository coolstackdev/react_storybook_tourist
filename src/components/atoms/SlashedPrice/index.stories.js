import React from 'react'
import { storiesOf } from '@storybook/react'
import SlashedPrice from '.'

storiesOf('SlashedPrice', module)
  .add('default', () => (
    <SlashedPrice>Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.</SlashedPrice>
  ))
  .add('reverse', () => (
    <SlashedPrice reverse>Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.</SlashedPrice>
  ))
  .add('palette', () => (
    <SlashedPrice palette="primary">Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.</SlashedPrice>
  ))
  .add('palette reverse', () => (
    <SlashedPrice palette="primary" reverse>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </SlashedPrice>
  ))
  .add('palette opaque', () => (
    <SlashedPrice palette="primary" opaque>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </SlashedPrice>
  ))
  .add('palette opaque reverse', () => (
    <SlashedPrice palette="primary" opaque reverse>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </SlashedPrice>
  ))
