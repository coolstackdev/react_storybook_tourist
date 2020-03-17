import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { CategoryModal } from 'components'

storiesOf('CategoryModal.js', module)
  .add('default', () => (
    <CategoryModal.js
      onFacebookLogin={action('facebook')}
      onGoogleLogin={action('google')}
      onClose={action('closed')}
      isOpen
    />
  ))
