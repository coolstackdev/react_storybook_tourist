import T from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp, ifNotProp } from 'styled-tools'

const Card = styled.div`
  position: relative;
	display: block;
	margin: 0 auto;
  font-family: ${font('primary')};
	/* max-width: 500px; */
  color: ${palette({ grayscale: 0 }, 1)};
  background-color: ${ifProp('opaque', palette(0, true), 'transparent')};
	box-shadow: ${ifNotProp('flat', '0 6px 16px 0 rgba(0,0,0,.15)')};
	transition: box-shadow .13s ease-in;
  border-radius: 28px;
	&:hover {
		box-shadow: ${ifProp('hover', '0 8px 16px 0 rgba(0,0,0,.25)')};
  }
`

Card.propTypes = {
  palette: T.string,
  reverse: T.bool,
  opaque: T.bool,
  hover: T.bool,
  flat: T.bool
}

Card.defaultProps = {
  palette: 'grayscale',
}

export default Card
