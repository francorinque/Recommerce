import Button from '../../UI/Button/Button'
import {
  ProductCardStyled,
  ProductCardImgStyled,
  ProductCardInfoStyled,
  ProductCardTitleStyled,
  ProductCardPriceStyled,
  ProductCardBtnStyled,
} from './ProductsCardsStyled'

import { TfiPlus } from 'react-icons/tfi'

const cutTitle = (str) => {
  return str.length > 16 ? `${str.substring(0, 16)}...` : str
}

const ProductsCard = ({ title, price, thumbnail }) => {
  return (
    <ProductCardStyled>
      <ProductCardImgStyled src={thumbnail} alt={title} />

      <ProductCardInfoStyled>
        <ProductCardTitleStyled>{cutTitle(title)}</ProductCardTitleStyled>
        <ProductCardPriceStyled>${price}</ProductCardPriceStyled>
      </ProductCardInfoStyled>

      <ProductCardBtnStyled>
        <Button w='40px' h='40px'>
          <TfiPlus />
        </Button>
      </ProductCardBtnStyled>
    </ProductCardStyled>
  )
}
export default ProductsCard
