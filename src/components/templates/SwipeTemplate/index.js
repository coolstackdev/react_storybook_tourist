// https://github.com/diegohaz/arc/wiki/Atomic-Design#templates
import React from 'react'
import T from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-tools'
import { size } from 'styled-theme'
import SwipeableViews from 'react-swipeable-views'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3.75rem;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: ${palette('grayscale', 8)};

  @media screen and (max-width: 640px) {
    padding-top: 3.25rem;
  }
`

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`

const Content = styled(SwipeableViews)`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  box-sizing: border-box;
  margin: 2rem auto;
  max-width: ${size('maxWidth')};
`

const Footer = styled.footer`
  margin-top: auto;
`

const SwipeTemplate = ({
  header, hero, children, footer, ...props
}) => {
  return (
    <Wrapper {...props}>
      <Header>{header}</Header>
      <Content>{children}</Content>
      <Footer>{footer}</Footer>
    </Wrapper>
  )
}

SwipeTemplate.propTypes = {
  header: T.node.isRequired,
  hero: T.node,
  sponsor: T.node,
  footer: T.node,
  // children: T.any.isRequired,
}

export default SwipeTemplate
