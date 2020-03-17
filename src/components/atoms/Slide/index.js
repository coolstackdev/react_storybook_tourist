import React from 'react'

import T from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'
import { Player } from 'video-react'
import "../../../../node_modules/video-react/dist/video-react.css";
import videoFormats from 'utils/videoFormats'

const SlideWrapper = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
`

const StyledPlayer = styled(Player)`
  display: inline-block !important;
  height: 100% !important;
  padding-top: 0 !important;

  & .video-react-big-play-button {
    left: 45% !important;
    top: 45% !important;
  }

  & .video-react-control-bar {
    width: 60% !important;
    left: 20% !important;
  }
`

const Slide = ({ image }) => {

  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%'
  }

  const isVideo = (url, formats) => {
    const arr = url.split('.')
    return formats.includes(arr[arr.length - 1].toLowerCase())
  }

  if (isVideo(image, videoFormats)) {
    return (
      <StyledPlayer src={image} />
    )
  } else {
    return (
      <SlideWrapper className="slide" style={styles}></SlideWrapper>
    )
  }
}

export default Slide
