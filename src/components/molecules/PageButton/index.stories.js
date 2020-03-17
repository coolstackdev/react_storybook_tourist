import React from 'react'
import { storiesOf } from '@storybook/react'
import { PageButton } from 'components'

storiesOf('PageButton', module)
  .add('default', () => (
    <IconButton icon="close">Hello</IconButton>
  ))
  .add('transparent', () => (
    <IconButton icon="close" transparent>Hello</IconButton>
  ))
  .add('responsive', () => (
    <IconButton icon="close" responsive>Decrease panel width</IconButton>
  ))
  .add('responsive with breakpoint', () => (
    <IconButton icon="close" breakpoint={300} responsive>Decrease panel width to 300</IconButton>
  ))
  .add('without text', () => (
    <IconButton icon="close" />
  ))
  .add('collapsed', () => (
    <IconButton icon="close" collapsed>Hello</IconButton>
  ))
