import React from 'react'
import { shallow } from 'enzyme'
import Map from '.'

const wrap = (props = {}) => shallow(<Map name="name" {...props} />)

it('renders input props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})