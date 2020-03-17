import React, { useState } from 'react'
import T from 'prop-types'
import { useWait } from 'react-wait'
import styled, { css } from 'styled-components'
import { palette, ifProp } from 'styled-tools'
import { font } from 'styled-theme'
import Dropdown from 'react-dropdown'
import { AnimateOnChange } from 'react-animation'
import moment from 'moment'
import { getTourCost } from 'utils/helpers'
import 'react-dropdown/style.css'
import './styles.scss'
import { useGuestCounter } from 'hooks'
import {
	Button,
	Icon,
	Rating,
	Spinner,
	ErrorMessage,
	Calendar,
	IconButton,
	Label,
	SlashedPrice,
} from 'components'

const Wrapper = styled.div`
	position: sticky;
	top: 124px;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	max-width: 500px;
	min-width: 320px;
	height: calc(25em + 10vh);
	/* height: ${ifProp('mobile', 'calc(23em + 10vh)')}; */
	background-color: ${palette('grayscale', 8)};
	box-shadow: 0 3px 16px 0 rgba(0,0,0,0.15);
	transition: box-shadow .13s ease-in;
	border-radius: 0.5rem;
	font-family: ${font('primary')};
`

//* Header
const HeaderStrip = styled.div`
	background-color: ${palette('secondary', 2)};
	border-top-right-radius: 0.5rem;
	border-top-left-radius: 0.5rem;
	font-size: 1.3rem;
`

const InnerHeaderWrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	padding: 1.1em 0.9em 0.9em;
	height: 59px;
	height: 4.3em;
`

const InnerContentWrapper = styled.div`
	padding: 1em;
`

const Duration = styled.span`
	color: ${palette('grayscale', 7)};
	position: absolute;
	top: 0.9em;
`

const Price = styled.span`
	color: ${palette('grayscale', 7)};
	position: absolute;
	top: 0.9em;
	left: 32%;
`

const Shield = styled(Icon)`
	position: absolute;
	right: 11px;
	top: 18px;
	color: ${palette('secondary', 2)};
`

const StyledRating = styled(Rating)`
	color: ${palette('grayscale', 8)};
	position: absolute;
	bottom: 0.9em;
	font-size: 0.6em;
`

//* Picker
const PickerRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	min-width: 280px;
	padding-left: 2em;
	padding-right: 2em;
	height: 50px;
	border: 1.5px solid ${palette('grayscale', 4)};
	width: 80%;
	border-radius: 0.8em;
	margin: 0 auto;
	color: ${palette('secondary', 0)};

	&:hover {
		background-color: ${palette('grayscale', 5)};
	}
`
const DateHeading = styled.div`
	display: flex;
	text-align: center;
	align-items: center;
	width: 100%;
	margin: 0;
	padding-top: 0.85714em;
	padding-bottom: 0.57142em;
	user-select: none;

	.calendar-icon {
		margin-left: auto;
		font-size: 1.75rem;
	}
`

const DateWrapper = styled(PickerRow)`
	position: relative;
	cursor: pointer;
	margin: 0.8rem auto;
`

const ExperienceDate = styled.span``

const TimeWrapper = styled(PickerRow)`
	.dropdown-control {
		color: ${palette('secondary', 0)};
	}

	.clock-icon {
		margin-left: auto;
		font-size: 2rem;
	}
`

const BookCardIcon = styled(Icon)`
	color: ${palette('secondary', 1)};
`

//* GuestCounter
const GuestCounterWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	margin: 0 auto;
`

const GuestRow = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 76%;

	&:first-child {
		margin: 1.2rem auto;
	}
`

const GuestTypeQuantityWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	width: 31%;
`

const GuestQuantity = styled.div`
	user-select: none;
	margin-right: auto;
	color: ${palette('secondary', 0)};
`

const GuestType = styled(Label)`
	display: inline-block;
	text-align: left;
	width: 3em;
	color: ${palette('secondary', 0)};
`

const CounterButton = styled(IconButton)`
	background-color: transparent;
	border: 1px solid ${palette('secondary', 0)};

	&:hover, &:active {
		box-shadow: inset 0 -2px 5px 0 rgba(0,0,0,0.1), inset 0 2px 5px 0 rgba(0,0,0,0.1), 0 0 5px 0 rgba(0,0,0,0.1);
	}

	& span {
		color: ${palette('secondary', 0)};
	}
	`

const AgeRestriction = styled.span`
	position: absolute;
	bottom: 0;
	right: 33%;
	font-size: 0.8rem;
	line-height: 0.7;
	color: ${palette('secondary', 0)};
`

//* CTA
const ButtonWrapper = styled.div`
	text-align: center;
	margin: 0.7em auto 0;
`

const StyledButton = styled(Button)`
	background-color: ${palette('tertiary', 1)};
	font-size: 1.3em;
	width: 100%;
`

const BookCard = ({
	experienceDuration,
	experiencePricePerPerson,
	experienceRating,
	parsedDate,
	experienceTime,
	availableStartTimes,
	getQuoteBooking,
	...props
}) => {
	const [calendarOpen, setCalendarOpen] = useState(false)
	const { adults, kids, addAdult, removeAdult, addKid, removeKid } = useGuestCounter()
	const { Wait, isWaiting } = useWait()

	const handleDateLabelClick = () => {
		setCalendarOpen(!calendarOpen)
	}

	const handleChooseDate = (value) => {
		props.changeExperienceDate(value)
		//todo: reset time
		setCalendarOpen(false)
	}

	const handleChangeTime = ({ value }) => {
		props.changeExperienceTime(value)
	}

	const ourPrice = Math.floor(props.detail.fixed_cost + (props.detail.fixed_cost_pp * props.adults) + (props.detail.hourly_rate * (props.detail.duration_in_minutes / 60)), 2)

	return (
		<Wrapper>

			<HeaderStrip>
				<InnerHeaderWrapper>
					<Duration level={4} bold="true">{(props.detail.duration_in_minutes / 60).toFixed()} hours</Duration>
					<AnimateOnChange durationOut={200}>
						<Price
							level={4}
							bold="true"
						>
							${ourPrice}
							{' Total'}
						</Price>
					</AnimateOnChange>
					<Shield icon="shield" />
					<StyledRating initialRating={props.detail.rating} placeholderValue={props.detail.rating} />

				</InnerHeaderWrapper>
			</HeaderStrip>
			<InnerContentWrapper>
				<DateWrapper>
					<DateHeading onClick={handleDateLabelClick} className="ignore-react-onclickoutside" level={4}>
						<ExperienceDate>
							{parsedDate ? moment(parsedDate).format("D MMM YYYY") : 'Choose Experience Date'}
						</ExperienceDate>
						<BookCardIcon icon="calendar" className="calendar-icon" />
					</DateHeading>
					<Calendar
						handleChooseDate={handleChooseDate}
						calendarOpen={calendarOpen}
						setCalendarOpen={setCalendarOpen}
						{...props}
					/>
				</DateWrapper>

				<TimeWrapper>
					<Dropdown
						options={availableStartTimes ? availableStartTimes : []}
						onChange={handleChangeTime}
						value={experienceTime}
						placeholder="Choose Experience Time"
						className="dropdown-wrapper"
						controlClassName="dropdown-control"
						placeholderClassName="dropdown-placeholder"
						arrowClassName="dropdown-arrow"
					/>
					<BookCardIcon icon="clock" className="clock-icon" />
				</TimeWrapper>

				<GuestCounterWrapper>
					<GuestRow>
						<CounterButton circle transparent icon="remove" onClick={removeAdult} />
						<GuestTypeQuantityWrapper>
							<GuestQuantity>{adults}</GuestQuantity>
							<GuestType>Adults</GuestType>
						</GuestTypeQuantityWrapper>
						<CounterButton circle transparent icon="add" onClick={addAdult} />
					</GuestRow>
					<GuestRow>
						<AgeRestriction>0-8 years</AgeRestriction>
						<CounterButton circle transparent icon="remove" onClick={removeKid} />
						<GuestTypeQuantityWrapper>
							<GuestQuantity>{kids}</GuestQuantity>
							<GuestType>Kids</GuestType>
						</GuestTypeQuantityWrapper>
						<CounterButton circle transparent icon="add" onClick={addKid} />
					</GuestRow>
				</GuestCounterWrapper>

				{props.error ? <ErrorMessage>{props.error}</ErrorMessage> : <ErrorMessage>&nbsp;</ErrorMessage>}
				<ButtonWrapper>
					<StyledButton onClick={() => getQuoteBooking()} disabled={isWaiting("BookCard")} palette="tertiary" >
						<Wait on="BookCard" fallback={<Spinner />}>
							Book Now
						</Wait>
					</StyledButton>
				</ButtonWrapper>
			</InnerContentWrapper>

		</Wrapper>
	)
}

BookCard.propTypes = {
	// experienceDuration: T.number.isRequired,
	// experiencePricePerPerson: T.number,
	parsedDate: T.any,
	experienceTime: T.string,
	availableStartTimes: T.arrayOf(T.string),
}

export default BookCard