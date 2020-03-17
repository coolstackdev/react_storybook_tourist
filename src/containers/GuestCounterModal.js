import React, { useState, useEffect } from 'react'
import T from 'prop-types'
import { connect } from 'react-redux'
import {
	modalHide,
} from 'store/actions'

import { GuestCounterModal } from 'components'

let GuestCounterModalContainer = ({
	...props
}) => {
	return <GuestCounterModal {...props} />
}

GuestCounterModalContainer.propTypes = {
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
	onClose: () => dispatch(modalHide('guestCounter')),
})

GuestCounterModalContainer = connect(mapStateToProps, mapDispatchToProps)(GuestCounterModalContainer)

export default GuestCounterModalContainer
