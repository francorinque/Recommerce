import { useContext } from 'react'
import { NavMenuDesktopStyled, NavMenuLinkStyled } from './NavMenuStyled'
import { MenuContext } from '../../../context/MenuContext'

const NavMenuDesktop = () => {
  const { Links, closeAll } = useContext(MenuContext)

  return (
    <NavMenuDesktopStyled>
      {Links.map((link) => (
        <NavMenuLinkStyled key={link.id} to={link.path} onClick={closeAll}>
          {link.text}
        </NavMenuLinkStyled>
      ))}
    </NavMenuDesktopStyled>
  )
}
export default NavMenuDesktop
