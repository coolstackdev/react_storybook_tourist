import React from 'react'
import T from 'prop-types'
import { connect } from 'react-redux'
import { fromResource } from 'store/selectors'
import { modalHide, changeExperienceDate } from 'store/actions'

import { BookModal } from 'components'

const BookModalContainer = ({
  ...props

}) => {
  return <BookModal {...props} />
}

const mapStateToProps = state => ({
  // detail: fromResource.getDetail(state, 'experience'),
  // experienceDate: state.userSelections.experienceDate,
})

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(modalHide('signin')),
  // changeExperienceDate: (experienceDate) => dispatch(changeExperienceDate(experienceDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(BookModalContainer)
