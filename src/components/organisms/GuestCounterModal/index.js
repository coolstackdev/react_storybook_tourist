import React, { useState, useEffect } from 'react'
import T from 'prop-types'
import styled from 'styled-components'
import { ifProp, palette } from 'styled-tools'
import {
  GuestCounter,
  Button
} from 'components'
import { Modal } from 'containers'

const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 2em;
`

const StyledButton = styled(Button)`
  background-color: ${palette('tertiary', 1)};
`

const GuestCounterModal = ({
  onClose,
  ...props
}) => {

  return (
    <Modal title="How many guests?" name="guestCounter" closeable className="ignore-react-onclickoutside" {...props}>
      <GuestCounter />
      <ButtonWrapper>
        <StyledButton onClick={onClose}>Submit</StyledButton>
      </ButtonWrapper>
    </Modal>
  )
}

GuestCounterModal.propTypes = {
}

GuestCounterModal.defaultProps = {
}

export default GuestCounterModal
