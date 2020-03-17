import T from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'

const Paragraph = styled.p`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
  font-size: 1rem;
  line-height: 1.3;
  margin: 1rem 0 0;
  text-align: ${ifProp('center', 'center')};
  text-align: ${ifProp('left', 'left')};
`

Paragraph.propTypes = {
  reverse: T.bool,
  center: T.string,
}

export default Paragraph
