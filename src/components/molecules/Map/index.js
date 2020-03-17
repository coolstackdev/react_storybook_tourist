import React from 'react'
import T from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-tools'
import { GoogleApiWrapper, Map, Marker, InfoWindow } from 'google-maps-react'

import { } from 'components'

const style = {
  borderRadius: '0.2em',
  border: '5px solid #979797',
}

const containerStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%'
}

const Wrapper = styled.div`
  position: relative;
`

const StyledMap = styled(Map)`
  position: relative !important;
  height: 83vh !important;
  z-index: 1;
  margin-top: 2em;
`

const EnhancedMap = ({
  lat,
  lng,
  zoom,
  onClickMap,
  ...props
}) => {

  return (
    // <Wrapper>
      <StyledMap
        google={props.google}
        initialCenter={{ lat, lng }}
        zoom={zoom}
        containerStyle={containerStyle}
        style={style}
        disableDefaultUI
        onClick={onClickMap}
      >
        <Marker name={'Start location'} position={{ lat, lng }} />
      </StyledMap>
    // </Wrapper>
  )
}

EnhancedMap.propTypes = {
  lat: T.number.isRequired,
  lng: T.number.isRequired,
  zoom: T.number.isRequired,
  onClickMap: T.func,
}

EnhancedMap.defaultProps = {
  lat: 49.2827,
  lng: -123.1207,
  zoom: 13
}

export default GoogleApiWrapper({
  apiKey: (process.env.GOOGLE_MAPS_API_KEY)
})(EnhancedMap)
