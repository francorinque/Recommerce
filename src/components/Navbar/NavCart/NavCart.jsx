import { useContext } from 'react'
import { NavCartContainer } from './NavCartStyled'
import { AnimatePresence } from 'framer-motion'
import { MenuContext } from '../../../context/MenuContext'

const NavCart = () => {
  const { showCart } = useContext(MenuContext)

  const cartVariants = {
    closed: {
      translateX: 600,
    },
    open: {
      translateX: 0,
      transition: { delay: 0.1 },
    },
  }

  return (
    <>
      <AnimatePresence>
        <NavCartContainer
          variants={cartVariants}
          animate={showCart ? 'open' : 'closed'}
        >
          <div>cart</div>
        </NavCartContainer>
      </AnimatePresence>
    </>
  )
}
export default NavCart
