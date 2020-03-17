import React from 'react'
import T from 'prop-types'
import styled, { css } from 'styled-components'
import Link from 'react-router-dom/Link'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'

const fontSize = ({ height }) => `${height / 40}rem`

const backgroundColor = ({ transparent, disabled }) => transparent ? 'transparent' : palette(disabled ? 2 : 1)
const backgroundGradient = ({ gradient }) => gradient && `linear-gradient(${palette(1)}, ${palette(2)}, ${palette(3)})`

const foregroundColor = ({ transparent, disabled }) => transparent ? palette(disabled ? 2 : 1) : palette('grayscale', 0, true)

const hoverBackgroundColor = ({ disabled, transparent }) => !disabled && !transparent && palette(0)
const hoverForegroundColor = ({ disabled, transparent }) => !disabled && transparent && palette(0)

const styles = css`
  display: inline-flex;
  font-family: ${font('primary')};
  font-weight: bold;
  align-items: center;
  white-space: nowrap;
  font-size: ${fontSize};
  border: 0.0625em solid ${ifProp('transparent', 'red', 'transparent')};
  height: 2.5em;
  justify-content: center;
  text-decoration: none;
  cursor: ${ifProp('disabled', 'default', 'pointer')};
  appearance: none;
  padding: 0 1em;
  border-radius: ${ifProp('circle', '50%', '0.7em')};
  box-sizing: border-box;
  pointer-events: ${ifProp('disabled', 'none', 'auto')};
  transition: background-color 250ms ease-out, color 250ms ease-out, border-color 250ms ease-out;
  background: ${ifProp('gradient', backgroundGradient, backgroundColor)};
  color: ${foregroundColor};
  text-decoration: none !important;

  &:hover, &:active {
    /* background-color: ${hoverBackgroundColor}; */
    color: ${palette('grayscale', 7)};
    box-shadow: inset 0 -6px 13px 0 rgba(0,0,0,0.2), inset 0 6px 13px 0 rgba(0,0,0,0.2), 0 0 10px 0 rgba(0,0,0,0.2);
    transition: box-shadow ease-in-out .2s
  }

  &:focus {
    outline: none
  }

  & > * {
    pointer-events: none;
  }
`

const StyledLink = styled(({
  disabled,
  transparent,
  reverse,
  palette,
  height,
  theme,
  circle,
  ...props
}) => <Link {...props} />)`
${styles}
`

const Anchor = styled.a`${styles}`
const StyledButton = styled.button`${styles}`

const Button = ({ type, ...props }) => {
	const { to, href } = props
	if (to) {
		return <StyledLink {...props} />
	} if (href) {
		return <Anchor {...props} />
	}
	return <StyledButton {...props} type={type} />
}

Button.T = {
	disabled: T.bool,
	palette: T.string,
  transparent: T.bool,
  gradient: T.bool,
  reverse: T.bool,
  circle: T.bool,
	height: T.number,
	type: T.string,
	to: T.string,
	href: T.string,
}

Button.defaultProps = {
	palette: 'primary',
	type: 'button',
	height: 40,
}

export default Button
