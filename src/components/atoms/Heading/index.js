import React from 'react'
import T from 'prop-types'
import styled, { css } from 'styled-components'
import { font } from 'styled-theme'
import { palette } from 'styled-tools'

const fontSize = ({ level }) => `${0.75 + (1 * (1 / level))}rem`

const styles = css`
  font-family: ${font('primary')};
  font-weight: ${props => !!props.bold ? 700 : 500};
  font-size: ${fontSize};
  text-align: ${props => !!props.center ? 'center' : 'initial'};
  margin: 0;
  margin-top: 0.85714em;
  margin-bottom: 0.57142em;
  color: ${palette({ secondary: 3 }, 1)};
`

const Heading = styled(({
  level, children, reverse, palette, theme, ...props
}) => React.createElement(`h${level}`, props, children))`${styles}`

Heading.propTypes = {
  level: T.number,
  children: T.node,
  palette: T.string,
  reverse: T.bool,
  bold: T.string,
  center: T.string,
}

Heading.defaultProps = {
  level: 1,
  palette: 'grayscale',
}

export default Heading