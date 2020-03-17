import Interests from '.'

const wrap = (props = {}) => shallow(<Interests {...props} />).dive()

describe('Interests', () => {
  it('renders props when passed in', () => {
    const wrapper = wrap({ id: 'foo' })
    expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
  })

})
