import React, { useEffect, useRef } from 'react'
import T from 'prop-types'
import { connect } from 'react-redux'
import { moveObjectFieldToArray } from 'utils/helpers'
import { fromResource, fromUserSelections } from 'store/selectors'
import { resourceListReadRequest } from 'store/actions'
import { ExperienceList } from 'components'
import { useUser } from 'hooks'

const ExperienceListContainer = ({
  list,
  loading,
  failed,
  readList,
  languages,
  categories,
  adults,
  kids,
  ...props
}) => {
  const superCategories = moveObjectFieldToArray(categories, 'id').toString()
  const apiHeaderLanguages = moveObjectFieldToArray(languages, 'id').toString()
  const { user } = useUser()

  const apiRequestParams = {
    endpoint: 'GetExperiences',
    count: 30,
    step: 1,
    cityid: props.match.params.cityname,
    startdate: '2018-12-20 8:30:00',
    enddate: '2018-12-20 22:15:00',
    sort_by: 'rating',
    adults: adults,
    kids: kids,
    min_price: 1,
    max_price: 1000.50,
    time_of_day: 1,
    sort_by: 'rating',
    super_categories: superCategories,
    languages: apiHeaderLanguages
  }

  useEffect(() => {
    readList(apiRequestParams)
  }, [superCategories, apiHeaderLanguages, props.match.params.cityname])

  return <ExperienceList
    loading={!list.length}
    noExperiences={list.statusCode > 400}
    {...{
      list,
      failed,
      languages,
      categories,
      adults,
      kids,
      ...props
    }} />
}

ExperienceListContainer.propTypes = {
  limit: T.number,
  loading: T.bool,
  failed: T.bool,
  readList: T.func.isRequired,
  userSelections: T.shape({
    categories: T.arrayOf(T.shape({
      id: T.number.isRequired,
      name: T.string.isRequired
    })),
    languages: T.arrayOf(T.shape({
      id: T.number.isRequired,
      name: T.string.isRequired
    })),
  }),
}

ExperienceListContainer.defaultProps = {
  limit: 50
}

const mapStateToProps = state => {
  return {
    list: fromResource.getList(state, 'experience'),
    languages: fromUserSelections.getLanguages(state),
    categories: fromUserSelections.getCategories(state),
    adults: fromUserSelections.getAdults(state),
    kids: fromUserSelections.getKids(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    readList: (apiRequestParams) => dispatch(resourceListReadRequest('experience', { apiRequestParams })),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExperienceListContainer)
