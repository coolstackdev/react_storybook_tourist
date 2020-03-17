import React from 'react'
import T from 'prop-types'
import styled from 'styled-components'
import { prop } from 'styled-tools'
import { font, palette } from 'styled-theme'
import { List } from 'components'

const StyledList = styled(List)`
  list-style: none;
  ${prop('styles')};
  columns: 2;
  padding: 0;

  & > li {
    margin-left: 1em;
    margin-bottom: 0.2em;

    &:before {
      content: "• ";
      color: ${palette('secondary', 0)};
      margin-right: 0.4em;
    }
  }
`

const HighlightsList = ({ ...props }) => {
  return (
    <StyledList {...props}>
      {props.list.map((listItem, i)=> <li key={i}>{listItem}</li>)}
    </StyledList>
  )
}

HighlightsList.propTypes = {
  palette: T.string,
  reverse: T.bool,
}

HighlightsList.defaultProps = {
  palette: 'primary',
}

export default HighlightsList
