import React from 'react'
import { shallow } from 'enzyme'
import CategoryButton from '.'

const onLogin = jest.fn()
const onLogout = jest.fn()

const wrap = (props = {}) => shallow(<CategoryButton {...{ onLogin, onLogout }} {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('renders user picture when passed in', () => {
  const wrapper = wrap({ user: { picture: 'test.jpg' } })
  expect(wrapper.find({ src: 'test.jpg' })).toHaveLength(1)
})
