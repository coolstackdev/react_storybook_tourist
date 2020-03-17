import React from 'react'
import { storiesOf } from '@storybook/react'
import { ExperienceList } from 'components'

storiesOf('ExperienceList', module)
	.add('default', () => (
		<ExperienceList />
	))
