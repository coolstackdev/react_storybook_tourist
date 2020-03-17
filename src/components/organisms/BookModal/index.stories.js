import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { BookModal } from 'components'

storiesOf('BookModal', module)
  .add('default', () => (
    <BookModal
      name="confirm"
      onConfirm={action('confirmed')}
      onClose={action('closed')}
      isOpen
    />
  ))
  .add('different button labels', () => (
    <BookModal
      name="confirm"
      confirmLabel="Foo"
      cancelLabel="Bar"
      onConfirm={action('confirmed')}
      onClose={action('closed')}
      isOpen
    />
  ))
  .add('different button props', () => (
    <BookModal
      name="confirm"
      confirmLabel="Remove"
      confirmProps={{ color: 'danger' }}
      cancelProps={{ color: 'grayscale' }}
      onConfirm={action('confirmed')}
      onClose={action('closed')}
      isOpen
    >
      Do you really want to remove it?
    </BookModal>
  ))
