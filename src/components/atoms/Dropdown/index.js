import React, { useState } from 'react'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'

const EnhancedDropdown = ({ placeholder, dropdownChoices }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <Dropdown isOpen={dropdownOpen} toggle={() => setDropdownOpen(!dropdownOpen)}>

      <DropdownToggle>
        {placeholder}
      </DropdownToggle>

      <DropdownMenu>
        {dropdownChoices.map((choice, index) => <DropdownItem key={index}>{choice}</DropdownItem>)}
      </DropdownMenu>

    </Dropdown>
  )
}

export default EnhancedDropdown