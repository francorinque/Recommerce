import {
  ProductWrapper,
  Texts,
  QuantityWrapper,
  ImgWrapper,
} from './NavCartStyled'

import { cutTitle } from '../../../utils/cutTitle.utility'
import Button from '../../UI/Button/Button'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../../../redux/cart/cart.slice'

let buttonSize = '30px'

const NavCartProduct = ({ prod }) => {
  const { id, thumbnail, title, price, quantity } = prod
  const dispatch = useDispatch()

  return (
    <ProductWrapper>
      <ImgWrapper>
        <img src={thumbnail} alt={title} />
      </ImgWrapper>
      <Texts>
        <h4>{cutTitle(title)}</h4>
        <span>
          $<strong>{price}</strong>
        </span>
      </Texts>
      <QuantityWrapper>
        <Button
          w={buttonSize}
          h={buttonSize}
          onClick={() => dispatch(removeFromCart(id))}
        >
          -
        </Button>
        <span>
          <strong>{quantity}</strong>
        </span>
        <Button
          w={buttonSize}
          h={buttonSize}
          onClick={() => dispatch(addToCart(prod))}
        >
          +
        </Button>
      </QuantityWrapper>
    </ProductWrapper>
  )
}
export default NavCartProduct
