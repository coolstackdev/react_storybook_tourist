import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import GuestCounter from '.'

storiesOf('GuestCounter', module)
	.add('default', () => (
		<GuestCounter />
	))