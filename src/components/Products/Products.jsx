import { ProductsStyled, ProductsTitleStyled } from './ProductsStyled'

import { useProducts } from '../../hooks'
//components
import ProductsCards from './ProductsCards/ProductsCards'
import ProductsFilter from './ProductsFilter/ProductsFilter'
import Loader from '../UI/Loader/Loader'
import { useRef, useContext, useEffect } from 'react'
import { RectContext } from '../../context/RectContext'

const Products = () => {
  const { isLoading } = useProducts()
  const { setRect } = useContext(RectContext)
  const productsRef = useRef()

  useEffect(() => {
    setRect(productsRef?.current.getBoundingClientRect().y)
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <ProductsStyled ref={productsRef}>
      <ProductsTitleStyled>Our Products</ProductsTitleStyled>
      <ProductsFilter />
      <ProductsCards />
    </ProductsStyled>
  )
}
export default Products
