import React, { useState } from 'react'

const useScrollPosition = () => {
	const [scrollPosition, setScrollPosition] = useState(0)
	window.addEventListener('scroll', (e) => {
		setScrollPosition(window.scrollY)
	})

	return scrollPosition
}

export default useScrollPosition