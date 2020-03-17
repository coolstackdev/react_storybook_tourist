import React from 'react'
import T from 'prop-types'
import styled from 'styled-components'

import { Heading, Paragraph } from 'components'

const Article = styled.article``

const Post = ({
  title,
  body,
  ...props
}) =>
  <Article {...props}>
    <Heading level={2}>{title}</Heading>
    <Paragraph>{body}</Paragraph>
  </Article>

Post.propTypes = {
  title: T.string.isRequired,
  body: T.string.isRequired,
}

export default Post
