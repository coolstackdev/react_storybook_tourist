import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fromModal } from 'store/selectors'
import { modalHide, modalShow } from 'store/actions'

const useModal = () => {
	const dispatch = useDispatch()

	// const onClose = (modalName) => dispatch(modalHide(modalName))
	const onOpen = (modalName) => dispatch(modalShow(modalName))

	return {
		// onClose,
		onOpen,
	}
}

export default useModal