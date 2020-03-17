import React from 'react'
import T from 'prop-types'
import styled from 'styled-components'
import { ifProp, palette } from 'styled-tools'
import { size } from 'styled-theme'

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

const Content = styled.section`
  display: ${ifProp('flex', 'flex', 'block')};
  flex-direction: ${ifProp('flex', 'column')};
  flex: ${ifProp('flex', '.8')};
  width: 100%;
  box-sizing: border-box;
  margin: 2rem auto;
  margin-bottom: 0;
  max-width: ${size('maxWidth')};

  @media screen and (min-width: 500px) {
    padding-left: 2em;
    padding-right: 2em;
  }

  @media screen and (min-width: 1200px) {
    padding-left: 6em;
    padding-right: 6em;
  }
`

const Footer = styled.footer`
  margin-top: auto;
`

const PageTemplate = ({
  header, hero, sponsor, children, footer, ...props
}) => {
  return (
    <Wrapper {...props}>
      <Header>{header}</Header>
      {hero && <Hero>{hero}</Hero>}
      <Content {...props}>{children}</Content>
      <Footer>{footer}</Footer>
    </Wrapper>
  )
}

PageTemplate.propTypes = {
  header: T.node.isRequired,
  footer: T.node,
  children: T.any.isRequired,
}

export default PageTemplate
