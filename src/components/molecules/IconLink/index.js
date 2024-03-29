import React from 'react'
import T from 'prop-types'
import styled from 'styled-components'

import { Icon, Link } from 'components'

const fontSize = ({ height }) => height ? `${height / 3 / 16}rem` : '0.75em'

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
  @media screen and (max-width: 420px) {
    display: ${({ responsive }) => responsive && 'none'};
  }
`

const IconLink = ({
  height, icon, right, responsive, children, ...props
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
    />
  )
  return (
    <Link {...props}>
      {right || iconElement}
      <Text responsive={responsive}>{children}</Text>
      {right && iconElement}
    </Link>
  )
}

IconLink.propTypes = {
  icon: T.string.isRequired,
  height: T.number,
  palette: T.string,
  reverse: T.bool,
  responsive: T.bool,
  right: T.bool,
  children: T.node,
}

export default IconLink
