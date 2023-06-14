import {
  InpuRangeTitleStyled,
  InputRangeContainerStyled,
  InputRangeStyled,
  InputRangeValueStyled,
} from './InputRangeStyled'

import { useProducts } from '../../../hooks'

const InputRange = ({ title }) => {
  const { filters, setFilters, maxPrice } = useProducts()

  const handleChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      minPrice: e.target.value,
    }))
  }

  return (
    <InputRangeContainerStyled>
      <InpuRangeTitleStyled>
        <label htmlFor='price'>{title}</label>
      </InpuRangeTitleStyled>
      <InputRangeStyled
        min={0}
        max={maxPrice}
        value={filters.minPrice}
        onChange={handleChange}
        id='price'
      />
      <InputRangeValueStyled>${filters.minPrice}</InputRangeValueStyled>
    </InputRangeContainerStyled>
  )
}
export default InputRange
