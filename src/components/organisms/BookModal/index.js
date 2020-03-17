import React from 'react'
import T from 'prop-types'
import styled from 'styled-components'

import {
  BookCard
} from 'components'
import { Modal } from 'containers'

const StyledModal = styled(Modal)`
  &__overlay {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: rgba(255, 255, 255, 0.75);
  }

  &__content {
    position: absolute;
    top: 40px;
    left: 40px;
    right: 40px;
    bottom: 40px;
    border: 1px solid #ccc;
    background: #fff;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    border-radius: 4px;
    outline: none;
    padding: 20px;
    background: transparent;
  }
`

const BookModal = ({
  className,
  ...props
}) => {
  const contentClassName = `${className}__content`.split(' ')[1]
  const overlayClassName = `${className}__overlay`.split(' ')[1]
  // console.log('contentClassName: ', contentClassName);
  // console.log('overlayClassName : ', overlayClassName );

  return (
    <StyledModal
      name="book"
      bookCard
      // portalClassName={className}
      className={contentClassName}
      // overlayClassName={overlayClassName}
      {...props}
    >
      <BookCard {...props} />
    </StyledModal>
  )
}

BookModal.propTypes = {
  // name: T.string.isRequired,
}

BookModal.defaultProps = {
  modalClassName: 'modalClassName',
}


export default BookModal
