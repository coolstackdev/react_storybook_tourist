import React from 'react'
import T from 'prop-types'
import styled from 'styled-components'
import { ifProp, ifNotProp, palette, prop } from 'styled-tools'
import { font } from 'styled-theme'
import { Icon } from 'components'

const Wrapper = styled.div`
  position: ${ifProp('categories', 'relative')};
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  padding: .5em;
  background-color: ${ifProp('selected', prop('backgroundColor'), palette('grayscale', 8))};
  border: 1.5px solid ${palette('grayscale', 6)};
  font-family: ${font('primary')};
  box-shadow: ${ifProp('selected', '-1px 1px 7px 0 rgba(0,0,0,.35), 0 -4px 14px 0 rgba(0,0,0,.35)', 'none')};
  border-radius: 1.7em;
  cursor: pointer;
  user-select: none;
  height: 3.3em;
  transition: all 0.2s ease-in-out;
`

const Text = styled.span`
  color: ${palette('secondary', 0)};
  padding-left: ${ifProp('categories', '2.5em')};
`

const SubText = styled.span`
  color: ${palette('tertiary', 1)};
`

const StyledIcon = styled(Icon)`
  position: ${ifProp('categories', 'absolute')};
  font-size: 2.5em;
`

const Selection = ({
  name,
  // selected,
  icon,
  size,
  subtext,
  // backgroundColor,
  ...props
}) => {

  return (
    <Wrapper {...props}>
      {icon && <StyledIcon icon={icon} {...props} />}
      <Text selected={props.selected} {...props}>
        {name}
      </Text>
      {subtext && <SubText>{subtext}</SubText>}
    </Wrapper>
  )
}

Selection.propTypes = {
  name: T.string.isRequired,
  icon: T.string,
  selected: T.bool,
}

Selection.defaultProps = {
  selected: false,
}

export default Selection
