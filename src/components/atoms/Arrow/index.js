import React from 'react'

import T from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'

import Icon from '../Icon'

const ArrowWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: ${(props => props.direction === "right" && "25px")};
  left: ${(props => props.direction === "left" && "25px")};
  z-index: 10;
  color: ${palette('primary', 0)};
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: 50%;
  cursor: pointer;
  transition: transform ease-in .1s;

  &::before {
    color: ${palette('grayscale', 2)};;
  }
`

const StyledIcon = styled(Icon)`
  color: ${palette('grayscale', 7)} !important;
  font-size: 3em;
`

const Arrow = ({ direction, switchSlide, ...props }) => {
  return (
    <ArrowWrapper onClick={switchSlide} direction={direction}>
      <StyledIcon icon={direction === 'left' ? 'backwards' : 'forwards'} />
      {/* <FontAwesomeIcon``
        icon={direction === "left" ? faAngleLeft : faAngleRight}
        color="#fff"
        // color={palette('grayscale', 7)}
        size="4x"
      /> */}
    </ArrowWrapper>

  )
}

export default Arrow
