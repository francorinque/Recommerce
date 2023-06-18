import { ProductsStyled, ProductsTitleStyled } from './ProductsStyled'

import { useProducts } from '../../hooks'
//components
import ProductsCards from './ProductsCards/ProductsCards'
import ProductsFilter from './ProductsFilter/ProductsFilter'
import Loader from '../UI/Loader/Loader'

const Products = () => {
  const { isLoading } = useProducts()

  if (isLoading) {
    return <Loader />
  }

  return (
    <ProductsStyled>
      <ProductsTitleStyled>Our Products</ProductsTitleStyled>
      <ProductsFilter />
      <ProductsCards />
    </ProductsStyled>
  )
}
export default Products
