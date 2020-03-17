// https://github.com/diegohaz/arc/wiki/Example-components#icon
import React from 'react'
import T from 'prop-types'
import styled from 'styled-components'
import { ifProp, palette } from 'styled-tools'

// const fontSize = ({ width, height }) => {
//   const size = width || height
//   return size ? `${size / 16}rem` : '1.25em'
// }

const fontSize = ({ size }) => {
  return size ? `${size / 16}rem` : '1.25em'
}

const Wrapper = styled.span`
  display: inline-block;
  font-size: ${fontSize};
  color: ${ifProp('palette', palette({ grayscale: 0 }, 1), 'currentcolor')};
  width: 1em;
  height: 1em;
  margin: 0.1em;
  box-sizing: border-box;

  & > svg {
    display: block;
    width: 100%;
    height: 100%;
    fill: currentcolor;
    stroke: currentcolor;
  }

  &:hover {
    cursor: ${ifProp('onClick', 'pointer')}
  }
`

const StyledImage = styled.img`
  height: 70%;
  width: 70%;
  fill: currentcolor;
  stroke: currentcolor;
  user-drag: none;
`

const Icon = ({
  icon,
  direct,
  className,
  ...props
}) => {
  const svg = require(`!raw-loader!./icons/${icon}.svg`)

  if (direct) {
    return (
      <StyledImage src={require(`./icons/${icon}.svg`)} alt={icon}/>
    )
  }

  return <Wrapper className={className} {...props} dangerouslySetInnerHTML={{ __html: svg }} />
}

Icon.propTypes = {
  icon: T.string.isRequired,
  width: T.number,
  height: T.number,
  palette: T.string,
  reverse: T.bool,
}

export default Icon
