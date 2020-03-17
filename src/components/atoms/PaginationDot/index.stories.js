import React from 'react'
import { storiesOf } from '@storybook/react'
import PaginationDot from '.'

storiesOf('PaginationDot', module)
  .add('default', () => (
    <PaginationDot>Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.</PaginationDot>
  ))
  .add('reverse', () => (
    <PaginationDot reverse>Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.</PaginationDot>
  ))
  .add('palette', () => (
    <PaginationDot palette="primary">Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.</PaginationDot>
  ))
  .add('palette reverse', () => (
    <PaginationDot palette="primary" reverse>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </PaginationDot>
  ))
  .add('palette opaque', () => (
    <PaginationDot palette="primary" opaque>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </PaginationDot>
  ))
  .add('palette opaque reverse', () => (
    <PaginationDot palette="primary" opaque reverse>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </PaginationDot>
  ))
