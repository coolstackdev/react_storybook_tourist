import T from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'

const Block = styled.div`
  font-family: ${font('primary')};
  background-color: ${ifProp('opaque', palette(0, true), 'transparent')};
  color: ${palette({ grayscale: 0 }, 1)};
`

Block.propTypes = {
  palette: T.string,
  reverse: T.bool,
  opaque: T.bool,
}

Block.defaultProps = {
  palette: 'grayscale',
}

export default Block
