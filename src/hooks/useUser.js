import { useSelector } from 'react-redux'
import { fromSocial } from 'store/selectors'

const useUser = () => {

	const user = useSelector(state => fromSocial.getUser(state))

	return {
		user,
	}
}

export default useUser