import {
  LogoStyled,
  NavCloseStyled,
  NavStyled,
  NavIconsStyled,
  NavCartStyled,
} from './NavBarStyled'

import { TfiAlignJustify, TfiClose, TfiShoppingCart } from 'react-icons/tfi'
import { Link } from 'react-router-dom'
import { useNav } from '../../hooks/useNav'
import NavMenuMobile from './NavMenu/NavMenuMobile'
import NavMenuDesktop from './NavMenu/NavMenuDesktop'
import NavCart from './NavCart/NavCart'
import { useContext } from 'react'
import { MenuContext } from '../../context/MenuContext'

const NavBar = () => {
  const { scrolled } = useNav()
  const { toggleCart, toggleMenu, showMenu, showCart } = useContext(MenuContext)

  return (
    <NavStyled showMenu={showMenu} scrolled={scrolled} showCart={showCart}>
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
  )
}
export default NavBar
