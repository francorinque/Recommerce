import { useSelector } from 'react-redux'
import { InputSelectStyled, InputSelectOptionStyled } from './InputSelectStyled'
import { useProducts } from '../../../hooks'

const InputSelect = () => {
  const { products } = useSelector((state) => state.products)
  const { setFilters } = useProducts()

  let categories = ['all', ...new Set(products?.map((el) => el.category))]

  const handleCategoryChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      category: e.target.value,
    }))
  }

  return (
    <InputSelectStyled onChange={handleCategoryChange}>
      {categories?.map((category, index) => (
        <InputSelectOptionStyled key={index} value={category}>
          {category}
        </InputSelectOptionStyled>
      ))}
    </InputSelectStyled>
  )
}
export default InputSelect
