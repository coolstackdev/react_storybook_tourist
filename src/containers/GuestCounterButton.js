import React from 'react'
import { connect } from 'react-redux'
import { fromSocial } from 'store/selectors'
import { modalShow } from 'store/actions'

import { GuestCounterButton } from 'components'

const GuestCounterButtonContainer = props => <GuestCounterButton {...props} />

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
	onClose: () => dispatch(modalHide('guestCounter')),
	onOpen: () => dispatch(modalShow('guestCounter')),
})

export default connect(mapStateToProps, mapDispatchToProps)(GuestCounterButtonContainer)
