import React, { useState } from 'react'
import T from 'prop-types'
import { palette, font } from 'styled-theme'
import { ifProp, prop } from 'styled-tools'
import styled, { css } from 'styled-components';
import { useWindowSize }from 'hooks'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

import {
  BookCard,
  HostCard,
  ReviewCards,
  Map,
  // HighlightList,
  Carousel,
  IconText,
  Spinner,
  Heading,
  Icon,
  HorizontalRule,
  List,
  Paragraph,
  ExperiencedSlider
} from 'components'
import { BookButton } from 'containers'

const bodyStyles = css`
  font-size: 20px;
  color: #000;
`

const zIndex = () => {
  if (selectedTab === 1) {

  }
}

const tabStyles = css`
  display: inline-block;
  border-top-left-radius: 58px;
  border-top-right-radius: 58px;
  padding: 23px 0 14px 0;
  text-align: center;
  font-size: 20px;
  border: none;
  box-shadow: 0px -8px 17px 1px rgba(0,0,0,0.15);
  cursor: pointer;
  position: absolute;
  background-color: #fff;
  color: black;
  width: 36%;

  @media screen and (max-width: 500px) {
    padding: 15px 0 9px 0;
    width: 42%;
    font-size: 15px;
  }
`

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 23px;
  margin-top: 35px;
  margin-bottom: 35px;

  p {
    margin: 0;
    margin-bottom: 5px;
  }

  span {
    width: 40px;
    height: 33px;
  }

  div {
    text-align: left;
    width: 50%;
  }

  div span:last-child {
    vertical-align: super;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 20px;

    div {
      width: 100%;

      span {
        width: 30px;
        height: 25px;
      }

      span:last-child {
        font-size: 16px;
      }
    }
  }
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
  font-size: 30px;
  font-weight: bold;
  line-height: 1.33;
  color: rgba(0, 0, 0, 0.87);
  margin-top: 60px;

  @media screen and (max-width: 500px) {
    text-align: center;
    margin-top: 20px;
  }
`

const Tagline = styled(Heading)`
  font-size: 20px;
  font-weight: 500;
  line-height:2.2;
  color: rgba(0, 0, 0, 0.87);

  @media screen and (max-width: 500px) {
    text-align: center;
    line-height: 1.3;
  }
`

const BookCardContainer = styled.div`
  @media screen and (min-width: 800px) {
    width: 33%;
  }
`

const StyledBookButton = styled(BookButton)`
  position: sticky !important;
  margin: 0 auto;
  z-index: 100;
  background-color: ${palette('tertiary', 1)};
`

const ContentContainer = styled.div`
  font-family: ${font('primary')};
  width: 100%;

  @media screen and (min-width: 800px) {
    margin-right: 1.2em;
    width: ${ifProp('editExperiencePage', '100%', '67%')};
  }
`

const TextContent = styled.div`
  padding-left: 0.5em;
  padding-right: 0.5em;
  font-family: Avenir;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`

const SectionHeading = styled(IconText)`
  display: flex;
  align-items: center;

  span {
    &:first-child {
      font-size: 1.4em;
      margin-top: 0;
      margin-bottom: 0;
      width: 40px;
      height: 33px;
    }
    &:nth-child(2n) {
      // font-weight: bold;
      color: #000;
    }
  }

  @media screen and (max-width: 500px) {
    margin-top: 20px;
    span {
      &:first-child {
        width: 30px;
        height: 25px;
      }

      &:nth-child(2n) {
        font-size: 20px;
      }
    }
  }
`

const SectionBody = styled(Paragraph)`
  padding-left: 45px;
  line-height: 1.9;
  ${bodyStyles};

  @media screen and (max-width: 500px) {
    margin-top: 0;
    padding-left: 20px;
    line-height: 1.3;

    div {
      span:last-child {
        font-size: 16px;
      }
    }
  }
`

const StyledCarousel = styled(Carousel)`
	width: 100%;
	height: calc(25em + 10vh);
  border-radius: 58px;
`

const CategoryList = styled(List)`
  list-style: none;
  padding: 0;
  font-size: 20px;
  margin-top: 35px;
  margin-bottom: 15px;

  & > li {
    display: inline-block;
    width: 33%;
    margin-bottom: 20px;

    div {
      display: flex;
      align-items: center;

      span {
        &:first-child {
          margin-right: 15px;
          width: 40px;
          height: 33px;
        }
        &:nth-child(2n) {
          font-weight: medium;
        }
      }
    }
  }

  @media screen and (max-width: 500px) {

    & > li {
      width: 50%;
      text-align: center;

      div {
        span {
          &:first-child {
            width: 30px;
            height: 25px;
          }

          &:nth-child(2n) {
            font-size: 16px;
          }
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
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 47px;
  ${bodyStyles};

  @media screen and (min-width: 450px) {
    columns: 2;
  }

  & > li {
    margin-left: 40px;
    padding-left: 1em;
    text-indent: -.7em;
    line-height: 1.9;
  }

  & > li:before {
    content: "• ";
    margin-right: 0.4em;
  }

  @media screen and (max-width: 500px) {
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 16px;
  }
`

const ProminentText = styled.span`
`

const StartPin = styled(IconText)`
  &:first-child {
    /* color: yellow; */
  }
`

const StyledHostCard = styled(HostCard)`
  margin-top: 2em;
  margin-bottom: 81px;
  margin-left: 0;
  margin-right: 0 !important;

  @media screen and (max-width: 500px) {
    margin-bottom: 30px;
  }
`

const StyledMap = styled(Map)`
  height: 40em;
  margin-top: 2em;
  margin-bottom: 95px;
  border-radius: 0.6em;
`

const DurationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 35px;

  div {
    width: 50%;

    & > :first-child {
      width: 40px;
      height: 33px;
    }

    & > :last-child {
      vertical-align: super;
    }
  }

  @media screen and (max-width: 500px) {
    margin-top: 20px;
    margin-bottom: 20px;

    div {
      text-align: center;

      & > :first-child {
        width: 30px;
        height: 25px;
      }

      & >:last-child {
        font-size: 16px;
      }
    }
  }
`

const DescriptionStyled = styled(Paragraph)`
  font-size: 23px;
  padding-left: 45px;
  margin-top: 45px;
  margin-bottom: 68px;

  @media screen and (max-width: 500px) {
    font-size: 16px;
    padding: 0;
    margin-top: 10px;
    text-align: center;
    margin-bottom: 20px;
  }
`

const StyledTabList = styled(TabList)`
  padding-inline-start: 0;
  width: 100%
  position: relative;
  height: 57px;

  .react-tabs__tab--selected {
    border-top-left-radius: 58px;
    border-top-right-radius: 58px;
    z-index: 7;
  }

  & :first-child {
    border-bottom: 5px solid #4BC39E;
  }

  & :nth-child(2n) {
    z-index: 6;
    left: 32%;
    border-bottom: 5px solid #CA5B71;
  }

  & :last-child {
    left: 64%
    border-bottom: 5px solid #E29434;
  }

  @media screen and (max-width: 500px) {
    height: 35px;

    & :nth-child(2n) {
      left: 28%;
    }

    & : last-child {
      left: 58%;
    }
  }
`

const StyledTab = styled(Tab)`
  ${tabStyles}
`

const StyledTabPanel = styled(TabPanel)`
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 80px;

  span {
    font-size: 23px;
    line-height: 1.65;
    color: #000;

    @media screen and (max-width: 500px) {
      font-size: 16px;
      line-height: 1.3;
    }
  }
`

const StyledTabs = styled(Tabs)`
  position: relative;
  width: 100%;
  margin-top: 77px;
  margin-bottom: 86px;

  .react-tabs__tab-panel--selected {
    box-shadow: 0 3px 16px 6px rgba(0,0,0,0.15);
    padding: 65px 72px 65px 92px

    @media screen and (max-width: 500px) {
      padding: 20px 35px 20px 35px;
    }
  }

  @media screen and (max-width: 500px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  
`

const ExperienceDetail = ({
  loading,
  editExperiencePage,
  ...props
}) => {
  let { width } = useWindowSize()
  let mobile = width < 800
  const { detail } = props  

  const fixed_cost = ((detail.fixed_cost + (detail.hourly_rate * (detail.duration_in_minutes / 60))) * (1 + (detail.commission / 100))).toFixed(2)
  const additional_cost = (detail.fixed_cost_pp * (1 + (detail.commission / 100))).toFixed(2)

  const highlightlist = []
  for (var i = 0; i < detail.highlights.length; i ++) {
    highlightlist.push({key: i, name: detail.highlights[i], url: detail.highlights_links[i]})
  }

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

            <CategoryList>
              {renderCategories}
            </CategoryList>

            <HorizontalRule />

            <DurationWrapper>
              <IconText icon="person">Capacity: {detail.capacity} persons</IconText>
              <IconText icon="passage-of-time">Duration: {(detail.duration_in_minutes / 60).toFixed()} hours</IconText>
            </DurationWrapper>

            <HorizontalRule />

            <FlexWrapper>
              <IconText icon="language">{detail.languages.replace(/,/g, ' |') || ''}</IconText>
              <IconText icon="person">Experienced by : {detail.number_of_done} persons</IconText>
            </FlexWrapper>

            {detail.highlights[0] && (
              <>
                <HorizontalRule />

                <SectionHeading top="35" textFontSize="30" icon="highlights" palette="primary" highlight>Highlighted Attractions</SectionHeading>
                {/* <HighlightList list={detail.highlights} styles={bodyStyles} /> */}
                <ExperiencedSlider highlightlist={highlightlist} />
              </>
            )}

            <HorizontalRule />

            <SectionHeading top="65" textFontSize ="25" icon="description" palette="tertiary">Description:</SectionHeading>
            <DescriptionStyled>{detail.description}</DescriptionStyled>

            <HorizontalRule />

            <StyledTabs>

              <Tabs>
                <StyledTabList>
                  <StyledTab>What is Included</StyledTab>
                  <StyledTab>What to Bring</StyledTab>
                  <StyledTab>What to Expect</StyledTab>
                </StyledTabList>

                <StyledTabPanel>
                  <span>{detail.included}</span>
                </StyledTabPanel>
                <StyledTabPanel>
                  <span>{detail.bring}</span>
                </StyledTabPanel>
                <StyledTabPanel>
                  <span>{detail.expect}</span>
                </StyledTabPanel>
              </Tabs>
            </StyledTabs>

            <HorizontalRule />

            <SectionHeading top="52" icon="money" palette="secondary">All about the price:</SectionHeading>

            <StyledList>
              <li>Fixed cost: <ProminentText>{detail.currency} {fixed_cost}</ProminentText></li>
              <li>Additional cost for each person: <ProminentText>{detail.currency} {additional_cost}</ProminentText></li>
            </StyledList>

            <HorizontalRule />

            <SectionHeading top="73" icon="user" palette="tertiary">Your host:</SectionHeading>
            <StyledHostCard {...props} />

            <HorizontalRule />

            <SectionHeading top="54" icon="map" palette="primary">Locations:</SectionHeading>
            <SectionBody as="div">
              <StartPin icon="map-marker" palette="secondary">Start: {detail.start_location}</StartPin>
              <IconText icon="map-marker" palette="tertiary">End: {detail.end_location ? detail.end_location : 'Same as start location'}</IconText>
            </SectionBody>
            <StyledMap lat={detail.latitude} lng={detail.longitude} />

            <HorizontalRule />
            
            <SectionHeading top="73" textFontSize="25" icon="user" palette="tertiary">Reviews:</SectionHeading>
            {detail.reviews && <ReviewCards {...props}/> }

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
