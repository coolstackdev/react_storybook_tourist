import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { GuestCounterButton } from 'components'

storiesOf('GuestCounterButton', module)
  .add('default', () => (
    <GuestCounterButton onLogin={action('login')} onLogout={action('logout')} />
  ))
  .add('with user', () => (
    <GuestCounterButton
      user={{ picture: 'https://avatars3.githubusercontent.com/u/3068563?v=3&s=460' }}
      onLogin={action('login')}
      onLogout={action('logout')}
    />
  ))
