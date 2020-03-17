import React from 'react'
import { storiesOf } from '@storybook/react'
import { MyExperienceList } from 'components'

storiesOf('MyExperienceList', module)
	.add('default', () => (
		<MyExperienceList />
	))
