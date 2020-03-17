import React from 'react'
import T from 'prop-types'
import styled from 'styled-components'
import { ifProp, palette } from 'styled-tools'
import {
  Button,
  Categories,
} from 'components'
import { Modal } from 'containers'

const StyledButton = styled(Button)`
  background-color: ${palette('tertiary', 1)};
  float: right;
`

const Spacer = styled.div`
  margin-top: 1em;
`

const CategoryModal = ({
  onClose,
  onApply,
  ...props
}) => {
  return (
    <Modal title="What are you interested in?" name="category" closeable className="ignore-react-onclickoutside" {...props}>
      <Spacer />
      <Categories categoryModal />
      <StyledButton onClick={onClose}>Apply</StyledButton>
    </Modal>
  )
}

CategoryModal.propTypes = {
}

CategoryModal.defaultProps = {
}

export default CategoryModal
