import Rating from '.'

const wrap = (props = {}) => shallow(<Rating {...props} />).dive()

describe('Rating', () => {
  it('renders props when passed in', () => {
    const wrapper = wrap({ id: 'foo' })
    expect(
      wrapper.find({ id: 'foo' })
    ).toHaveLength(1)
  })
})
