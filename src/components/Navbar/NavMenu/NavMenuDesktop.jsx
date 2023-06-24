import { useContext } from 'react'
import { NavMenuDesktopStyled } from './NavMenuStyled'
import { MenuContext } from '../../../context/MenuContext'
import MyLink from '../../UI/MyLink/MyLink'

const NavMenuDesktop = () => {
  const { Links } = useContext(MenuContext)

  return (
    <NavMenuDesktopStyled>
      {Links.map((link) => (
        <MyLink key={link.id} to={link.path}>
          {link.text}
        </MyLink>
      ))}
    </NavMenuDesktopStyled>
  )
}
export default NavMenuDesktop
