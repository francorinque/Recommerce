import {
  LogoStyled,
  NavCartStyled,
  NavCloseStyled,
  NavContainerStyled,
  NavIconsStyled,
  NavStyled,
} from './NavBarStyled'

import { useContext } from 'react'
import { TfiAlignJustify, TfiClose, TfiShoppingCart } from 'react-icons/tfi'
import { Link } from 'react-router-dom'
import { MenuContext } from '../../context/MenuContext'
import { useNav } from '../../hooks/useNav'
import NavCart from './NavCart/NavCart'
import NavMenuDesktop from './NavMenu/NavMenuDesktop'
import NavMenuMobile from './NavMenu/NavMenuMobile'

const NavBar = () => {
  const { scrolled } = useNav()
  const { toggleCart, toggleMenu, showMenu, showCart } = useContext(MenuContext)

  return (
    <NavContainerStyled
      showMenu={showMenu}
      scrolled={scrolled}
      showCart={showCart}
    >
      <NavStyled>
        <LogoStyled>
          <Link to='/'>R</Link>
        </LogoStyled>

        <NavMenuDesktop />
        <NavMenuMobile />

        <NavIconsStyled>
          <NavCartStyled onClick={toggleCart}>
            <TfiShoppingCart />
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
