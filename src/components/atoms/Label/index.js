import T from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Label = styled.label`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 2)};
  font-size: 1rem;
  line-height: 2em;
  margin: 0;
`

Label.propTypes = {
  reverse: T.bool,
}

export default Label
