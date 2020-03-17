import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-tools'
import { font } from 'styled-theme'
import withBreadcrumbs from 'react-router-breadcrumbs-hoc'
import { truncate } from 'utils/helpers'
import { useWindowSize } from 'hooks'
import { Link } from 'components'

const Wrapper = styled.div`
  margin-bottom: -1em;
`

const StyledLink = styled(Link)`
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 0.4em;
  color: ${palette('grayscale', 8)};

  &:hover {
    color: ${palette('grayscale', 8)};
  }

  &::after {
    content: " ›";
    color: ${palette('grayscale', 8)};
    font-weight: bold;
    font-size: 1.4em;
  }
`

const BreadcrumbBadge = styled.div`
  font-family: ${font('primary')};
  display: flex;
  flex-direction: row;
  align-items: center;
  display: inline-block;
  margin-right: .6em;
  border-radius: .4em;

  &:hover {
    box-shadow: 0px 8px 10px 0 rgba(0,0,0,.4);
    transition: box-shadow ease-in-out .2s
  }

  &:first-child {
    background-color: ${palette('tertiary', 1)};
  }
  &:nth-child(2) {
    background-color: ${palette('primary', 1)};
  }
  &:nth-child(3) {
    background-color: ${palette('secondary', 2)};
  }
`

const Breadcrumbs = ({ breadcrumbs, ...props }) => {
  let { width } = useWindowSize()

  return (
    <Wrapper>
      {breadcrumbs.map(({
        match,
        location,
        breadcrumb
      }) => {
        const breadcrumbLength = width / 26
        return (
          <BreadcrumbBadge key={match.url}>
            <StyledLink to={match.url}>{truncate(breadcrumb.props.children, breadcrumbLength)}</StyledLink>
          </BreadcrumbBadge>
        )
      })}
    </Wrapper>
  )
}

export default withBreadcrumbs(null, { excludePaths: ['/vancouver/experiences'] })(Breadcrumbs)
