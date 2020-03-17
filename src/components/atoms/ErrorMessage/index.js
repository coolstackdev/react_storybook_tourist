import T from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifNotProp } from 'styled-tools'

const ErrorMessage = styled.p`
  font-family: ${font('primary')};
  color: ${palette('danger', 0)};
  font-size: 1rem;
  text-align: center;
  max-width: 70%;
  margin: 1rem auto 0;
  display: ${ifNotProp('children', 'none')};
`

ErrorMessage.propTypes = {
  reverse: T.bool,
}

export default ErrorMessage
