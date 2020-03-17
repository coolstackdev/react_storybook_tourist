import Avatar from '.'

// const wrap = (props = {}) => shallow(<Avatar {...props} />)

describe('Avatar', () => {
	let wrapper

	describe('when Avatar renders', () => {
		beforeEach(() => {
			wrapper = shallow(
				<Avatar avatarUrl="https://i.ytimg.com/vi/vOWboQGcm88/maxresdefault.jpg" />
			)
		})

		it('works', () => {
			expect(
				wrapper
			).toMatchSnapshot()
		})

		it('should render when an image is passed as props', () => {
			expect(
				wrapper.exists()
			).toBe(true)
		})

		// it('props.avatarUrl should be put into img src', () => {
		// 	const img = wrapper.find('img')
		// 	expect(
		// 		img.props().src
		// 	).toBe("https://i.ytimg.com/vi/vOWboQGcm88/maxresdefault.jpg")
		// })
	})
})