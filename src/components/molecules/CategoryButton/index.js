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
	margin: 7px 25px 0 5px;

	@media screen and (min-width: 800px) {
		margin: 15px 25px 0 0;
	}
`

const StyledCategoryButton = styled(IconButton)`
  background-color: transparent;
  border: 1px solid #0801016e;
  border-radius: 20px;
  color: black;
  font-weight: normal;
  padding: 0;
  font-size: 12px;
	margin: 0;

	@media screen and (max-width: 500px) {
		& span {
			padding-top: 4px;
		}
	}

  &:hover {
    color: ${palette('grayscale', 1)};
    box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.15);
    background-color: initial;
  }

  @media screen and (min-width: 800px) {
    padding: 0 8px 0 13px;
    font-size: 16px;
		margin: 0 5px;
  }
`

const StyledIconButton = styled(Icon)`
	width: 12px;
	height: 12px;
	margin-left: 5px;
	color: #0801016e;

	@media screen and (min-width: 800px) {
		margin-left: 30px;
		width: 14px;
		height: 14px;

		& svg {
			margin-top: 3px;
		}
	}
`

const CategoryButton = ({
	onOpen,
	onClose,
  ...props
}) => {
  return (
    <Wrapper>
			<StyledCategoryButton onClick={onOpen} icon="signup">
				Add Filter
				<StyledIconButton icon="add" />
			</StyledCategoryButton>
      <CategoryModal />
    </Wrapper>
  )
}

CategoryButton.propTypes = {
}

export default CategoryButton
