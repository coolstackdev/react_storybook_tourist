import React from 'react'
import styled from 'styled-components'
import { ifProp, palette } from 'styled-tools'
import { size } from 'styled-theme'
import { Block, Link } from 'components'
import { UserButton } from 'containers'
import { useUser } from 'hooks'

const Wrapper = styled(Block)`
  display: flex;
  justify-content: center;
  padding: 0.8rem 3.4rem;
  z-index: 3;
  background-color: ${palette('grayscale', 8)};
  box-shadow: ${ifProp('topPage', '0', '0 4px 4px rgba(0,0,0,0.2)')};
  transition: box-shadow 0.2s ease-in-out;

  @media screen and (max-width: 640px) {
    padding: 0.5rem;
  }
`

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${size('maxWidth')};
`

const SigninWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;

  > * {
    margin: 0.2em;
  }

  @media screen and (min-width: 500px) {
    flex-direction: row;
  }
`

const StyledSigninButton = styled(UserButton)`
  background-color: transparent;
  border: 1px solid ${palette('grayscale', 5)};
  color: ${palette('grayscale', 2)};
  font-weight: normal;

  &:hover {
    color: ${palette('grayscale', 1)};
    box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.15);
    background-color: initial;
  }
`

const ImageWrapper = styled.div`
  width: 168px;
  height: 100%;
  position: relative;
`

const Image = styled.img`
  width: 100%;
  object-fit: contain;
`

const StyledLink = styled(Link)`
  margin-left: auto;
`

const Header = (props) => {
  const { user } = useUser()

  return (
    <Wrapper reverse {...props}>
      <InnerWrapper>
        <ImageWrapper as="a" href="/">
          <Image src={require('../../atoms/Icon/icons/instahop-logo.png')} />
        </ImageWrapper>
        {user &&
          <StyledLink to="/my-experiences">My Experiences</StyledLink>
        }
        <SigninWrapper>
          <StyledSigninButton icon="lock" />
        </SigninWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Header
