import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { IconButton } from 'components'
import { SignInModal } from 'containers'

const Wrapper = styled.div``

const InnerButton = styled.div`
  display: flex;
  align-items: center;
`

const Image = styled.img`
  margin-right: 0.5rem;
`

const UserButton = ({
  user,
  onLogin,
  onLogout,
  ...props
}) => {
  return (
    <Wrapper>
      {user &&
        <IconButton {...props} onClick={onLogout}>
          <InnerButton>
            {user.picture &&
              <Image src={user.picture} width={20} height={20} />
            }
            Sign out
          </InnerButton>
        </IconButton>
      }
      {!user && <IconButton {...props} onClick={onLogin}>Sign in</IconButton>}
      <SignInModal />
    </Wrapper>
  )
}

UserButton.propTypes = {
  user: PropTypes.shape({
    picture: PropTypes.string,
  }),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
}

export default UserButton
