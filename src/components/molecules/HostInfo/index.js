import React from 'react'
import styled from 'styled-components'
import { Typography, TextField } from '@material-ui/core'

const Wrapper = styled.div`
  width: 77%;
  dispaly: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px auto;

  @media screen and (max-width: 500px) {
    margin: 10px auto;
  }
`

const HostInfo = ({
  title,
  watermark,
  limit,
  ...props
}) => {
  return (
    <Wrapper>
      <Typography>{title}</Typography>
      <TextField 
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        fullWidth
        placeholder={watermark}
        inputProps={{ maxLength: limit }}
        {...props}
      />
    </Wrapper>
  )
}

export default HostInfo