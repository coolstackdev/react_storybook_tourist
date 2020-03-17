// https://github.com/diegohaz/arc/wiki/Example-components#icon
import React from 'react'
import { shallow } from 'enzyme'
import Search from '.'

const wrap = (props = {}) => shallow(<Search icon="github" {...props} />).dive()
describe('Search', () => {
  it('renders with different combination of props', () => {
    wrap({ height: 40 })
  })

  it('renders props when passed in', () => {
    const wrapper = wrap({ id: 'foo' })
    expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
  })

})
