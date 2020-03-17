import React from 'react'
import T from 'prop-types'
import { connect } from 'react-redux'
import { fromModal } from 'store/selectors'
import { modalHide } from 'store/actions'

import { Modal } from 'components'

const ModalContainer = props => <Modal {...props} onClose={props.onClose} name="Kyle" />

ModalContainer.propTypes = {
  name: T.string.isRequired,
  isOpen: T.bool,
}

const mapStateToProps = (state, { name, isOpen }) => ({
  isOpen: isOpen || fromModal.isOpen(state, name),
})

const mapDispatchToProps = (dispatch, { name }) => ({
  onClose: () => dispatch(modalHide(name)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer)
