import * as R from 'ramda'
import React, { useState } from 'react'
import T from 'prop-types'
import styled, { css } from 'styled-components'
import { palette, ifProp } from 'styled-tools'
import { font } from 'styled-theme'
import { Image } from 'components'

const Wrapper = styled.div`

`

const ImageWrapper = styled.div`
	display: inline-block;
	max-width: 200px;
`

const ImagePreviewContainer = ({
	images,
	...props
}) => {

	const removeImage = (index) => {
		console.log(index)
		props.onDrop(null, null)
		props.updateAttribute('photos', R.remove(index, 1, props.detail.photos))
	}

	return (
		<Wrapper>
			{images.map((image, i) => {
				return (
					<ImageWrapper key={image} /* onClick={() => removeImage(i)} */>
						<Image imgSrc={image} />
					</ImageWrapper>
				)
			})}
		</Wrapper>
	)
}

ImagePreviewContainer.propTypes = {
}

export default ImagePreviewContainer