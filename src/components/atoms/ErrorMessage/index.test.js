import ErrorMessage from '.'

const wrap = (props = {}) => shallow(<ErrorMessage {...props} />)
describe('ErrorMessage', () => {
  it('renders children when passed in', () => {
    const wrapper = wrap({ children: 'test' })
    expect(wrapper.contains('test')).toBe(true)
  })

  it('renders props when passed in', () => {
    const wrapper = wrap({ id: 'foo' })
    expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
  })

})
