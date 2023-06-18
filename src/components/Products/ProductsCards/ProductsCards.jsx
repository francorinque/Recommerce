import {
  ProductsCardsBtnsStyled,
  ProductsCardsStyled,
} from './ProductsCardsStyled'

import { TfiAngleDown, TfiAngleUp } from 'react-icons/tfi'
import { useSelector } from 'react-redux'
import { usePagination, useProducts } from '../../../hooks'
//components
import Button from '../../UI/Button/Button'
import ProductsCard from './ProductsCard'

const ProductsCards = () => {
  const { cart } = useSelector((state) => state.cart)
  const { filteredProducts } = useProducts()
  const { limit, perPage, handlePrev, handleNext } = usePagination()

  return (
    <>
      <ProductsCardsStyled>
        {filteredProducts.slice(0, perPage)?.map((prod) => {
          let inCart = cart?.find((el) => el.id === prod.id)
          return <ProductsCard key={prod.id} prod={prod} inCart={inCart} />
        })}
      </ProductsCardsStyled>

      <ProductsCardsBtnsStyled>
        <Button disabled={perPage === limit} onClick={handlePrev} secundary>
          <TfiAngleUp />
        </Button>
        <Button
          disabled={perPage >= filteredProducts?.length}
          onClick={handleNext}
          secundary
        >
          <TfiAngleDown />
        </Button>
      </ProductsCardsBtnsStyled>
    </>
  )
}
export default ProductsCards
