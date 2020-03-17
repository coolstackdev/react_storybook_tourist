import SwipeTemplate from '.'

const wrap = (props = {}) => (
  shallow(<SwipeTemplate header="header" footer="footer" {...props}>test</SwipeTemplate>)
)
describe('SwipeTemplate', () => {

  it('mounts', () => {
    mount(<SwipeTemplate header="header" footer="footer">test</SwipeTemplate>)
  })

  it('renders children when passed in', () => {
    const wrapper = wrap()
    expect(wrapper.contains('test')).toBe(true)
  })

  it('renders header', () => {
    const wrapper = wrap()
    expect(wrapper.contains('header')).toBe(true)
  })

  it('renders hero', () => {
    const wrapper = wrap({ hero: 'hero' })
    expect(wrapper.contains('hero')).toBe(true)
  })

  it('renders footer', () => {
    const wrapper = wrap()
    expect(wrapper.contains('footer')).toBe(true)
  })
})
