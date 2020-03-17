import React from 'react'
import T from 'prop-types'
import styled from 'styled-components'

import { Tag } from 'components'

const Wrapper = styled.div`
  display: inline-block;
`

const StyledTag = styled(Tag)`
  margin-left: 0.3em;
  margin-right: 0.3em;
`

const TagWrapper = ({ tags, populateInputField, ...props }) =>
  <Wrapper>
    {tags.map(tag => {
      return (
        <StyledTag key={tag.id} onClick={() => populateInputField(tag.id, tag.name)} {...props} >
          {tag.name}
        </StyledTag>
      )
    })}
  </Wrapper>

TagWrapper.propTypes = {
  tags: T.arrayOf(T.object),
  onClick: T.func
}

export default TagWrapper
