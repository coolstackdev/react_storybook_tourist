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
	// height: calc(25em + 10vh);
	/* height: ${ifProp('mobile', 'calc(23em + 10vh)')}; */
	background-color: ${palette('grayscale', 8)};
	box-shadow: 0 3px 16px 0 rgba(0,0,0,0.15);
	transition: box-shadow .13s ease-in;
	border-radius: 58px;
	font-family: ${font('primary')};
`

//* Header
const HeaderStrip = styled.div`
	background-color: #F2A034;
	border-top-right-radius: 58px;
	border-top-left-radius: 58px;
	font-size: 1.3rem;
`

const InnerHeaderWrapper = styled.div`
	position: relative;
	display: flex;
	padding: 27px 32px 14px 42px;
	height: 65px;
`

const InnerContentWrapper = styled.div`
	padding: 6px 27px 35px 27px;
`

const Duration = styled.span`
	color: ${palette('grayscale', 7)};
	position: absolute;
	top: 0.9em;
`

const Price = styled.span`
	position: relative;
	width: 40%;
	font-family: Avenir;
  font-size: 40px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
	letter-spacing: normal;
	margin-left: 15px;
`

const Shield = styled(Icon)`
	position: absolute;
	right: 5%;
	top: 20px;
	color: #F2A034;
`

const StyledRating = styled(Rating)`
	color: ${palette('grayscale', 8)};
	position: relative;
	font-size: 0.6em;

	// & span span {
	// 	width: 17px;
	// 	height: 17px;
	// }
`

const VerifiedExp = styled.span`
	font-family: Avenir;
	font-size: 16px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.19;
	letter-spacing: normal;
	text-align: left;
	color: white;
	margin-left: 43px;

	@media screen and (max-width: 500px) {
		margin-left: 10px;
	}
`

//* Picker
const PickerRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	min-width: 280px;
	padding-left: 3em;
	padding-right: 1em;
	height: 50px;
	// border: 1.5px solid ${palette('grayscale', 4)};
	width: 100%;
	border-radius: 22.5px;
	box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.24);
	margin: 0 auto;
	color: ${palette('secondary', 0)};
	font-size: 20px;

	// &:hover {
	// 	background-color: ${palette('grayscale', 5)};
	// }

	& .dropdown-placeholder {
		margin-left: 50px;
	}

	& .Dropdown-menu {
		width: 100%;
	}

	@media screen and (max-width: 500px) {
		font-size: 18px;

		& .dropdown-placeholder {
			margin-left: 30px;
		}
	}
`
const DateHeading = styled.div`
	display: flex;
	text-align: center;
	align-items: center;
	width: 100%;
	margin: 0;
	padding-top: 12px;
	padding-bottom: 11px;
	user-select: none;

	.calendar-icon {
		margin-left: auto;
		font-size: 1.75rem;
	}
`

const DateWrapper = styled(PickerRow)`
	position: relative;
	cursor: pointer;
	margin: 1rem auto;
`

const ExperienceDate = styled.span`
	color: #D9DADA;
	margin-left: 50px;

	@media screen and (max-width: 500px) {
		margin-left: 30px;
	}
`

const TimeWrapper = styled(PickerRow)`
	.dropdown-control {
		color: #D9DADA;;
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
	font-size: 20px;
`

// const GuestRow = styled.div`
// 	position: relative;
// 	display: flex;
// 	flex-direction: row;
// 	justify-content: space-between;
// 	align-items: center;
// 	width: 76%;

// 	&:first-child {
// 		margin: 1.2rem auto;
// 	}
// `

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

// const GuestType = styled(Label)`
// 	display: inline-block;
// 	text-align: left;
// 	width: 3em;
// 	color: ${palette('secondary', 0)};
// `

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

// const AgeRestriction = styled.span`
// 	position: absolute;
// 	bottom: 0;
// 	right: 33%;
// 	font-size: 0.8rem;
// 	line-height: 0.7;
// 	color: ${palette('secondary', 0)};
// `

//* CTA
const ButtonWrapper = styled.div`
	text-align: center;
	margin: 0 auto;
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	& .animate-on-change {
		margin-right: 20px;
	}
`

const StyledButton = styled(Button)`
	background-color: ${palette('tertiary', 1)};
	font-size: 16px;
	line-height: 1.5;
	width: 50%;
	height: 45px;
	border-radius: 22.5px;
	font-weight: 500;
`

const RightCol = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-end;
	width: 20%;
	margin-right: 70px;
	max-width: 15em;
	max-height: 6em;
	font-size: 20px;

	@media screen and (max-width: 500px) {
		margin-left: 2em;
		margin-right: 0;
		margin-top: 10px;
		width: 80%;
		font-size: 16px;
	}
`

const GuestRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 76%;
	color: black;

	&:first-child {
		margin-bottom: 20px;
    margin-top: 39px;
	}

	@media screen and (max-width: 500px) {
		&:first-child {
			margin-bottom: 11px;
    	margin-top: 20px;
		}	
	}
`

const GuestType = styled.span`
	display: inline-block;
	width: 1.8em;
	font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.88;
	letter-spacing: normal;
	font-family: Avenir;
`

const CounterWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 50%;
	justify-content: space-between;
	margin-left: 0.4em;

	@media screen and (min-width: 800px) {
		margin-left: 2.7em;
		width: 100%;
	}
`

const AddRemoveGuestButton = styled(Icon)`
	display: inline-block;
	border-radius: 50%;
	color: #b99f9f;
	width: 1.9rem;
	height: 1.9rem;
	cursor: pointer;
	box-shadow: 0px 0px 15px 0.5px rgba(0,0,0,0.15);
  border-radius: 25px;

	& svg {
		padding: 0.3em;
	}

	@media screen and (min-width: 800px) {
		width: 2.6rem;
		height: 2.6rem;
		margin-right: 19px;
		margin-left: 19px;

		& svg {
			padding: 0.5em;
		}
	}
`

const GuestAmountWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 1.7rem;
	height: 1.7rem;
	font-size: 0.8em;
	font-weight: bold;
	color: ${palette('secondary', 1)};
	user-select: none;
	margin-top: 10px;

`

const GuestAmount = styled.span`
	height: 100%;
	font-size: 16px;
	font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.95;
	letter-spacing: normal;
	color: black;

	@media screen and (min-width: 800px) {
		font-size: 22px;
	}
`

const AgeRestriction = styled.span`
	position: absolute;
	align-self: flex-start;
	font-size: 0.7rem;
	color: ${palette('grayscale', 4)};
	letter-spacing: 1.5px;
	bottom: 32%;

	@media screen and (min-width: 800px) {
		letter-spacing: 1.5px;
		bottom: 27%;
	}
`

const Col = styled.div`
	display: flex;
	flex-direction: column;
`

const TotalPrice = styled.span`
	display: flex;
	font-family: Avenir;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.47;
  letter-spacing: normal;
`

const Decimal = styled.span`
	vertical-align: top;
	font-family: Avenir;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`

const StyledDiscount = styled.div`
	margin-left: 15px;
	font-size: 20px;
	position: absolute;

	& span:first-child {
		text-decoration-line: line-through;
	}

	& span:last-child {
		font-weight: bold;
		color: red;
	}
`

const Currency = styled.span`
	font-size: 20px;
	font-weight: bold;
	vertical-align: text-bottom;
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
		
	const ourPrice = ((props.detail.fixed_cost + (props.detail.fixed_cost_pp * (props.adults + props.kids)) + (props.detail.hourly_rate * (props.detail.duration_in_minutes / 60))) * (1 + (props.detail.commission / 100))).toFixed(2)
	const beforeDiscount = (ourPrice * (100 / (100 - props.detail.discount))).toFixed(2)
	const integer = Math.floor(ourPrice).toString()
	const decimal = ourPrice.toString().split(".")[1]

	return (
		<Wrapper>

			<HeaderStrip>
				<InnerHeaderWrapper>
					<StyledRating initialRating={props.detail.rating} placeholderValue={props.detail.rating} />
					<VerifiedExp>Verified Experience</VerifiedExp>
					<Shield icon="shield" />
				</InnerHeaderWrapper>
			</HeaderStrip>
			<InnerContentWrapper>
				<DateWrapper>
					<DateHeading onClick={handleDateLabelClick} className="ignore-react-onclickoutside" level={4}>
						<ExperienceDate>
							{parsedDate ? moment(parsedDate).format("D MMM YYYY") : 'Select Date'}
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
						placeholder="Select Time"
						className="dropdown-wrapper"
						controlClassName="dropdown-control"
						placeholderClassName="dropdown-placeholder"
						arrowClassName="dropdown-arrow"
					/>
					<BookCardIcon icon="clock" className="clock-icon" />
				</TimeWrapper>

				<GuestCounterWrapper>
					<GuestRow>
						<GuestType>Adults</GuestType>
						<CounterWrapper>
							<AddRemoveGuestButton onClick={removeAdult} icon="remove" disabled={adults <= 1} />
							<GuestAmountWrapper>
								<GuestAmount>{adults}</GuestAmount>
							</GuestAmountWrapper>
							<AddRemoveGuestButton onClick={addAdult} icon="add" />
						</CounterWrapper>
					</GuestRow>
					<GuestRow>
						<AgeRestriction>0 - 4 years old</AgeRestriction>
						<Col>
							<GuestType>Kids</GuestType>
						</Col>
						<CounterWrapper>
							<AddRemoveGuestButton onClick={removeKid} icon="remove" disabled={kids <= 0} />
							<GuestAmountWrapper>
								<GuestAmount>{kids}</GuestAmount>
							</GuestAmountWrapper>
							<AddRemoveGuestButton onClick={addKid} icon="add" />
						</CounterWrapper>
					</GuestRow>
				</GuestCounterWrapper>

				{props.error ? <ErrorMessage>{props.error}</ErrorMessage> : <ErrorMessage>&nbsp;</ErrorMessage>}
				<TotalPrice>Total Price</TotalPrice>
				<ButtonWrapper>
					<AnimateOnChange durationOut={200}>
						<Currency>{props.detail.currency}</Currency>
						<Price
							level={4}
							bold="true"
						>
							{integer}.
						</Price>
						<Decimal>{decimal ? decimal : '00'}</Decimal>
					</AnimateOnChange>
					<StyledButton onClick={() => getQuoteBooking()} disabled={isWaiting("BookCard")} palette="tertiary" >
						<Wait on="BookCard" fallback={<Spinner />}>
							Book Now
						</Wait>
					</StyledButton>
				</ButtonWrapper>
				{props.detail.discount !== 0 &&
					<StyledDiscount>
						<span>{beforeDiscount}</span>
						<span> ({props.detail.discount}% off)</span>
					</StyledDiscount>
				}
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