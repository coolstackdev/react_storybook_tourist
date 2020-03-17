import React, { useEffect } from 'react'
import T from 'prop-types'
import styled from 'styled-components'
import { palette, ifProp } from 'styled-tools'
import dateFormat from 'dateformat'
import Popup from 'reactjs-popup'
import {
  Heading,
  Image,
  Rating,
  Avatar,
  HorizontalRule,
  Card,
  Icon,
  CancellationPolicy,
} from 'components'
import './styles.scss'

const Row = styled.div`
  display: flex;
`

const StyledCard = styled(Card)`
  margin: initial;
  max-width: 33em;
  /* width: 60%; */
  /* min-width: 30em; */

  @media screen and (min-width: 940px) {
    width: 40%;
    margin-left: 1em;
    margin-right: 1em;
  }
`

const ImageWrapper = styled.div`
  position: relative;
  text-align: center;
`

const StyledImage = styled(Image)`
  border-top-left-radius: 0.8em;
  border-top-right-radius: 0.8em;
`

const ExperienceName = styled(Heading)`
  margin-bottom: -0.5em;
  margin-top: 0.25em;
`

const StyledRating = styled(Rating)`
  color: ${palette('grayscale', 7)};
  position: absolute;
  left: 0;
  top: 35px;
  padding-left: .6em;
`

const StyledAvatar = styled(Avatar)`
  margin-top: -2em;
`

const HostNameHeading = styled(Heading)`
  margin-top: 0.4em;
`

const HostName = styled.span`
  color: ${palette('secondary', 2)};
  font-weight: bold;
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;

  & span {
    color: ${palette('secondary', 1)};
    font-size: 1.65em;
  }
`

const StyledRow = styled(Row)`
  flex-direction: column;

  @media screen and (min-width: 440px) {
    flex-direction: row;
  }

  & > h4 {
    color: ${palette('secondary', 0)};
    font-size: 0.8rem;

    @media screen and (min-width: 940px) {
      font-size: 1rem;
    }
  }

  > * {
    margin-left: ${ifProp('last', '1em')};
    margin-right: ${ifProp('last', '1em')};
  }
`

const TotalCostRow = styled(Row)`
`

const DetailStrip = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 1.4em 1.4em;
`

const PopupWrapper = styled.div``

const CancellationLink = styled.span`
  text-decoration: underline !important;
  font-size: .8em;
  color: ${palette('grayscale', 2)} !important;
  cursor: pointer;
`

const CloseButton = styled.span`
  position: absolute;
  top: 5px;
  right: 15px;
  font-size: 1.9em;
  cursor: pointer;
`

const SummaryCard = ({
  detail,
  userSelections,
  ...props
}) => {
  useEffect(() => {
    window.analytics.page('SummaryCard')
  }, [])

  const { featurePhoto, hostName, experienceName } = props.history.location.state
  const { currency, cost } = props.history.location.state.response

  const formatDate = (date) => {
    return dateFormat(date, "dd mmm yyyy")
  }

  return (
    <StyledCard>
      <ImageWrapper>
        <StyledImage imgSrc={featurePhoto} height={200} />
        <StyledRating initialRating={detail.rating} placeholderValue={detail.rating} />
      </ImageWrapper>
      <DetailStrip>

        <StyledRow>
          <StyledAvatar avatarUrl={detail.host_thumbnail_url} />
          <HostNameHeading level={2}>
            with
            {' '}
            <HostName>{hostName}</HostName>
          </HostNameHeading>
        </StyledRow>
        <ExperienceName level={3}>{experienceName.replace(/-/g, ' ')}</ExperienceName>

        <HorizontalRule />

        <StyledRow style={{ justifyContent: 'space-between' }}>
          <IconWrapper>
            <Icon icon="calendar" />
            <Heading level={4}>{formatDate(userSelections.experienceDate)}</Heading>
          </IconWrapper>
          <IconWrapper>
            <Icon icon="clock" />
            <Heading level={4}>{userSelections.experienceTime}</Heading>
          </IconWrapper>
          <IconWrapper>
            <Icon icon="users" />
            <Heading level={4}><b>{userSelections.adults}</b> Adults</Heading>
            <Heading level={4}>{'/'}</Heading>
            <Heading level={4}><b>{userSelections.kids}</b> Kids</Heading>
          </IconWrapper>
        </StyledRow>

        <HorizontalRule />

        <TotalCostRow style={{ justifyContent: 'space-between' }}>
          <Heading level={4}>Total:</Heading>
          <Heading level={4}>{currency} ${cost}</Heading>
        </TotalCostRow>

        <Popup arrow={false} className="react-popup" trigger={<CancellationLink>cancellation policy</CancellationLink>} position="center">
          {close => (
            <PopupWrapper>
              <CloseButton onClick={close}>&times;</CloseButton>
              <CancellationPolicy />
            </PopupWrapper>
          )}
        </Popup>

      </DetailStrip>
    </StyledCard>
  )
}

SummaryCard.propTypes = {
  detail: T.shape({
    name: T.string.isRequired,
    rating: T.number.isRequired,
    host_thumbnail_url: T.string,
  }).isRequired,
  userSelections: T.shape({
    adults: T.number.isRequired,
    kids: T.number.isRequired,
    experienceDate: T.instanceOf(Date).isRequired,
    experienceTime: T.string.isRequired,
  }).isRequired,
  match: T.object.isRequired,
  history: T.object.isRequired,
}

export default SummaryCard
