import { ProductsStyled, ProductsTitleStyled } from './ProductsStyled'

import ProductsFilter from './ProductsFilter/ProductsFilter'
import ProductsCards from './ProductsCards/ProductsCards'

const Products = () => {
  return (
    <ProductsStyled>
      <ProductsTitleStyled>Our Products</ProductsTitleStyled>
      <ProductsFilter />
      <ProductsCards />
    </ProductsStyled>
  )
}
export default Products
