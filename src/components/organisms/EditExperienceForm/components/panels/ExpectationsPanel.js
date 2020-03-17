import React from 'react'
import T from 'prop-types'
import styled, { css } from 'styled-components'
import { palette } from 'styled-tools'
import { font } from 'styled-theme'
import {
	Field
} from 'components'

const ExpectationsPanel = ({
	...props
}) => {

	return (
		<>
			<Field name="included" label="What's included in the experience?" onChange={(e) => props.updateAttribute('included', e.target.value)} value={props.detail.included} />
			<Field name="bring" label="What should the guest bring?" onChange={(e) => props.updateAttribute('bring', e.target.value)} value={props.detail.bring} />
			<Field name="expect" label="What should the guest expect?" onChange={(e) => props.updateAttribute('expect', e.target.value)} value={props.detail.expect} />
		</>
	)
}

ExpectationsPanel.propTypes = {
}

export default ExpectationsPanel