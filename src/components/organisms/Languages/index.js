import React from 'react'
import T from 'prop-types'
import * as R from 'ramda'
import styled from 'styled-components'
import { palette } from 'styled-tools'
import { useWindowSize }from 'hooks'
import languageChoices from 'utils/languageChoices'

import {
  Heading,
  SelectionList,
} from 'components'

const Wrapper = styled.div`
  overflow: hidden;
  margin: 0 auto;
  max-width: 40em;
`

const Languages = ({
  selectedLanguages,
  addLanguage,
  removeLanguage,
  ...props
}) => {
  const { width } = useWindowSize()
  const mobile = width < 750

  const handleClickChoice = (choice) => {
    R.includes(choice, selectedLanguages) ?
      removeLanguage(choice)
      :
      addLanguage(choice)

    dataLayer.push({
      event: 'Language selected',
      language: choice.name
    })
    window.analytics.track('Language selected', {
      language: choice.name
    })
  }

  return (
    <Wrapper>
      {props.heading}
      <SelectionList
        handleClickChoice={handleClickChoice}
        availableSelections={languageChoices}
        selectedChoices={selectedLanguages}
        size="medium"
        mobile={mobile}
        languages
      />
    </Wrapper>
  )
}

Languages.propTypes = {
  selectedLanguages: T.array,
  addLanguage: T.func.isRequired,
  removeLanguage: T.func.isRequired,
}

export default Languages
