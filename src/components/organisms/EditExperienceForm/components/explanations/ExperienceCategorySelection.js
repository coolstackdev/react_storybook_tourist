import React from 'react'
import T from 'prop-types'
import styled, { css } from 'styled-components'
import { palette } from 'styled-tools'
import { font } from 'styled-theme'
import {
	List,
	Field,
} from 'components'
import subcategoryChoices from 'utils/subcategoryChoices'
import * as R from 'ramda'

const StyledList = styled(List)`
	list-style: none;
	columns: 3 8em;
`

const StyledCheckbox = styled(Field)`
	margin-right: 1.5rem;
	-webkit-appearance: none;
	display: inline-block;
	position: relative;

	&:active, &:checked:active {
		box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px 1px 3px rgba(0,0,0,0.1);
	}

	&:checked {
		background-color: #e9ecee;
		border: 1px solid #adb8c0;
		box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05), inset 15px 10px -12px rgba(255,255,255,0.1);
		color: #99a1a7;

		&:after {
			font-size: 14px;
			position: absolute;
			top: 0px;
			left: 3px;
			color: #99a1a7;
		}
	}
`

const ExperienceCategorySelection = ({
	...props
}) => {

	function objectWithinArray(obj, array, field) {
		var unique = false;
		array.forEach(function (entry) {
			if (entry[field] == obj[field]) {
				unique = true;
			}
		});

		return unique;
	}

	const onSelectCheckbox = (evt, subcategory) => {
		evt.persist()
		if (evt.target.checked) {
			props.updateAttribute('categories', [...props.detail.categories, subcategory])
		} else {
			props.updateAttribute('categories', props.detail.categories.filter(el => subcategory.name !== el.name))
		}
	}

	const renderCheckboxes = subcategoryChoices.map(subcategory => {
		return (
			<li key={subcategory.categoryid}>
				<StyledCheckbox
					onChange={(evt) => onSelectCheckbox(evt, subcategory)}
					type="checkbox"
					label={subcategory.name}
					name={subcategory.name}
					checked={objectWithinArray(subcategory, props.detail.categories, 'categoryid')}
				/>
			</li>
		)
	})

	return (
		<StyledList>
			{renderCheckboxes}
		</StyledList>
	)
}

ExperienceCategorySelection.propTypes = {
}

export default ExperienceCategorySelection