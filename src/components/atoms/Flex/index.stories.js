import React from 'react'
import { storiesOf } from '@storybook/react'
import Flex from '.'

storiesOf('Flex', module)
  .add('default', () => (
    <Flex>Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.</Flex>
  ))
  .add('reverse', () => (
    <Flex reverse>Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.</Flex>
  ))
  .add('palette', () => (
    <Flex palette="primary">Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.</Flex>
  ))
  .add('palette reverse', () => (
    <Flex palette="primary" reverse>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Flex>
  ))
  .add('palette opaque', () => (
    <Flex palette="primary" opaque>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Flex>
  ))
  .add('palette opaque reverse', () => (
    <Flex palette="primary" opaque reverse>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Flex>
  ))
