import React from 'react'
import Calendar from 'react-calendar'
import T from 'prop-types'
import { getTimesForCurrentDate } from 'utils/helpers'
import styled from 'styled-components'
import onClickOutside from 'react-onclickoutside'
import { ifProp } from 'styled-tools'
import './styles.scss'
import { Spinner }from 'components'

const StyledCalendar = styled(Calendar)`
  display: ${ifProp('calendarOpen', 'block', 'none')};
  z-index: 999;
	position: absolute;
	top: 44px;
	right: 0;
	border-bottom-right-radius: 18px;
	border-bottom-left-radius: 18px;
	border: none;
  box-shadow: 0 6px 16px 0 rgba(0,0,0,.15);
  user-select: none;
`

const EnhancedCalendar = ({
  handleChooseDate,
  calendarOpen,
  setCalendarOpen,
  handleDateLabelClick,
  ...props
}) => {
  EnhancedCalendar.handleClickOutside = () => setCalendarOpen(false)

  return (
    <>
    { props.reviewCalendar ?
      <StyledCalendar
        calendarOpen={!!calendarOpen}
        showNeighboringMonth
        minDetail="month"
        onClickDay={handleChooseDate}
        activeStartDate={props.experienceDate}
      /> :
      <StyledCalendar
        calendarOpen={!!calendarOpen}
        showNeighboringMonth
        minDetail="month"
        onClickDay={handleChooseDate}
        activeStartDate={props.experienceDate}
        tileDisabled={({ activeStartDate, date, view }) => date < new Date()}
        tileDisabled={({ activeStartDate, date, view }) => {
          const availabilitiesForCurrentDate = getTimesForCurrentDate(date, props.detail.availabilities)
          return (
            !availabilitiesForCurrentDate.length
          )
        }}
      />
    }
    </>
  )
}

const clickOutsideConfig = {
  handleClickOutside: () => EnhancedCalendar.handleClickOutside
}

Calendar.propTypes = {
  handleChooseDate: T.func,
  calendarOpen: T.bool.isRequired,
  setCalendarOpen: T.bool,
}

export default onClickOutside(EnhancedCalendar, clickOutsideConfig)
