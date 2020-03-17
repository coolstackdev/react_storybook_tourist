import React, { useState, useEffect } from 'react'
import T from 'prop-types'
import styled from 'styled-components'
import { ifProp, palette } from 'styled-tools'
import { useWait } from 'react-wait'
import {
  IconButton,
  ReduxField,
  HorizontalRule,
  Icon,
  ErrorMessage,
  Paragraph,
  Field,
  Spinner,
  Button,
} from 'components'
import { Modal } from 'containers'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.2rem 1.6rem;

  > * {
    margin-bottom: 0.5rem;
  }
`

const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
  padding: 0;
  /* max-height: ${ifProp('emailHidden', '0', '298px')}; */
  max-height: ${ifProp('emailHidden', '0')};
  overflow-y: hidden;
	transition-property: all;
	transition-duration: .8s;
	transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
`

const MoreOptionsButton = styled(Paragraph)`
  border: 1px solid ${palette('grayscale', 5)};
  user-select: none;
  padding: 0.6em;
  border-radius: 0.7em;
`

const IconField = styled.div`
  display: flex;
  align-items: center;
`

const ButtonWrapper = styled.div`
  text-align: center;
`

const EmailWrapper = styled(Field)`
  width: 93%;
`

const FullNameWrapper = styled(Field)`
  width: 93%;
`

const FacebookButton = styled(IconButton)`
  background-color: #3b5998;
`

const SignInButton = styled(Button)`
  background: ${palette('tertiary', 1)};
`

const SignInTypeSwitch = styled(Paragraph)`
  color: ${palette('tertiary', 0)};
  text-decoration: underline;
  text-align: center;
  cursor: pointer;
`

const SignInModal = ({
  user,
  onFacebookLogin,
  onGoogleLogin,
  onClose,
  handleSubmit,
  handleChange,
  signInType,
  setSignInType,
  ...props
}) => {
  const [passwordType, setPasswordType] = useState('password')
  const [emailHidden, setEmailHidden] = useState(true)
  const { Wait, isWaiting } = useWait()

  useEffect(() => {
    onClose()
  }, [user])

  const handleEyeClick = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password')
  }

  const handleClickMoreOptions = () => {
    setEmailHidden(!emailHidden)
  }

  const changeSigninType = () => {
    setSignInType(signInType === 'login' ? 'register' : 'login')
  }

  return (
    <Modal title={signInType === 'login' ? "Login" : "Register"} name="signin" closeable {...props}>
      <Wrapper>
        <FacebookButton onClick={onFacebookLogin} icon="fb-logo">Connect with Facebook</FacebookButton>
        <HorizontalRule />

          {emailHidden &&
            <MoreOptionsButton onClick={handleClickMoreOptions} center="true" level={4}>
              {emailHidden ? "More options" : "Less options"}
            </MoreOptionsButton>
          }

          <Form onSubmit={handleSubmit} emailHidden={emailHidden} method="post">
            {signInType === 'register' && <FullNameWrapper name="fullName" label="Full Name" onChange={handleChange} component={ReduxField} />}
            <EmailWrapper label="Email" name="email" type="email" onChange={handleChange} component={ReduxField} />
            <IconField>
              <Field name="password" onChange={handleChange} label="Password" type={passwordType} component={ReduxField} />
              <Icon onClick={handleEyeClick} icon={passwordType === 'password' ? 'eye' : 'eye-slash'} />
            </IconField>

            <ErrorMessage>{props.error}</ErrorMessage>

            <ButtonWrapper>
              <SignInButton type="submit" disabled={isWaiting("SignIn")} icon="shield">
                <Wait on="SignIn" fallback={<Spinner />}>
                  {signInType === 'login' ? 'Log in' : 'Register'}
                </Wait>
              </SignInButton>
            </ButtonWrapper>
          </Form>

          <SignInTypeSwitch onClick={changeSigninType}>
            {signInType === 'login' ? 'No account? Register now!' : 'Already have an account? Log in'}
          </SignInTypeSwitch>

      </Wrapper>
    </Modal>
  )
}

SignInModal.propTypes = {
  user: T.object,
  onFacebookLogin: T.func.isRequired,
  onGoogleLogin: T.func.isRequired,
  onClose: T.func.isRequired,
  handleSubmit: T.func.isRequired
}

SignInModal.defaultProps = {
}

export default SignInModal
