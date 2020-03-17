import React, { useEffect } from 'react'
import T from 'prop-types'
import { connect } from 'react-redux'
import api from 'services/api'
import { ToastContainer, toast } from 'react-toastify'
import { fromSocial, fromResource } from 'store/selectors'
import {
  moveObjectFieldToArray,
  createLanguagesAttr,
  createPhotosAttr
} from 'utils/helpers'
import {
  initializeNewExperience,
  resourceDetailReadRequest,
  resourceUpdateRequest,
  attributeUpdate,
} from 'store/actions'
import { EditExperienceForm } from 'components'

const EditExperienceFormContainer = ({
  readDetail,
  detail,
  user,
  ...props
}) => {
  const experiencename = props.match.params.experiencename

  const notify = () => toast("Experience Saved!")

  let apiRequestParams
  if (experiencename) {
    apiRequestParams = {
      endpoint: "GetExperienceInfo",
      experienceid: experiencename,
      adults: 2,
      kids: 2
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    api.post('/SetExperience', {
      experienceid: detail.experienceid,
      userid: user.userid,
      token: user.token,
      hostid: user.hostid,
      cityid: detail.cityid,
      title: detail.title,
      tag_line: detail.tag_line,
      duration: detail.experience_length,
      description: detail.description,
      included: detail.included,
      expect: detail.expect,
      bring: detail.bring,
      start_location: detail.start_location,
      end_location: detail.end_location,
      latitude: detail.latitude,
      longitude: detail.longitude,
      currency: detail.currency,
      fixed_cost: detail.fixed_cost,
      fixed_cost_pp: detail.fixed_cost_pp,
      hourly_rate: detail.hourly_rate,
      original_price: detail.original_price,
      capacity: detail.capacity,
      discount: detail.discount,
      categories: moveObjectFieldToArray(detail.categories, 'categoryid').toString(),
      highlights: detail.highlights.join(' | '),
      languages: createLanguagesAttr(detail.languages),
      photos: createPhotosAttr(detail.photos)
      // photos: detail.photos
    })
      .then(json => {
        const response = JSON.parse(json.d)
        props.updateAttribute('experienceid', response.experienceid)
        notify()
      })
      .catch(err => {
        console.error(err)
      })
  }

  useEffect(() => {
    if (experiencename) {
      readDetail(apiRequestParams)
    } else {
      props.initializeNewExperience()
    }
  }, [experiencename])

  return (
    <EditExperienceForm
      handleSubmit={handleSubmit}
      detail={detail}
      user={user}
      {...props}
    />
  )
}

EditExperienceFormContainer.propTypes = {
}

const mapStateToProps = state => {
  return {
    detail: fromResource.getDetail(state, 'experience'),
    user: fromSocial.getUser(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    readDetail: (apiRequestParams) => dispatch(resourceDetailReadRequest('experience', { apiRequestParams })),
    updateResource: () => dispatch(resourceUpdateRequest('experience', )),
    initializeNewExperience: () => dispatch(initializeNewExperience('experience')),
    updateAttribute: (attribute, payload) => dispatch(attributeUpdate(attribute, payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExperienceFormContainer)
