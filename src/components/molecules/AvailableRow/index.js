import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Typography, TextField, Checkbox, FormControlLabel } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 40px;

  @media screen and (max-width: 500px) {
    margin-top: 15px;
  }
`

const useStyles = makeStyles(theme => ({
  availability: {
    fontSize: '20px',
    display: 'flex',
    alignItems: 'center',
    margin: '0 20px',
    width: '250px',
    '@media (max-width: 500px)': {
      textAlign: 'center',
      fontSize: '16px',
      alignItems: 'start'
    }
  },
  input: {
    marginRight: '60px',
    justifyContent: 'center',
    display: 'flex',
    '@media (max-width: 500px)': {
      marginRight: '10px',
      justifyContent: 'start'
    }
  },
  checkbox: {
    '@media (max-width: 500px)': {
      padding: '0'
    }
  },
  checkboxlabel: {
    '@media (max-width: 500px)': {
      textAlign: 'center',
      fontSize: '12px'
    }
  }
}))

const AvailableRow = ({
  start,
  end,
  ...props
}) => {
  const classes = useStyles()
  const [isChecked, setIsChecked] = useState(false)

  const handleChange = (e) => {
    setIsChecked(e.target.checked)
    if (e.target.checked) {
      props.updateAttribute('availability_' + props.weekday.toLowerCase() + '_start', parseInt(0))
      props.updateAttribute('availability_' + props.weekday.toLowerCase() + '_end', parseInt(0))
    }
  }

  return (
    <Wrapper>
      <Typography className={classes.availability}>{props.weekday} Availability</Typography>
      <TextField
        label="From"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        // InputProps={{ inputProps: { min: 0, max: 24 } }}
        className={classes.input}
        value={start}
        disabled={isChecked}
        onChange = {(e) => props.updateAttribute('availability_' + props.weekday.toLowerCase() + '_start', parseInt(e.target.value))}
      />
      <TextField
        label="To"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        // InputProps={{ inputProps: { min: 0, max: 24 } }}
        className={classes.input}
        value={end}
        disabled={isChecked}
        onChange = {(e) => props.updateAttribute('availability_' + props.weekday.toLowerCase() + '_end', parseInt(e.target.value))}
      />
      <FormControlLabel
        control={<Checkbox className={classes.checkbox} size="small" color="primary" checked={isChecked} onChange={handleChange} />}
        label={<Typography className={classes.checkboxlabel}>Not Available</Typography>}
        labelPlacement="bottom"
      />
    </Wrapper>
  )
}

export default AvailableRow