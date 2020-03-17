import React from 'react'
import { storiesOf } from '@storybook/react'
import Card from '.'

storiesOf('Card', module)
  .add('default', () => (
    <Card>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod. Officia aliqua reprehenderit fugiat occaecat quis non eiusmod. Officia aliqua reprehenderit fugiat occaecat quis non eiusmod. Officia aliqua reprehenderit fugiat occaecat quis non eiusmod. Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Card>
  ))
  .add('hover', () => (
    <Card hover>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod. Officia aliqua reprehenderit fugiat occaecat quis non eiusmod. Officia aliqua reprehenderit fugiat occaecat quis non eiusmod. Officia aliqua reprehenderit fugiat occaecat quis non eiusmod. Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Card>
  ))
  .add('flat', () => (
    <Card flat>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod. Officia aliqua reprehenderit fugiat occaecat quis non eiusmod. Officia aliqua reprehenderit fugiat occaecat quis non eiusmod. Officia aliqua reprehenderit fugiat occaecat quis non eiusmod. Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Card>
  ))
  .add('reverse', () => (
    <Card reverse>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod. Officia aliqua reprehenderit fugiat occaecat quis non eiusmod. Officia aliqua reprehenderit fugiat occaecat quis non eiusmod. Officia aliqua reprehenderit fugiat occaecat quis non eiusmod. Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Card>
  ))
  .add('palette', () => (
    <Card palette="primary">
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod. Officia aliqua reprehenderit fugiat occaecat quis non eiusmod. Officia aliqua reprehenderit fugiat occaecat quis non eiusmod. Officia aliqua reprehenderit fugiat occaecat quis non eiusmod. Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Card>
  ))
  .add('palette reverse', () => (
    <Card palette="primary" reverse>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod. Officia aliqua reprehenderit fugiat occaecat quis non eiusmod. Officia aliqua reprehenderit fugiat occaecat quis non eiusmod. Officia aliqua reprehenderit fugiat occaecat quis non eiusmod. Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Card>
  ))
  .add('palette opaque', () => (
    <Card palette= "primary" opaque>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod. Officia aliqua reprehenderit fugiat occaecat quis non eiusmod. Officia aliqua reprehenderit fugiat occaecat quis non eiusmod. Officia aliqua reprehenderit fugiat occaecat quis non eiusmod. Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Card>
  ))
  .add('palette opaque reverse', () => (
    <Card palette="primary" opaque reverse>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod. Officia aliqua reprehenderit fugiat occaecat quis non eiusmod. Officia aliqua reprehenderit fugiat occaecat quis non eiusmod. Officia aliqua reprehenderit fugiat occaecat quis non eiusmod. Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Card>
  ))
