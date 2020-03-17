import React from 'react'
import T from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-tools'
import { Icon } from 'components'
import { GuestCounterModal } from 'containers'
import { useGuestCounter } from 'hooks'

const Wrapper = styled.div`
	display: flex;
	margin-bottom: 1em;
	margin-left: 1em;

	@media screen and (min-width: 500px) {
		margin-bottom: 0;
	}
`

const Button = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	/* margin-left: auto; */
	margin: 0 auto;
	background-color: ${palette('grayscale', 8)};
	border-radius: 1.3em;
	cursor: pointer;
	user-select: none;
	padding: 0.4em 1em;
	transition: background-color 250ms ease-out;

	&:hover {
		background-color: ${palette('grayscale', 6)};
	}
`

const NumberWrapper = styled.span`
	height: 82%;
`

const EditIcon = styled(Icon)`
	color: ${palette('secondary', 0)};
	margin-left: 1em;
`

const GuestCounterButton = ({
	onOpen,
	onClose,
  ...props
}) => {
	const { adults, kids } = useGuestCounter()

  return (
    <Wrapper>
			<Button onClick={onOpen}>
				<NumberWrapper>{adults}</NumberWrapper>
				<Icon icon="adult" />
        <NumberWrapper style={{ marginLeft: '1em' }}>{kids}</NumberWrapper>
				<Icon icon="kid" />
				<EditIcon icon="edit" />
      </Button>
      <GuestCounterModal />
    </Wrapper>
  )
}

GuestCounterButton.propTypes = {
}

export default GuestCounterButton
