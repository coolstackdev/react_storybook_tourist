import React from 'react'
import T from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-tools'
import IconButton from '../IconButton'
import { Icon } from 'components'
import { CategoryModal } from 'containers'

const Wrapper = styled.div`
	display: flex;
	align-items: center;
`

const StyledCategoryButton = styled(Icon)`
	background-color: ${palette('grayscale', 8)};
	color: ${palette('grayscale', 4)};
	border-radius: 50%;
	transition: background-color 250ms ease-out;
	width: 1.8em;
	height: 1.8em;

	svg {
		background-color: transparent;
		padding: 0.3em;
		color: ${palette('secondary', 0)};
	}
	button {
		width: 1em;
		height: 1em;
	}

	&:hover {
		background-color: ${palette('grayscale', 6)};

	}
`

const CategoryButton = ({
	onOpen,
	onClose,
  ...props
}) => {
  return (
    <Wrapper>
			<StyledCategoryButton onClick={onOpen} icon="edit" />
      <CategoryModal />
    </Wrapper>
  )
}

CategoryButton.propTypes = {
}

export default CategoryButton
