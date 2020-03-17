import React, { useEffect } from 'react'
import T from 'prop-types'
import { connect } from 'react-redux'
import api from 'services/api'
import { fromResource, fromUserSelections } from 'store/selectors'
import { resourceListReadRequest } from 'store/actions'
import { MyExperienceList, Spinner } from 'components'
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
	const { user } = useUser()

	const apiRequestParams = {
		endpoint: 'GetExperiencesByHost',
		hostid: user.hostid,
		userid: user.userid,
		token: user.token
	}

	const removeExperience = (experienceid) => {
		api.post('/RemoveExperience', {
			experienceid,
			userid: user.userid,
			token: user.token,
			hostid: user.hostid
		})
		.then(json => {
			const response = JSON.parse(json.d)
			readList(apiRequestParams)
		})
		.catch(error => {
			console.error(error)
		})
	}

	useEffect(() => {
		readList(apiRequestParams)
	}, [])

	return <MyExperienceList
		loading={!list.length}
		noExperiences={list.statusCode > 400}
		removeExperience={removeExperience}
		{...{
			list,
			failed,
			...props
		}} />
}

ExperienceListContainer.propTypes = {
	limit: T.number,
	loading: T.bool,
	failed: T.bool,
	readList: T.func.isRequired,
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
