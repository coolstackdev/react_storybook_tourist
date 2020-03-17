import T from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'

const PaginationDot = styled.div`
  background-color: ${ifProp('opaque', palette(0, true), palette(1))};
  color: ${palette({ grayscale: 0 }, 1)};
  height: 2em;
  width: 2em;
  border-radius: 50%;
`

PaginationDot.propTypes = {
  palette: T.string,
  reverse: T.bool,
  opaque: T.bool,
}

PaginationDot.defaultProps = {
  palette: 'primary',
}

export default PaginationDot
