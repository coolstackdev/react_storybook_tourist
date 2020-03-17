import React from 'react'
import T from 'prop-types'
import styled, { css } from 'styled-components'
import { ifProp } from 'styled-tools'
import { font, palette } from 'styled-theme'
import NavLink from 'react-router-dom/NavLink'

const styles = css`
  font-family: ${font('primary')};
  text-decoration: none;
  font-weight: 500;
  color: ${palette({ grayscale: 0 }, 1)};
  cursor: pointer;

  &:hover {
    text-decoration: ${ifProp('underline', 'underline', 'none')};
    color: ${ifProp('underline', '#0056b3')};
  }
`

const StyledNavLink = styled(({
  theme, reverse, palette, ...props
}) => <NavLink {...props} />)`${styles}`

const Anchor = styled.a`${styles}`

const Link = ({
  ...props
}) => {
  const { to } = props
  if (to) {
    return <StyledNavLink {...props} />
  }
  // {to && <StyledNavLink  {...props} />}
  return <Anchor {...props} />
}

Link.propTypes = {
  palette: T.string,
  reverse: T.bool,
  to: T.string,
}

Link.defaultProps = {
  palette: 'primary',
}

export default Link
