import { useContext } from 'react'
import { NavMenuDesktopStyled, NavMenuLinkStyled } from './NavMenuStyled'
import { MenuContext } from '../../../context/MenuContext'

const NavMenuDesktop = () => {
  const { Links } = useContext(MenuContext)

  return (
    <NavMenuDesktopStyled>
      {Links.map((link) => (
        <NavMenuLinkStyled key={link.id} to={link.path}>
          {link.text}
        </NavMenuLinkStyled>
      ))}
    </NavMenuDesktopStyled>
  )
}
export default NavMenuDesktop
