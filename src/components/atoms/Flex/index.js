import T from 'prop-types'
import styled from 'styled-components'
import { ifProp, prop } from 'styled-tools'

const Flex = styled.div`
  display: flex;
  flex-direction: ${ifProp('column', 'column', 'row')};
  justify-content: ${prop('justifyContent')};
  align-items: ${prop('alignItems')};
  flex-wrap: ${ifProp('wrap', 'wrap')};
`

Flex.propTypes = {
  column: T.string,
  flexDirection: T.string,
  justifyContent: T.string,
  alignItems: T.string,
}

Flex.defaultProps = {
  palette: 'grayscale',
  alignItems: 'center',
  // end: false
}

export default Flex
