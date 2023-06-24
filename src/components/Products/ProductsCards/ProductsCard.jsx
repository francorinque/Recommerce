import Button from "../../UI/Button/Button"
import {
  ProductCardStyled,
  ProductCardImgStyled,
  ProductCardInfoStyled,
  ProductCardTitleStyled,
  ProductCardPriceStyled,
  ProductCardBtnStyled,
} from "./ProductsCardsStyled"

import { TfiPlus, TfiClose } from "react-icons/tfi"
import { useDispatch } from "react-redux"
import { addToCart, removeFromCart } from "../../../redux/cart/cart.slice"
import { cutTitle } from "../../../utils/cutTitle.utility"

let buttonSize = "30px"

const ProductsCard = ({ prod, inCart }) => {
  const { id, title, price, thumbnail } = prod
  const dispatch = useDispatch()

  return (
    <ProductCardStyled>
      <ProductCardImgStyled src={thumbnail} alt={title} loading="lazy" />

      <ProductCardInfoStyled>
        <ProductCardTitleStyled>{cutTitle(title)}</ProductCardTitleStyled>
        <ProductCardPriceStyled>${price}</ProductCardPriceStyled>
      </ProductCardInfoStyled>

      <ProductCardBtnStyled>
        {inCart ? (
          <Button
            w={buttonSize}
            h={buttonSize}
            warning
            onClick={() => dispatch(removeFromCart(id))}
          >
            <TfiClose />
          </Button>
        ) : (
          <Button
            w={buttonSize}
            h={buttonSize}
            onClick={() => dispatch(addToCart(prod))}
          >
            <TfiPlus />
          </Button>
        )}
      </ProductCardBtnStyled>
    </ProductCardStyled>
  )
}
export default ProductsCard
