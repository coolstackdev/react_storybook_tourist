import { useState, useEffect } from 'react'
import api from 'services/api'

const useHopServiceApi = () => {
	const [data, setData] = useState([])
	const [url, setUrl] = useState('')
	const [body, setBody] = useState({})
	const [isLoading, setIsLoading] = useState(false)
	const [isError, setIsError] = useState(false)

	useEffect(() => {
		const fetchData = async () => {
			setIsError(false)
			setIsLoading(true)
			try {
				const result = await api.post(url, body)
				setData(result.d)
			} catch (error) {
				setIsError(true)
			}
			setIsLoading(false)
		}
		if (url && body) {
			fetchData()
		}
	}, [url, body])
	return [{ data, isLoading, isError }, setUrl, setBody]
}

export default useHopServiceApi