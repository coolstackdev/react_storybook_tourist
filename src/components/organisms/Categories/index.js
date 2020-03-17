import React from 'react'
import T from 'prop-types'
import styled from 'styled-components'
import { palette, ifProp } from 'styled-tools'
import * as R from 'ramda'
import { useWindowSize }from 'hooks'
import categoryChoices from 'utils/categoryChoices'
import { useCategories } from 'hooks'
import {
  SelectionList,
  Button,
} from 'components'

const Wrapper = styled.div`
  overflow: hidden;
  margin: 0 auto;
  height: 100%;
  max-width: 40em;
`

const ButtonWrapper = styled.div`
  text-align: center;
`

const SelectAllButton = styled(Button)`
  background-color: ${ifProp('allCategoriesSelected', palette('secondary', 2), palette('secondary', 3))};
  color: ${ifProp('allCategoriesSelected', palette('grayscale', 8), palette('secondary', 1))};
`

const StyledSelectionList = styled(SelectionList)``

const Categories = ({
  heading,
  categoryModal,
  ...props
}) => {
  const { width } = useWindowSize()
  const mobile = width > 750

  const { categories, removeCategory, addCategory } = useCategories()
  const allCategoriesSelected = categories.length === categoryChoices.length

  const handleSelectAll = () => {
    if (!allCategoriesSelected) {
      for (let i = 0; i < categoryChoices.length; i++) {
        removeCategory(categoryChoices[i])
        addCategory(categoryChoices[i])
      }
    } else {
      for (let i = 0; i < categoryChoices.length; i++) {
        removeCategory(categoryChoices[i])
      }
    }
  }

  const handleClickChoice = (choice) => {
    R.includes(choice, categories) ?
      removeCategory(choice)
      :
      addCategory(choice)

    dataLayer.push({
      event: 'Category selected',
      category: choice.name
    })
    window.analytics.track('Category selected', {
      category: choice.name
    })
  }

  return (
    <Wrapper>
      {heading && heading}
      <ButtonWrapper>
        <SelectAllButton onClick={handleSelectAll} allCategoriesSelected={allCategoriesSelected}>{allCategoriesSelected ? 'Unselect' : 'Select All'}</SelectAllButton>
      </ButtonWrapper>
      <StyledSelectionList
        // handleClickChoice={categoryModal ? handleGroupClickChoice : handleClickChoice}
        handleClickChoice={handleClickChoice}
        availableSelections={categoryChoices}
        selectedChoices={categories}
        mobile={mobile}
        filterPage={props.filterPage}
        categories
      />
    </Wrapper>
  )
}

Categories.propTypes = {
  // selectedCategories: T.array,
  // addCategory: T.func.isRequired,
  // removeCategory: T.func.isRequired,
}

export default Categories