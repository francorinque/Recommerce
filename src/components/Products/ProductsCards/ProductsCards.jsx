import {
  ProductsCardsStyled,
  ProductsCardsBtnsStyled,
} from './ProductsCardsStyled'

import { usePagination, useProducts } from '../../../hooks'
import ProductsCard from './ProductsCard'
import Button from '../../UI/Button/Button'
import { TfiAngleDown, TfiAngleUp } from 'react-icons/tfi'

const ProductsCards = () => {
  const { filteredProducts } = useProducts()
  const { limit, perPage, handlePrev, handleNext } = usePagination()

  return (
    <>
      <ProductsCardsStyled>
        {filteredProducts.slice(0, perPage)?.map((prod) => (
          <ProductsCard key={prod.id} {...prod} />
        ))}
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
