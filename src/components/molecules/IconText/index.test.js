import IconText from '.'

const wrap = (props = {}) => shallow(<IconText icon="github" {...props} />)
describe('IconText', () => {
  it('mounts with different combination of props', () => {
    mount(<IconText icon="github">test</IconText>)
    mount(<IconText icon="github" height={30}>test</IconText>)
    mount(<IconText icon="github" right>test</IconText>)
    mount(<IconText icon="github" responsive>test</IconText>)
    mount(<IconText icon="github" right responsive>test</IconText>)
    mount(<IconText icon="github" />)
    mount(<IconText icon="github" right />)
    mount(<IconText icon="github" responsive />)
    mount(<IconText icon="github" right responsive />)
  })

  it('renders children when passed in', () => {
    const wrapper = wrap({ children: 'test' })
    expect(wrapper.contains('test')).toBe(true)
  })

  it('renders props when passed in', () => {
    const wrapper = wrap({ id: 'foo' })
    expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
  })

  it('renders icon on left by default', () => {
    const wrapper = wrap({ children: 'test' })
    expect(wrapper.children().at(0).prop('icon')).toBe('github')
  })
})
