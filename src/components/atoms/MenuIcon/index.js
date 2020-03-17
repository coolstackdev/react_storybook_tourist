import React from 'react'

import styled from 'styled-components'

const Wrapper = styled.div`
  margin-left: 20px;
  // margin-right: 10px;
  width: 30px;
  height: 22.5px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;

  & span:nth-child(even) {
    left: 50%;
    border-radius: 0 4.5px 4.5px 0;
  }

  & span:nth-child(odd) {
    left:0px;
    border-radius: 4.5px 0 0 4.5px;
  }

  & span:nth-child(1), span:nth-child(2) {
    top: 0px;
  }

  & span:nth-child(3), span:nth-child(4) {
    top: 9px;
  }

  & span:nth-child(5), span:nth-child(6) {
    top: 18px;
  }

  &.open span:nth-child(1) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  &.open span:nth-child(6) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  &.open span:nth-child(2) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  &.open span:nth-child(5) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  &.open span:nth-child(1) {
    left: 2.5px;
    top: 3.5px;
  }

  &.open span:nth-child(2) {
    left: calc(50% - 2.5px);
    top: 3.5px;
  }

  &.open span:nth-child(3) {
    left: -50%;
    opacity: 0;
  }

  &.open span:nth-child(4) {
    left: 100%;
    opacity: 0;
  }

  &.open span:nth-child(5) {
    left: 2.5px;
    top: 14.5px;
  }

  &.open span:nth-child(6) {
    left: calc(50% - 2.5px);
    top: 14.5px;
  }
`

const EachTag = styled.span`
  display: block;
  position: absolute;
  height: 4.5px;
  width: 50%;
  background: #000;
  opacity: 1;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
`

const MenuIcon = props => {

  return (
    <Wrapper id="nav-icon2" {...props}>
      <EachTag/>
      <EachTag/>
      <EachTag/>
      <EachTag/>
      <EachTag/>
      <EachTag/>
	  </Wrapper>
  )
}

export default MenuIcon