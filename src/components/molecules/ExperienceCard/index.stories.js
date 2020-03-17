import React from 'react'
import { storiesOf } from '@storybook/react'
import { ExperienceCard } from 'components'
import mockExperiences from 'services/mockData/mockExperiences'

storiesOf('ExperienceCard', module)
	.add('default', () => (
		<ExperienceCard experience={mockExperiences[0]} />
	))