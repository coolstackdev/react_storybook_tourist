import React from 'react'
import T from 'prop-types'
import { palette, font } from 'styled-theme'
import { ifProp } from 'styled-tools'
import styled, { css } from 'styled-components';
import { useWindowSize }from 'hooks'

import {
  BookCard,
  HostCard,
  Map,
  HighlightList,
  Carousel,
  IconText,
  Spinner,
  Heading,
  Icon,
  HorizontalRule,
  List,
  Paragraph,
} from 'components'
import { BookButton } from 'containers'

const bodyStyles = css`
  font-size: 1rem;
  color: ${palette('grayscale', 2)};
`

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Container = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 800px) {
    flex-direction: row;
  }
`

const ExperienceName = styled(Heading)`
  font-weight: bold;
  font-size: 1.8rem;
  color: ${palette('secondary', 0)};
`

const Tagline = styled(Heading)`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${palette('secondary', 2)};
`

const BookCardContainer = styled.div`
  @media screen and (min-width: 800px) {
    width: 25%;
  }
`

const StyledBookButton = styled(BookButton)`
  position: sticky !important;
  margin: 0 auto;
  z-index: 10;
  background-color: ${palette('tertiary', 1)};
`

const ContentContainer = styled.div`
  font-family: ${font('primary')};
  width: 100%;

  @media screen and (min-width: 800px) {
    margin-right: 1.2em;
    width: ${ifProp('editExperiencePage', '100%', '75%')};
  }
`

const TextContent = styled.div`
  padding-left: 0.5em;
  padding-right: 0.5em;
`

const SectionHeading = styled(IconText)`
  display: flex;
  align-items: center;
  margin-top: 1.2em;
  margin-bottom: 1.5em;

  span {
    &:first-child {
      font-size: 1.4em;
      margin-top: 0;
      margin-bottom: 0;
    }
    &:nth-child(2n) {
      font-size: 1.1rem;
      font-weight: bold;
      color: ${palette('grayscale', 1)};
    }
  }
`

const SectionBody = styled(Paragraph)`
  padding-left: 1.1rem;
  ${bodyStyles};
`

const StyledCarousel = styled(Carousel)`
	width: 100%;
	height: calc(25em + 10vh);
  border-radius: 0.5rem;
`

const CategoryList = styled(List)`
  list-style: none;
  padding: 0;

  & > li {
    display: inline-block;
    margin-right: 0.8em;

    @media screen and (min-width: 600px) {
      margin-right: 3em;
    }

    div {
      display: flex;
      align-items: center;

      span {
        &:first-child {
          font-size: 1.6em;
          color: ${palette('grayscale', 3)};
          margin-right: 0.5em;
        }
        &:nth-child(2n) {
          font-size: 1rem;
          color: ${palette('grayscale', 2)};
          font-weight: medium;
        }
      }
    }
  }
`

const StyledList = styled(List)`
  list-style: none;
  padding: 0 !important;
  margin: 0;
  padding-left: 0;
  ${bodyStyles};

  @media screen and (min-width: 450px) {
    columns: 2;
  }

  & > li {
    margin-left: 1em;
    padding-left: 1em;
    text-indent: -.7em;
  }

  & > li:before {
    content: "• ";
    color: ${palette('secondary', 0)};
    margin-right: 0.4em;
  }
`

const ProminentText = styled.span`
  color: ${palette('secondary', 1)};
`

const StartPin = styled(IconText)`
  &:first-child {
    /* color: yellow; */
  }
`

const StyledHostCard = styled(HostCard)`
  margin-top: 2em;
  margin-bottom: 2em;
  margin-left: 0;
  margin-right: 0 !important;
`

const StyledMap = styled(Map)`
  height: 40em;
  margin-top: 2em;
  border-radius: 0.6em;
`

const ExperienceDetail = ({
  loading,
  editExperiencePage,
  ...props
}) => {
  let { width } = useWindowSize()
  let mobile = width < 800
  const { detail } = props

  const renderCategories = detail.categories.map(category => {
    return (
      <li key={category.categoryid}>
        <IconText key={category.categoryid} icon={category.icon} palette='grayscale'>{category.name}</IconText>
      </li>
    )
  })

  return (
    <>
      {loading &&
        <Spinner />
      }
      <Container>
        <ContentContainer editExperiencePage={editExperiencePage}>
          <StyledCarousel images={detail.photos} />
          <TextContent>

            <ExperienceName>{detail.title}</ExperienceName>
            <Tagline level={2}>{detail.tag_line}</Tagline>

            <HorizontalRule />

            <CategoryList>
              {renderCategories}
            </CategoryList>

            <HorizontalRule />

            <FlexWrapper>
              <Icon icon="language" size={22} palette="tertiary" />
              <SectionBody style={{ paddingLeft: '0.25em' }}>{detail.languages.replace(/,/g, ' |') || ''}</SectionBody>
            </FlexWrapper>

            <HorizontalRule />

            {detail.highlights[0] && (
              <>
                <SectionHeading icon="highlights" palette="primary">Highlights:</SectionHeading>
                <HighlightList list={detail.highlights} styles={bodyStyles} />
              </>
            )}

            <HorizontalRule />

            <SectionHeading icon="description" palette="tertiary">Description:</SectionHeading>
            <SectionBody>{detail.description}</SectionBody>

            <HorizontalRule />

            <SectionHeading icon="user" palette="tertiary">Your host:</SectionHeading>
            <StyledHostCard {...props} />

            <SectionHeading icon="check" palette="secondary">What's included:</SectionHeading>
            <SectionBody>{detail.included}</SectionBody>

            <SectionHeading icon="bring" palette="tertiary">What to bring:</SectionHeading>
            <SectionBody>{detail.bring}</SectionBody>

            <SectionHeading icon="caution" palette="primary">What to expect:</SectionHeading>
            <SectionBody>{detail.expect}</SectionBody>

            <HorizontalRule />

            <SectionHeading icon="money" palette="secondary">All about the price:</SectionHeading>

            <StyledList>
              <li>Price for up to {detail.number_in_base} people: <ProminentText>${detail.base_price} {detail.currency}</ProminentText></li>
              <li>Price per additional person: <ProminentText>${detail.extra_person_cost} {detail.currency}</ProminentText></li>
              <li>Max: <ProminentText>{detail.capacity} persons</ProminentText></li>
            </StyledList>

            <HorizontalRule />

            <SectionHeading icon="map" palette="primary">Locations:</SectionHeading>
            <SectionBody as="div">
              <StartPin icon="map-marker" palette="secondary">Start: {detail.start_location}</StartPin>
              <IconText icon="map-marker" palette="tertiary">End: {detail.end_location ? detail.end_location : 'Same as start location'}</IconText>
            </SectionBody>
            <StyledMap lat={detail.latitude} lng={detail.longitude} />
          </TextContent>
        </ContentContainer>

        {editExperiencePage ?
          null
          :
          !mobile ?
            <BookCardContainer>
              <BookCard {...props} mobile />
            </BookCardContainer>
            :
            <StyledBookButton {...props} />

        }
      </Container>
    </>
  )
}

ExperienceDetail.propTypes = {
}

export default ExperienceDetail
