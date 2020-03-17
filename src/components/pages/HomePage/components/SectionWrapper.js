import styled from 'styled-components'
import { size } from 'styled-theme'

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  text-align:center;
  padding-left: .6em;
  padding-right: .6em;
  /* max-width: ${size('maxWidth')}; */
  max-width: 90em;
  margin: 2em auto;

  @media screen and (min-width: 700px) {
    /* margin: 0 auto; */
    /* padding-top: 2em;
    padding-bottom: 2em; */
  }
`

export default SectionWrapper
