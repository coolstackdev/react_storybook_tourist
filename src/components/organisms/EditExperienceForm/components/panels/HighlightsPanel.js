import React from 'react'
import T from 'prop-types'
import styled, { css } from 'styled-components'
import { palette } from 'styled-tools'
import { font } from 'styled-theme'
import {
	Heading,
	Card,
	Link,
	Image,
	Field,
} from 'components'
import { FieldExplanation } from '../index'
import { Highlights } from '../explanations'

const HighlightsPanel = ({
	explanationOpen,
	handleFocusField,
	...props
}) => {

	return (
		<>
			<Field name="highlights" label="Highlights/Uniqueness" onFocus={() => handleFocusField('highlights')} />
			<FieldExplanation hidden={explanationOpen !== 'highlights'} content={
				<Highlights {...props} />
			}/>

			{/* <Field name="roadmap" label="Roadmap" onFocus={() => handleFocusField('roadmap')} />
			<FieldExplanation hidden={explanationOpen !== 'roadmap'} content={
				<Roadmap {...props} />
			}/> */}
		</>
	)
}

HighlightsPanel.propTypes = {
}

export default HighlightsPanel