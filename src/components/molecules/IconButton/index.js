import React from 'react'
import T from 'prop-types'
import styled, { css, keyframes } from 'styled-components'
import { ifProp, ifNotProp, prop } from 'styled-tools'

import { Icon, Button } from 'components'

const fadeIn = keyframes`
  0% { display: none; opacity: 0; }
  1% { display: block; opacity: 0; }
  100% { display: block; opacity: 1; }
`

const StyledButton = styled(Button)`
  /* max-width: ${props => props.hasText && !props.collapsed ? '100%' : '2.5em'}; */
  max-width: ${ifProp('hasText') && ifNotProp('collapsed') ? '100%' : '2.5em'};
  width: ${ifProp('hasText', 'auto', '2.5em')};
  padding: ${ifProp('hasText', '0 0.4375em', 0)};
  flex: 0 0 2.5em;
  box-sizing: border-box;
  ${ifProp('collapsed', css`
    overflow: hidden;
    transition: max-width 250ms ease-in-out;
    will-change: max-width;
    & .text {
      display: none;
    }
    &:hover {
      max-width: 100%;
      & .text {
        display: block;
        animation: ${fadeIn} 250ms;
      }
    }
  `)}
  ${ifProp('responsive', css`
    @media screen and (max-width: ${prop('breakpoint')}px) {
      width: auto;
      flex: 0 !important;
    }
  `)}
`

const Text = styled.span`
  padding: 0.4375em;
  @media screen and (max-width: ${prop('breakpoint')}px) {
    display: ${ifProp('responsive', 'none !important')};
  }
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const StyledIcon = styled(Icon)`
  flex: none;
  border: none !important;
`

const IconButton = ({
  icon,
  children,
  ...props
}) => {
  const {
    breakpoint,
    right,
    responsive,
    height,
  } = props
  const iconElement = <StyledIcon height={height ? height / 2.5 : undefined} icon={icon} {...props} />
  return (
    <StyledButton hasText={!!children} {...props}>
      <Wrapper>
        {right || iconElement}
        {children
          && <Text className="text" responsive={responsive} breakpoint={breakpoint}>{children}</Text>
        }
        {right && iconElement}
      </Wrapper>
    </StyledButton>
  )
}

IconButton.propTypes = {
  icon: T.string.isRequired,
  responsive: T.bool,
  breakpoint: T.number,
  collapsed: T.bool,
  right: T.bool,
  height: T.number,
  children: T.node,
}

IconButton.defaultProps = {
  breakpoint: 420,
}

export default IconButton
