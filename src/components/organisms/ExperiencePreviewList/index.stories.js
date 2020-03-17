import React from 'react'
import { storiesOf } from '@storybook/react'
import { ExperiencePreviewList } from 'components'

storiesOf('ExperiencePreviewList', module)
	.add('default', () => (
		<ExperiencePreviewList />
	))
