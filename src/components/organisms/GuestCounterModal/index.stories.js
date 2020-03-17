import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { GuestCounterModal } from 'components'

storiesOf('GuestCounterModal.js', module)
  .add('default', () => (
    <GuestCounterModal.js
      onFacebookLogin={action('facebook')}
      onGoogleLogin={action('google')}
      onClose={action('closed')}
      isOpen
    />
  ))
