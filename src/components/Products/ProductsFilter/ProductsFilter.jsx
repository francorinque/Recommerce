import { ProductsFilterStyled } from './ProductsFilterStyled'

import InputRange from '../../UI/InputRange/InputRange'
import InputSelect from '../../UI/InputSelect/InputSelect'

const ProductsFilter = () => {
  return (
    <ProductsFilterStyled>
      <InputRange title='Min Price:' />
      <InputSelect />
    </ProductsFilterStyled>
  )
}
export default ProductsFilter
