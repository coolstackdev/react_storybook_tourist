import React from 'react'
import T from 'prop-types'
import styled from 'styled-components'

import { Icon } from 'components'

const fontSize = ({ height }) => height ? `${height / 3 / 16}rem` : '0.75em'
const textSize = ({ textFontSize }) => textFontSize ? `${textFontSize}px` : '20px'
const marginTop = ({ top }) => top ? `${top}px` : '0'

const margin = ({ hasText, right }) => {
  if (hasText) {
    return right ? '0 0 0 0.25em' : '0 0.25em 0 0'
  }
  return 0
}

const StyledIcon = styled(Icon)`
  font-size: ${fontSize};
  margin: ${margin};
  @media screen and (max-width: 420px) {
    margin: ${({ responsive }) => responsive && 0};
  }
`

const Text = styled.span`  
  font-size: ${textSize};
  @media screen and (max-width: 420px) {
    display: ${({ responsive }) => responsive && 'none'};
  }
`

const Wrapper = styled.div`
  margin-top: ${marginTop};
`

const IconText = ({
  height,
  icon,
  right,
  responsive,
  children,
  textFontSize,
  top,
  ...props
}) => {
  const { palette, reverse } = props
  const iconElement = (
    <StyledIcon
      height={height}
      icon={icon}
      hasText={!!children}
      right={right}
      responsive={responsive}
      palette={palette}
      reverse={reverse}
      {...props}
    />
  )
  return (
    <Wrapper  top={top} {...props}>
      {right || iconElement}
      <Text textFontSize={textFontSize} responsive={responsive}>{children}</Text>
      {right && iconElement}
    </Wrapper>
  )
}

IconText.propTypes = {
  icon: T.string.isRequired,
  height: T.number,
  palette: T.string,
  reverse: T.bool,
  responsive: T.bool,
  right: T.bool,
  children: T.node,
}

export default IconText
