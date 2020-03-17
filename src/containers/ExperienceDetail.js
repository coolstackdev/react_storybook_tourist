import React, { useState, useEffect } from 'react'
import T from 'prop-types'
import { useWait } from 'react-wait'
import { connect } from 'react-redux'
import moment from 'moment'
import api from 'services/api'
import {
  formattedDateWithoutTime,
  getTimesForCurrentDate
} from 'utils/helpers'
import { fromResource, fromUserSelections, fromSocial } from 'store/selectors'
import {
  resourceDetailReadRequest,
  changeExperienceDate,
  changeExperienceTime,
} from 'store/actions'
import { ExperienceDetail, Spinner } from 'components'

const ExperienceDetailContainer = ({
  detail,
  readDetail,
  experienceDate,
  experienceTime,
  changeExperienceDate,
  changeExperienceTime,
  adults,
  kids,
  user,
  ...props
}) => {
  const [error, setError] = useState('')
  const { startWaiting, endWaiting } = useWait()

  const { experiencename, cityname } = props.match.params

  const apiRequestParams = {
    endpoint: "GetExperienceInfo",
    experienceid: experiencename,
    adults,
    kids
  }

  let availableStartTimes, parsedDate
  if (experienceDate) {
    parsedDate = moment(experienceDate).toDate()
    availableStartTimes = getTimesForCurrentDate(parsedDate, detail.availabilities)
  }

  const getQuoteBooking = () => {
    if (!parsedDate) {
      setError('You need to select a date')
      return
    }
    if (!experienceTime) {
      setError('You need to select a time')
      return
    }
    if (adults < 1) {
      setError('There must be at least 1 adult')
      return
    }
    setError('')
    startWaiting('BookCard')

    api.post('/QuoteBooking', {
      experienceid: detail.experienceid,
      startdate: `${formattedDateWithoutTime(parsedDate)} ${experienceTime}`,
      adults,
      kids,
      promocode: '',
    })
    .then(json => {
      const response = JSON.parse(json.d)

      if (parseInt(response.statusCode) >= 400) {
        console.error("QuoteBooking failed:", response.message)
        setError(response.message)
        endWaiting('BookCard')
        return
      }
      props.history.push({
        pathname: `/${cityname}/experiences/${experiencename}/payment`,
        state: {
          response,
          featurePhoto: detail.photos[0].photo_url,
          hostName: detail.host_name,
          experienceName: detail.title,
        }
      })
      dataLayer.push({
        event: 'Book Now button submitted',
        experienceId: detail.experienceid,
        experienceName: detail.title,
      })
      window.analytics.track('Book Now button submitted', {
        experienceId: detail.experienceid,
        experienceName: detail.title,
      })
      endWaiting('BookCard')
    })
    .catch(err => {
      console.error(err)
    })
  }

  useEffect(() => {
    readDetail(apiRequestParams)
    changeExperienceDate(null)
    changeExperienceTime(null)
  }, [experiencename])

  if (!detail.experienceid || !detail.availabilities) {
    return <Spinner />
  }

  return <ExperienceDetail
    loading={!detail.experienceid}
    {...{
      detail,
      error,
      availableStartTimes,
      changeExperienceDate,
      parsedDate,
      changeExperienceTime,
      experienceTime,
      getQuoteBooking,
      adults,
      kids
  }}/>
}

const mapStateToProps = state => ({
  user: fromSocial.getUser(state),
  detail: fromResource.getDetail(state, 'experience'),
  experienceDate: fromUserSelections.getDate(state),
  experienceTime: fromUserSelections.getTime(state),
  adults: fromUserSelections.getAdults(state),
  kids: fromUserSelections.getKids(state),
})

const mapDispatchToProps = (dispatch) => ({
  readDetail: (apiRequestParams) => dispatch(resourceDetailReadRequest('experience', { apiRequestParams })),
  changeExperienceDate: (experienceDate) => dispatch(changeExperienceDate(experienceDate)),
  changeExperienceTime: (experienceTime) => dispatch(changeExperienceTime(experienceTime)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ExperienceDetailContainer)