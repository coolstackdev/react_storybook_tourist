import Spinner from '.'

const wrap = (props = {}) => shallow(<Spinner {...props} />)
describe('Spinner', () => {
  it('renders props when passed in', () => {
    const wrapper = wrap({ id: 'foo' })
    expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
  })

})
