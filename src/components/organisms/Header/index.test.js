import Header from '.'

const wrap = (props = {}) => shallow(<Header {...props} />).dive()

describe('Header', () => {
  it('renders props when passed in', () => {
    const wrapper = wrap({ id: 'foo' })
    expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
  })

})
