import {
  Close,
  Container,
  Footer,
  Header,
  ProductsWrapper,
  Title,
  Empty,
  TotalPrice,
} from './NavCartStyled'

import { TfiClose } from 'react-icons/tfi'
import { useDispatch, useSelector } from 'react-redux'
import { MenuContext } from '../../../context/MenuContext'
import { clearCart } from '../../../redux/cart/cart.slice'
import Button from '../../UI/Button/Button'
import NavCartProduct from './NavCartProduct'
import { useContext } from 'react'
import { Price } from '../../GlobalStyled/GlobalComponents'

const NavCart = () => {
  const { closeAll, showCart } = useContext(MenuContext)
  const { cart } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  let total = cart?.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <>
      <Container $showCart={showCart}>
        <Header>
          <Title as="h3">My products</Title>
          <Close onClick={closeAll}>
            <TfiClose />
          </Close>
        </Header>

        {/* cards */}
        <ProductsWrapper>
          {cart?.length > 0 ? (
            cart.map((prod) => <NavCartProduct key={prod.id} prod={prod} />)
          ) : (
            <Empty>Cart Empty</Empty>
          )}
        </ProductsWrapper>
        <TotalPrice>
          <span>Total:</span>
          <Price>${total}</Price>
        </TotalPrice>
        <Footer>
          <Button
            warning
            onClick={() => dispatch(clearCart())}
            disabled={!cart.length}
          >
            Clear
          </Button>
          <Button disabled={!cart.length}>Buy</Button>
        </Footer>
      </Container>
    </>
  )
}
export default NavCart
