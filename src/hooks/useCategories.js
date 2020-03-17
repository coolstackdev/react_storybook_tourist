// import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fromUserSelections } from 'store/selectors'
import { categoryRemove, categoryAdd } from 'store/actions'

const useCategories = () => {
	const dispatch = useDispatch()

	const categories = useSelector(state => fromUserSelections.getCategories(state))

	const removeCategory = (category) => dispatch(categoryRemove(category))
	const addCategory = (category) => dispatch(categoryAdd(category))

	return {
		categories,
		removeCategory,
		addCategory
	}
}

export default useCategories