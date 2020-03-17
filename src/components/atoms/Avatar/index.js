import React from 'react'
import T from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div``

const Image = styled.img`
  border-radius: 50%;
  object-fit: cover;
  width: 4rem;
  height: 4rem;
  display: inline-block;
  position: relative;
  z-index: 1;
  user-select: none;
`

const Avatar = ({ avatarUrl, className }) => {
  return (
    <Wrapper className={className}>
      <Image src={avatarUrl} />
    </Wrapper>
  )
}

Avatar.propTypes = {
  avatarUrl: T.string,
}

export default Avatar
