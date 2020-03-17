import React from 'react'
import styled from 'styled-components'
import { palette, font } from 'styled-theme'

import { Heading, List, Link, Icon } from 'components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: ${palette('secondary', 2)};
  padding: 2rem 0;
  height: 100%;
  min-height: 100%;
  font-family: ${font('primary')};

  > :not(:last-child) {
    border-right: 1px solid ${palette('grayscale', 7)};
  }
`

const SectionWrapper = styled.div`
  flex-grow: 1;
`

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const BrandWrapper = styled(FooterSection)``

const ImageWrapper = styled.div`
  width: 9em;
  height: 100%;
  position: relative;
`

const Image = styled.img`
  width: 100%;
  object-fit: contain;
`

const Slogan = styled(Heading)`
  font-family: ${font('cursive')};
  color: ${palette('grayscale', 7)};
  font-size: 1em;
`

const LinkWrapper = styled(FooterSection)`
  font-size: 0.8em;

  & > * {
    color: ${palette('grayscale', 7)}
  }
`

const StyledList = styled(List)`
  padding: 0;

  > * {
    list-style: none;
    text-align: center;

    > * {
      color: ${palette('grayscale', 7)};
    }
  }
`

const SocialWrapper = styled(FooterSection)`

  > * {
    color: ${palette('grayscale', 7)};
    cursor: pointer;
  }

  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
`

const Footer = (props) => {
  return (
    <Wrapper {...props}>

      <SectionWrapper>
        <BrandWrapper>
            <ImageWrapper>
              <Image src={require('../../atoms/Icon/icons/instahop-logo-footer.png')} />
            </ImageWrapper>
            <Slogan>travel YOUR way!</Slogan>
        </BrandWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <LinkWrapper>
          <StyledList>
            <li><Link to="/terms-of-service">Terms of Service</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          </StyledList>
          <div>
            &copy; Hopohop Experiences
          </div>
        </LinkWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <SocialWrapper>
          <Icon as="a" icon="fb-logo" href="https://www.facebook.com/HopoHop-116890805876606/" target="_blank" />
          <Icon as="a" icon="ig-logo" href="https://www.instagram.com/adventurehoppin/" target="_blank" />
          <Icon as="a" icon="li-logo" href="https://www.linkedin.com/company/hopohop/" target="_blank"/>
        </SocialWrapper>
      </SectionWrapper>

    </Wrapper>
  )
}

export default Footer
