import T from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Tag = styled.button`
  font-family: ${font('primary')};
  font-size: 1.15rem;
  line-height: 1.5em;
  padding: 0.3em 1.1em;
  color: ${palette(1)};
  background-color: ${palette('grayscale', 6)};
  border-radius: 1.2em;
  border: none;
`

Tag.propTypes = {
  palette: T.string,
  reverse: T.bool,
}

Tag.defaultProps = {
  palette: 'primary',
}

export default Tag
