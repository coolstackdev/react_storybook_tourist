import React, { useEffect } from 'react'
import T from 'prop-types'
import { palette, ifProp, ifNotProp } from 'styled-tools'
import styled from 'styled-components';
import { useGuestCounter } from 'hooks'
import {
	Label,
	Icon
} from 'components'
import IconButton from '../IconButton'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	/* justify-content: center; */
	justify-content: space-between;
`

const CounterWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;
	max-width: 20em;
`

const GuestType = styled(Label)`
	display: inline-block;
	text-align: left;
	line-height: 0;
	margin-top: 2em;
	font-size: 1.2em;
	color: ${palette('grayscale', 2)};
`

const CounterButton = styled(IconButton)`
	background-color: transparent;
	border-color: ${palette('secondary', 0)};
	color: ${palette('secondary', 0)};

	&:hover, &:active {
		box-shadow: inset 0 -2px 5px 0 rgba(0,0,0,0.1), inset 0 2px 5px 0 rgba(0,0,0,0.1), 0 0 5px 0 rgba(0,0,0,0.1);
	}
`

const QuantityViewer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row;
	align-items: center;
	width: 100%;
	border-radius: 50%;
	padding: 0.4em;
	text-align: center;
	font-weight: 700;
	font-size: 1.1em;
`

const NumberWrapper = styled.div`
	color: ${palette('secondary', 0)};
	font-size: 1.8em;
	user-select: none;
`

const Row = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	justify-content: center;
`

const KidsLabel = styled(GuestType)`
	margin-top: 2.7em;
`

const AgeRestriction = styled.span`
	position: absolute;
	top: 0;
	right: 33%;
`


const GuestCounter = ({
	className,
	...props
}) => {
	const {
		adults,
		kids,
		addAdult,
		removeAdult,
		addKid,
		removeKid
	} = useGuestCounter()

	return (
		<Wrapper className={className}>
		{props.heading}
			<GuestType {...props}>Adults</GuestType>
			<Row {...props}>
				<CounterWrapper>
					<CounterButton circle transparent icon="remove" onClick={removeAdult} {...props} />
					<QuantityViewer {...props}>
						<NumberWrapper {...props}>{adults}</NumberWrapper>
					</QuantityViewer>
					<CounterButton circle transparent icon="add" onClick={addAdult} {...props} />
				</CounterWrapper>
			</Row>

			<KidsLabel {...props}>Kids</KidsLabel>
			<Row {...props}>
				<CounterWrapper>
					<CounterButton circle transparent icon="remove" onClick={removeKid} {...props} />
					<QuantityViewer {...props}>
						<NumberWrapper {...props}>{kids}</NumberWrapper>
					</QuantityViewer>
					<CounterButton circle transparent icon="add" onClick={addKid} {...props} />
				</CounterWrapper>
				{/* <AgeRestriction>0-8 years</AgeRestriction> */}
			</Row>

    </Wrapper>
	)
}

export default GuestCounter