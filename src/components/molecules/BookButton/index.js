import React from 'react'
import T from 'prop-types'
import styled from 'styled-components'

import { Button } from 'components'
import { BookModal } from 'containers'

const Wrapper = styled.div``
const StyledButton = styled(Button)`
  height: 3.5em;
  width: 100%;
  margin: 0 auto;
`

const WrapperButton = styled.div`
  position: sticky;
  bottom: 0;
  z-index: 2;
  margin-top: 2em;
  text-align: center;
`

const BookButton = ({
  onOpen,
  onClose,
  ...props
}) => {
  return (
    // <Wrapper>
    <>
      <WrapperButton>
        <StyledButton onClick={onOpen} {...props}>
          Book Now
        </StyledButton>
      </WrapperButton>
      <BookModal {...props} />
    </>
    // </Wrapper>
  )
}

BookButton.propTypes = {
}

export default BookButton
