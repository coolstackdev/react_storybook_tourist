import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { IconButton } from 'components'
import { SignInModal, SignUpModal } from 'containers'
import { palette } from 'styled-tools'

const Wrapper = styled.div``

const InnerButton = styled.div`
  display: flex;
  align-items: center;
`

const Image = styled.img`
  margin-right: 0.5rem;
`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
`

const StyledSigninButton = styled(IconButton)`
  background-color: transparent;
  color: ${palette('grayscale', 2)};
  font-weight: normal;
  padding: 0;
  font-size: 12px;  
  margin: 0;

  &:hover {
    color: ${palette('grayscale', 1)};
    box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.15);
    background-color: initial;
  }

  @media screen and (min-width: 800px) {
    font-size: 16px;
    margin: 0 5px;
  }
`

const StyledSignUpButton = styled(IconButton)`
  background-color: transparent;
  border: 1px solid #65D1B5;
  border-radius: 20px;
  color: #65D1B5;
  font-weight: normal;
  padding: 0;
  font-size: 12px;
  margin: 0;

  &:hover {
    color: ${palette('grayscale', 1)};
    box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.15);
    background-color: initial;
  }

  @media screen and (min-width: 800px) {
    padding: 0 15px;
    font-size: 16px;
    margin: 0 5px;
  }
`

const UserButton = ({
  user,
  onLogin,
  onRegister,
  onLogout,
  ...props
}) => {
  return (
    <Wrapper>
      {user &&
        <StyledSigninButton icon="login" {...props} onClick={onLogout}>
          <InnerButton>
            {user.picture &&
              <Image src={user.picture} width={20} height={20} />
            }
            Sign out
          </InnerButton>
        </StyledSigninButton>
      }
      {!user && 
        <StyledDiv>
          <StyledSigninButton icon="login" {...props} onClick={onLogin}>Log in</StyledSigninButton>
          <StyledSignUpButton icon="signup" {...props} onClick={onRegister}>Sign Up</StyledSignUpButton>
        </StyledDiv>
      }
      <SignInModal />
      <SignUpModal />
    </Wrapper>
  )
}

UserButton.propTypes = {
  user: PropTypes.shape({
    picture: PropTypes.string,
  }),
  onLogin: PropTypes.func.isRequired,
  onRegister: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
}

export default UserButton
