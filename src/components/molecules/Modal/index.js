import React from 'react'
import T from 'prop-types'
import styled, { css, createGlobalStyle } from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'
import ReactModal from 'react-modal'
import './styles.scss'

import { Heading, IconButton } from 'components'

// ! remember that injectGlobal is deprecated. need to migrate to the new way
const GlobalStyle = createGlobalStyle`
  body.ReactModal__Body--open {
    overflow: hidden;
  }
`
// injectGlobal`
//   body.ReactModal__Body--open {
//     overflow: hidden;
//   }
// `

const overlayStyles = css`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 9999;
  transition: opacity 250ms ease-in-out;
  opacity: 0;
  &[class*="after-open"] {
    opacity: 1;
  }
  &[class*="before-close"] {
    opacity: 0;
  }
`

const ModalBox = styled(ReactModal)`
  position: absolute;
  display: flex;
  flex-direction: column;
  font-family: ${font('primary')};
  font-size: 1rem;
  background-color: ${palette('grayscale', 0, true)};
  border-radius: 0.4em;
  color: ${palette('grayscale', 0)};
  top: calc(50% - 1rem);
  left: calc(50% - 1rem);
  right: auto;
  bottom: auto;
  margin: 1rem calc(-50% + 1rem) 1rem 1rem;
  transform: translate(-50%, 100%);
  transition: transform 250ms ease-in-out;
  outline: none;
  box-sizing: border-box;
  min-width: 320px;
  max-width: calc(640px - 1rem);
  max-height: calc(100% - 1rem);
  padding-top: ${({ hasHeader }) => hasHeader ? 0 : '1rem'};
  @media screen and (max-width: 640px) {
    /* width: calc(100% - 1rem); */
    min-width: 0;
  }
  &[class*="after-open"] {
    transform: translate(-50%, -50%);
    padding-top: ${ifProp('bookCard', 0)};
  }
  &[class*="before-close"] {
    transform: translate(-50%, 100%);
  }
`

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: ${palette('grayscale', 5)};
  border-top-left-radius: 0.4em;
  border-top-right-radius: 0.4em;

  > *:first-child {
    flex: 1;
    color: ${palette('secondary', 1)};
  }
`

const StyledHeading = styled(Heading)`
  margin: 0 1rem 0 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

const CloseButton = styled(IconButton)`
  background-color: transparent;
`

const Content = styled.div`
  /* overflow: auto; */
  overflow: visible;
  padding: ${ifProp('bookCard', '0', '0 1rem')};
  margin-bottom: ${ifProp('bookCard', '0', '1rem')};
  /* background: ${ifProp('bookCard', 'transparent')}; */
  background: transparent;

  & header {
    padding: 0;
  }
`

const StyledReactModal = styled(({ className, ...props }) => (
  <ModalBox overlayClassName={className} closeTimeoutMS={250} {...props} />
))`${overlayStyles}`

const Modal = ({
  children,
  title,
  closeable,
  onClose,
  bookCard,
  ...props
}) => {
  const { reverse } = props
  const hasHeader = title || closeable
  return (
    <StyledReactModal
      contentLabel={title || 'Modal'}
      onRequestClose={onClose}
      hasHeader={hasHeader}
      shouldCloseOnOverlayClick
      ariaHideApp={false} //todo: do this properly. see browser console error when it is removed
      {...props}
    >
      {hasHeader && (
        <Header>
          <StyledHeading level={2} reverse={reverse}>{title}</StyledHeading>
          {closeable && <CloseButton icon="close" onClick={onClose} reverse />}
        </Header>
      )}
      <Content bookCard={bookCard ? bookCard : undefined}>
        {children}
      </Content>
    </StyledReactModal>
  )
}

Modal.propTypes = {
  children: T.node,
  title: T.string,
  closeable: T.bool,
  reverse: T.bool,
  onClose: T.func.isRequired,
  bookCard: T.bool
}

export default Modal
