import {
  NavCartLengthStyled,
  NavCartStyled,
  NavCloseStyled,
  NavContainerStyled,
  NavIconsStyled,
  NavStyled,
} from "./NavBarStyled"

import { useContext } from "react"
import { TfiAlignJustify, TfiClose, TfiShoppingCart } from "react-icons/tfi"
import { useSelector } from "react-redux"
import { MenuContext } from "../../context/MenuContext"
import { useNav } from "../../hooks/useNav"
import Logo from "../UI/Logo/Logo"
import NavCart from "./NavCart/NavCart"
import NavMenuDesktop from "./NavMenu/NavMenuDesktop"
import NavMenuMobile from "./NavMenu/NavMenuMobile"

const NavBar = () => {
  const { scrolled } = useNav()
  const { cart } = useSelector((state) => state.cart)
  const { toggleCart, toggleMenu, showMenu, showCart } = useContext(MenuContext)

  return (
    <NavContainerStyled
      $showMenu={showMenu}
      $scrolled={scrolled}
      $showCart={showCart}
    >
      <NavStyled>
        <Logo w="50px" />

        <NavMenuDesktop />
        <NavMenuMobile />

        <NavIconsStyled>
          <NavCartStyled onClick={toggleCart}>
            <TfiShoppingCart />
            {cart?.length > 0 && (
              <NavCartLengthStyled>{cart?.length}</NavCartLengthStyled>
            )}
          </NavCartStyled>

          <NavCloseStyled onClick={toggleMenu}>
            {showMenu ? <TfiClose /> : <TfiAlignJustify />}
          </NavCloseStyled>
        </NavIconsStyled>

        <NavCart />
      </NavStyled>
    </NavContainerStyled>
  )
}
export default NavBar
