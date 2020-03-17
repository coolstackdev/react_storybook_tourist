import React, { useState, useEffect } from 'react'
import T from 'prop-types'
import { connect } from 'react-redux'
import {
	modalHide,
	applySelected,
} from 'store/actions'

import { CategoryModal } from 'components'

let CategoryModalContainer = ({
	...props
}) => {
	return <CategoryModal {...props} />
}

CategoryModalContainer.propTypes = {
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
	onClose: () => dispatch(modalHide('category')),
	onApply: () => dispatch(applySelected('apply'))
})

CategoryModalContainer = connect(mapStateToProps, mapDispatchToProps)(CategoryModalContainer)

export default CategoryModalContainer
