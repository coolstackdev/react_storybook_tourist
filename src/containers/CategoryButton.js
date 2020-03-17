import React from 'react'
import { connect } from 'react-redux'
import { fromSocial } from 'store/selectors'
import { modalShow } from 'store/actions'

import { CategoryButton } from 'components'

const CategoryButtonContainer = props => <CategoryButton {...props} />

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
	onClose: () => dispatch(modalHide('category')),
	onOpen: () => dispatch(modalShow('category')),
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryButtonContainer)
