import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import T from 'prop-types'
import { connect } from 'react-redux'
import {
  fromResource,
  fromUserSelections
} from 'store/selectors'
import {
  PaymentPage,
  Spinner,
} from 'components'

const PaymentPageContainer = ({
  loading,
  failed,
  detail,
  userSelections,
  user,
  ...props
}) => {

  return <PaymentPage {...{
    detail,
    userSelections,
    loading,
    failed,
    ...props
  }} />
}

const mapStateToProps = state => ({
  user: state.social.user,
  detail: fromResource.getDetail(state, 'experience'),
  userSelections: state.userSelections,
})

export default connect(mapStateToProps)(PaymentPageContainer)