import React, { useState } from 'react'
import styled from 'styled-components'
import { ifProp, palette } from 'styled-tools'
import { size } from 'styled-theme'
import { Block, Link, PageButton, MenuIcon } from 'components'
import { UserButton } from 'containers'
import { useUser, useWindowSize } from 'hooks'
import { Slidedown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
import { Slide } from 'react-toastify'

const Wrapper = styled(Block)`
  display: flex;
  justify-content: left;
  padding: 0.8rem 3.4rem;
  z-index: 3;
  background-color: ${palette('grayscale', 8)};
  box-shadow: ${ifProp('topPage', '0', '0 4px 4px rgba(0,0,0,0.2)')};
  transition: box-shadow 0.2s ease-in-out;
  margin: 0;

  @media screen and (max-width: 640px) {
    padding: 0.5rem;
  }

  @media screen and (min-width: 800px) {
    justify-content: center;
  }

  & .visible {
    max-height: 224px;
    box-shadow: 0 4px 4px rgba(0,0,0,0.2);
  }
`

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${size('maxWidth')};

  @media screen and (max-width: 500px) {
    height: 60px;
  }
`

const SigninWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  flex-direction: row;

  > * {
    margin: 0.2em;
  }

  @media screen and (min-width: 800px) {
    margin-top: 5px;
  }
`

const MenuItems = styled.div`
  width: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  max-height: 0;
  overflow: hidden;
  transition: max-height .4s ease-out;
  margin-top: 68px;
  background-color: white;
  right: 0;

  & a {
    display: block;
    color: black !important;
    width: 100%;
    padding: 10px 20px;
    text-align: left;
    font-family: Avenir;
    font-weight: bold;
  }
  & a:hover {
    background-color: background-color: #f4f4f4;
  }
`

const StyledPageButton = styled(PageButton)`
  background-color: transparent;
  font-family: Avenir;
  font-size: 12px;
  font-weight: 500 !important;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: black;
  font-weight: normal;
  padding: 0;

  @media screen and (min-width: 800px) {
    margin: ${ifProp('first', '5px 0 0 45px', '5px 0 0 31px')}
    font-size: 16px;
    padding: 0 0.4375em
  }

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
  text-align: center;
`

const Header = (props) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { user } = useUser()
  let { width } = useWindowSize()
  let mobile = width < 800

  const handleClickMenuList = () => {
    document.getElementById('nav-icon2').classList.toggle("open");
    document.getElementById('menuitems').classList.toggle("visible");
    setMenuOpen(!menuOpen);
  }

  let hostPageName
  if (user) {
    hostPageName = user.hostid ? 'My Host Profile' : 'Join as Host'
  }

  return (
    <Wrapper reverse {...props}>
      <InnerWrapper>
        <ImageWrapper as="a" href="/">
          <Image src={require('../../atoms/Icon/icons/instahop-logo.png')} />
        </ImageWrapper>
        { !mobile && 
          <>
            <StyledPageButton first onClick={() => {window.open("https://phoenixcdn.azureedge.net/general/Hosts.pdf")}}>Hosts</StyledPageButton>
            <StyledPageButton onClick={() => {window.open("https://phoenixcdn.azureedge.net/general/Guests.pdf")}}>Guests</StyledPageButton>
            <StyledPageButton onClick={() => {window.open("https://phoenixcdn.azureedge.net/general/Safety.pdf")}}>Safety</StyledPageButton>
          </>
        }
        { !mobile && user &&
          <>
            <StyledPageButton to="/my-experiences">My Experiences</StyledPageButton>
            <StyledPageButton to="/Host-Profile">{hostPageName}</StyledPageButton>
          </>
        }
        <SigninWrapper>
          <UserButton/>
        </SigninWrapper>
        { mobile && <MenuIcon onClick={handleClickMenuList}/> }
      </InnerWrapper>
      { mobile &&
          <>
            <MenuItems id="menuitems">
              <StyledLink onClick={() => {window.open("https://phoenixcdn.azureedge.net/general/Hosts.pdf")}}>Hosts</StyledLink>
              <StyledLink onClick={() => {window.open("https://phoenixcdn.azureedge.net/general/Guests.pdf")}}>Guests</StyledLink>
              <StyledLink onClick={() => {window.open("https://phoenixcdn.azureedge.net/general/Safety.pdf")}}>Safety</StyledLink>
              { user && 
                <>
                  <StyledLink to="/my-experiences">My Experiences</StyledLink>
                  <StyledLink to="/Host-Profile">{hostPageName}</StyledLink>
                </>
              }
            </MenuItems>
          </>
      }
    </Wrapper>
  )
}

export default Header
