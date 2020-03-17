import React from 'react'
import T from 'prop-types'
import styled, { css } from 'styled-components'
import { ifProp, ifNotProp } from 'styled-tools'
import * as R from 'ramda'
import './styles.scss'

import { Selection } from 'components'

const SelectionWrapper = styled.div`
	margin: 0.8rem auto .1rem;

	@media screen and (min-width: 800px) {
		margin-top: 1.3rem;
	}
`

const UnorderedListSelection = styled.ul`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	list-style-type: none;
	padding: 0;
	height: 100%;
`

const ListItemSelection = styled.li`
	box-sizing: border-box;
	margin: 0.5em 0.3em;
`

const StyledSelection = styled(Selection)`
	/* height: 50px; */
	margin: 0 auto;
`

const SelectionList = ({
	availableSelections,
	selectedChoices,
	handleClickChoice,
	...props
}) => {

	const renderSelections = availableSelections.map(choice => {
		return (
			<ListItemSelection
				key={choice.id}
				onClick={() => handleClickChoice(choice)}
				{...props}
			>
				<StyledSelection
					name={choice.name}
					subtext={choice.subtext}
					selectedChoices={selectedChoices}
					selected={R.includes(choice, selectedChoices)}
					icon={choice.icon}
					backgroundColor={choice.hex}
					{...props}
				/>
			</ListItemSelection>
		)
	})

	return (
		<SelectionWrapper {...props}>
			<UnorderedListSelection>
				{renderSelections}
			</UnorderedListSelection>
		</SelectionWrapper>
	)
}

SelectionList.propTypes = {
	availableSelections: T.array.isRequired,
	onClick: T.func,
	selectedCategories: T.array,
	handleClickChoice: T.func.isRequired
}

SelectionList.defaultProps = {
}

export default SelectionList