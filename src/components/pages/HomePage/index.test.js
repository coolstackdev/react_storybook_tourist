import HomePage from '.'

describe('HomePage', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<HomePage />)

  });

  it('renders', () => {
    shallow(<HomePage />)
  })

  describe('user clicks on a city tag', () => {
    let tagText
    beforeEach(() => {
      // const tag = wrapper.find('StyledTag').first()
      const tag = wrapper.find('TagWrapper').children().first()

      console.log(tag);
      // tagText = tag.render().text()
      // tag.simulate('click')
    });

    it('and Input should populate with the text from the city tag', () => {
      const input = wrapper.find('Input(Styled)').first()
      // expect(
      //   input.props().value
      // ).toBe(tagText)
    });
  });
});
