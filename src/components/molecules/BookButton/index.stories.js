import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { BookButton } from 'components'

storiesOf('BookButton', module)
  .add('default', () => (
    <BookButton onLogin={action('login')} onLogout={action('logout')} />
  ))
  .add('with user', () => (
    <BookButton
      user={{ picture: 'https://avatars3.githubusercontent.com/u/3068563?v=3&s=460' }}
      onLogin={action('login')}
      onLogout={action('logout')}
    />
  ))
