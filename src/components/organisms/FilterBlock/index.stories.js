import React from 'react'
import { storiesOf } from '@storybook/react'
import { FilterBlock } from 'components'

storiesOf('FilterBlock', module)
	.add('default', () => (
		<FilterBlock experience={experience} />
	))