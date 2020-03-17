import React from 'react'
import T from 'prop-types'
import styled, { css } from 'styled-components'
import { palette } from 'styled-tools'
import { font } from 'styled-theme'
import {
	Field,
} from 'components'

const PriceDiscountPanel = ({
	...props
}) => {

	return (
		<>
			<Field name="fixedCost" label="Fixed Expenses (USD)" type="number" onChange={(e) => props.updateAttribute('fixed_cost', parseInt(e.target.value))} value={props.detail.fixed_cost.toString()} />
			<Field name="fixedCostPP" label="Variable Costs Per Guest" type="number" onChange={(e) => props.updateAttribute('fixed_cost_pp', parseInt(e.target.value))} value={props.detail.fixed_cost_pp.toString()} />
			<Field name="hourlyRate" label="Hourly Rate" type="number" onChange={(e) => props.updateAttribute('hourly_rate', parseInt(e.target.value))} value={props.detail.hourly_rate.toString()} />
			<Field name="capacity" label="Capacity - Max number of people" type="number" onChange={(e) => props.updateAttribute('capacity', parseInt(e.target.value))} value={props.detail.capacity.toString()} />
			<Field name="discount" label="Discount 0-100%" type="number" onChange={(e) => props.updateAttribute('discount', parseInt(e.target.value))} value={props.detail.discount.toString()} />
			<Field name="originalPrice" label="Competitor's Price" type="number" onChange={(e) => props.updateAttribute('original_price', parseInt(e.target.value))} value={props.detail.original_price.toString()} />
		</>
	)
}

PriceDiscountPanel.propTypes = {
}

export default PriceDiscountPanel