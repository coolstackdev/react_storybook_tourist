import Languages from '.'

const wrap = (props = {}) => shallow(<Languages {...props} />).dive()

describe('Languages', () => {
  it('renders props when passed in', () => {
    const wrapper = wrap({ id: 'foo' })
    expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
  })

})
