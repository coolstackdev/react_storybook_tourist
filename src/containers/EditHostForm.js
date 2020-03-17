import React, { useEffect } from 'react'
import T from 'prop-types'
import { connect } from 'react-redux'
import api from 'services/api'
import { EditHostForm } from 'components'
import { fromSocial, fromHost } from 'store/selectors'
import { SnackbarProvider, useSnackbar } from 'notistack'

import {
  hostInfoReadRequest,
  initializeNewHost,
  hostInfoAttributeUpdate,
  hostIdUpdate
} from 'store/actions'

const EditHostFormContainer = ({
  hostInfo, 
  user, 
  infoHost,
  updateHostId,
  ...props
  }) => {

  const hostid = user.hostid
  const userid = user.userid
  const token = user.token
  const { enqueueSnackbar } = useSnackbar()

  let apiRequestParams = {
    endpoint: "GetHostInfo",
    userid,
    hostid,
    token
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    api.post('/SetHost', {
      userid: user.userid,
      hostid: hostInfo.hostid,
      token: user.token,
      availability_monday_start: hostInfo.availability_monday_start,
      availability_monday_end: hostInfo.availability_monday_end,
      availability_tuesday_start: hostInfo.availability_tuesday_start,
      availability_tuesday_end: hostInfo.availability_tuesday_end,
      availability_wednesday_start: hostInfo.availability_wednesday_start,
      availability_wednesday_end: hostInfo.availability_wednesday_end,
      availability_thursday_start: hostInfo.availability_thursday_start,
      availability_thursday_end: hostInfo.availability_thursday_end,
      availability_friday_start: hostInfo.availability_friday_start,
      availability_friday_end: hostInfo.availability_friday_end,
      availability_saturday_start: hostInfo.availability_saturday_start,
      availability_saturday_end: hostInfo.availability_saturday_end,
      availability_sunday_start: hostInfo.availability_sunday_start,
      availability_sunday_end: hostInfo.availability_sunday_end,
      how_heard_about_us: hostInfo.how_heard_about_us,
      tagline: hostInfo.tagline,
      about_me: hostInfo.about_me,
      education_work_experience: hostInfo.education_work_experience,
      best_way_to_reach: hostInfo.best_way_to_reach,
      profile_image: hostInfo.profile_image,
      languages: hostInfo.languages,
    })
    .then(json => {
      const response = JSON.parse(json.d)
      props.updateAttribute('hostid', response.hostid)
      updateHostId(response.hostid)
      enqueueSnackbar('Your Profile Saved!', {
        variant: 'success'
      })
    })
    .catch(err => {
      console.error(err)
      enqueueSnackbar('Your Profile Not Saved!', {
        variant: 'error'
      })
    })
  }

  useEffect(() => {
    if (hostid) {
      infoHost(apiRequestParams)
    } else {
      props.initializeNewHost()
    }
  }, [])

  

  return (
    <EditHostForm
      hostInfo={hostInfo}
      user={user}
      handleSubmit={handleSubmit}
      {...props}
    />
  )
}

const mapStateToProps = state => {
  return {
    hostInfo: fromHost.getHostInfo(state, 'hostInfo'),
    user: fromSocial.getUser(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    infoHost: (apiRequestParams) => dispatch(hostInfoReadRequest('hostInfo', { apiRequestParams })),
    initializeNewHost: () => dispatch(initializeNewHost('hostInfo')),
    updateAttribute: (attribute, payload) => dispatch(hostInfoAttributeUpdate(attribute, payload)),
    updateHostId: (payload) => dispatch(hostIdUpdate(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditHostFormContainer)