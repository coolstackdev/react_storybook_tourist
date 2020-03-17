import React from 'react'

import T from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'

const SlideWrapper = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
`

const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%'
  }
  return <SlideWrapper className="slide" style={styles}></SlideWrapper>
}

export default Slide
