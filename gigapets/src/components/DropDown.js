import React from 'react'
import { Dropdown } from 'semantic-ui-react'


const foodOptions = [
    {
      key: 'Vegetables',
      text: 'Vegetables',
      value: 'Vegetables',
    },
    {
      key: 'Fruits',
      text: 'Fruits',
      value: 'Fruits',
    },
    {
      key: 'Grains, Beans and Nuts',
      text: 'Grains, Beans and Nuts',
      value: 'Grains, Beans and Nuts',
    },
    {
      key: 'Meat and Poultry',
      text: 'Meat and Poultry',
      value: 'Meat and Poultry',
    },
    {
      key: 'Fish and Seafood',
      text: 'Fish and Seafood',
      value: 'Fish and Seafood',
    },
    {
      key: 'Dairy',
      text: 'Dairy',
      value: 'Dairy',
    },
  ]

  const DropdownSelection = () => (
    <Dropdown
      placeholder='Select Food'
      fluid
      selection
      options={foodOptions}
    />
  )
  
  export default DropdownSelection