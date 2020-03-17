import React from 'react'
import { storiesOf } from '@storybook/react'
import { IconText } from 'components'

storiesOf('IconText', module)
  .add('default', () => (
    <IconText icon="clock">Hello</IconText>
  ))
  .add('right', () => (
    <IconText icon="clock" right>Hello</IconText>
  ))
  .add('inside paragraph', () => (
    <p>
      Consequat cupidatat id
      <IconText icon="clock">excepteur</IconText>
      {' '}
      ex nisi proident et sunt fugiat id pariatur.
    </p>
  ))
