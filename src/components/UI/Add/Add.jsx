import Button from '../Button/Button'

import { TfiPlus, TfiClose } from 'react-icons/tfi'
import { addToCart, removeFromCart } from '../../../redux/cart/cart.slice'
import { useDispatch, useSelector } from 'react-redux'

const Add = ({ id, prod, buttonSize = '30px' }) => {
  const dispatch = useDispatch()
  const { cart } = useSelector((state) => state.cart)
  let inCart = cart?.find((el) => el.id === id)

  return inCart ? (
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
  )
}
export default Add
