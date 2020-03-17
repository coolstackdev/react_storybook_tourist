import React from 'react'
import T from 'prop-types'
// import onClickOutside from 'react-onclickoutside'
import styled, { css } from 'styled-components'
import { palette, ifProp } from 'styled-tools'
import { font } from 'styled-theme'
import {
	Heading,
	Card,
	Paragraph
} from 'components'

const Wrapper = styled.div`
	margin-top: -1rem;
	padding: 0.8rem 1.2rem;
	border: 1px dotted ${palette('grayscale', 3)};
	border-bottom-left-radius: 0.8rem;
	border-bottom-right-radius: 0.8rem;
	display: ${ifProp('hidden', 'none')};
`

const ExpectationsPanel = ({
	hidden,
	content,
	...props
}) => {
	// if (props.setExplanationOpen) {
	// 	ExpectationsPanel.handleClickOutside = () => props.setExplanationOpen('')
	// }

	return (
		<Wrapper hidden={hidden}>
			{content}
		</Wrapper>
	)
}

// const clickOutsideConfig = {
// 	handleClickOutside: () => ExpectationsPanel.handleClickOutside
// }

ExpectationsPanel.propTypes = {
}

// export default onClickOutside(ExpectationsPanel, clickOutsideConfig)
export default ExpectationsPanel