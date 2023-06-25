import {
  ProductCardStyled,
  ProductCardImgStyled,
  ProductCardInfoStyled,
  ProductCardTitleStyled,
  ProductCardBtnStyled,
} from "./ProductsCardsStyled"

import { cutTitle } from "../../../utils/cutTitle.utility"
import Add from "../../UI/Add/Add"
import { Link } from "react-router-dom"
import { Price } from "../../GlobalStyled/GlobalComponents"

const ProductsCard = ({ prod, inCart }) => {
  const { id, title, price, thumbnail } = prod

  return (
    <ProductCardStyled>
      <Link to={`/details/${id}`}>
        <ProductCardImgStyled src={thumbnail} alt={title} loading="lazy" />
      </Link>

      <Link to={`/details/${id}`}>
        <ProductCardInfoStyled>
          <ProductCardTitleStyled>{cutTitle(title)}</ProductCardTitleStyled>
          <Price>${price}</Price>
        </ProductCardInfoStyled>
      </Link>

      <ProductCardBtnStyled>
        <Add inCart={inCart} prod={prod} id={id} />
      </ProductCardBtnStyled>
    </ProductCardStyled>
  )
}
export default ProductsCard
