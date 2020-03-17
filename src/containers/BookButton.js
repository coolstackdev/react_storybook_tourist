import React from 'react'
import { connect } from 'react-redux'
import { fromSocial } from 'store/selectors'
import { modalShow, modalHide } from 'store/actions'

import { BookButton } from 'components'

const BookButtonContainer = props => <BookButton {...props} />

const mapStateToProps = state => ({
  user: fromSocial.getUser(state),
})

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(modalHide('book')),
  onOpen: () => dispatch(modalShow('book')),
})


export default connect(mapStateToProps, mapDispatchToProps)(BookButtonContainer)
