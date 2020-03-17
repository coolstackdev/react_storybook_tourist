import React from 'react'
import T from 'prop-types'
import styled, { css } from 'styled-components'
import { ifProp, prop } from 'styled-tools'
import { font, palette } from 'styled-theme'
import Rating from 'react-rating'
import { Icon } from 'components'

const StyledRating = styled(Rating)`
  display: flex !important;
  flex-direction: row;
  align-items: center;
`

const EnhancedRating = ({
  white,
  ...props
}) => {
  const fullSymbol = <Icon icon="star-full" white={white} />
  const emptySymbol = <Icon icon="star-empty-original" white={white} />
  // const fullSymbol = <Icon icon="star-empty" white={white} />
  // const emptySymbol = <Icon icon="star-full" white={white} />

  return (
    <StyledRating {...props} fullSymbol={fullSymbol} emptySymbol={emptySymbol} />
  )
}

EnhancedRating.propTypes = {
  type: T.string
}

EnhancedRating.defaultProps = {
  readonly: true,
  fractions: 2,
  initialRating: 4.4,
  placeholderValue: 4.4,
}

export default EnhancedRating
