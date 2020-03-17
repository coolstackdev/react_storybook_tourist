import React from 'react'
import { storiesOf } from '@storybook/react'
import { ExperiencePreviewCard } from 'components'
import mockExperiences from 'services/mockData/mockExperiences'

storiesOf('ExperiencePreviewCard', module)
	.add('default', () => (
		<ExperiencePreviewCard experience={mockExperiences[0]} />
	))