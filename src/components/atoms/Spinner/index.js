import T from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { palette } from 'styled-theme'

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const dimension = "2.5em"

const Spinner = styled.div`
  position: relative;
  animation: ${spin} 1s linear infinite;
  border: 0.2em solid ${palette('grayscale', 1, true)};
  border-bottom-color: ${palette(1)};
  border-radius: 50%;
  margin: 0 auto;
  width: ${dimension};
  height: ${dimension};
  /* margin-top: 10em; */
`

Spinner.propTypes = {
  palette: T.string,
  reverse: T.bool,
}

Spinner.defaultProps = {
  palette: 'primary',
}

export default Spinner
