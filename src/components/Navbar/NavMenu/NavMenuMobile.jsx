import { useContext } from 'react'
import { NavMenuMobileStyled, NavMenuLinkStyled } from './NavMenuStyled'

import { AnimatePresence } from 'framer-motion'
import { MenuContext } from '../../../context/MenuContext'

const NavMenuMobile = () => {
  const { Links, showMenu } = useContext(MenuContext)
  const menuMobileVariants = {
    closed: {
      scale: 0
    },
    open: {
      scale: 1,
      transition: { delay: 0.2 }
    },
    exit: { scale: 0 }
  }

  return (
    <AnimatePresence>
      {showMenu && (
        <NavMenuMobileStyled
          variants={menuMobileVariants}
          initial='closed'
          animate='open'
          exit='exit'
        >
          {Links.map((link) => (
            <NavMenuLinkStyled key={link.id} to={link.path}>
              {link.text}
            </NavMenuLinkStyled>
          ))}
        </NavMenuMobileStyled>
      )}
    </AnimatePresence>
  )
}
export default NavMenuMobile
