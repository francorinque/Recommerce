import Button from "../Button/Button"
import { TfiPlus, TfiClose } from "react-icons/tfi"
import { addToCart, removeFromCart } from "../../../redux/cart/cart.slice"
import { useDispatch } from "react-redux"

const Add = ({ id, prod, inCart, buttonSize = "30px" }) => {
  const dispatch = useDispatch()

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
