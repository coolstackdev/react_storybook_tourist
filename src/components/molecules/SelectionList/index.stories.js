import React from 'react'
import { storiesOf } from '@storybook/react'
import { SelectionList } from 'components'

storiesOf('SelectionList', module)
	.add('default', () => (
		<SelectionList />
	))
