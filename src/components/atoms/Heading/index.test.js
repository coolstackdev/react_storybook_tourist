import 'jest-styled-components'
import styled from 'styled-components'
import Heading from '.'

const wrap = (props = {}) => shallow(<Heading {...props} />).dive()
describe('Button', () => {
  it('should render correctly with no props', () => {
    const component = shallow(<Heading />)
    expect(component).toMatchSnapshot()
  });
})


// it('renders children when passed in', () => {
//   const wrapper = wrap({ children: 'test' })
//   console.warn("wrapper", wrapper)
//   expect(wrapper.contains('test')).toBe(true)
// })

// it('renders props when passed in', () => {
//   const wrapper = wrap({ id: 'foo' })
//   expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
// })

// it('renders h1 by default', () => {
//   const wrapper = wrap()
//   expect(wrapper.find('h1')).toHaveLength(1)
// })

// it('renders hLevel when level is passed in', () => {
//   const wrapper = wrap({ level: 2 })
//   expect(wrapper.find('h2')).toHaveLength(1)
// })
