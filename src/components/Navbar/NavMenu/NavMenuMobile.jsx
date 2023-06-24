import { useContext } from "react"
import { NavMenuMobileStyled } from "./NavMenuStyled"

import { AnimatePresence } from "framer-motion"
import { MenuContext } from "../../../context/MenuContext"
import MyLink from "../../UI/MyLink/MyLink"

const NavMenuMobile = () => {
  const { Links, showMenu } = useContext(MenuContext)
  const menuMobileVariants = {
    closed: {
      scale: 0,
    },
    open: {
      scale: 1,
      transition: { delay: 0.2 },
    },
    exit: { scale: 0 },
  }

  return (
    <AnimatePresence>
      {showMenu && (
        <NavMenuMobileStyled
          variants={menuMobileVariants}
          initial="closed"
          animate="open"
          exit="exit"
        >
          {Links.map((link) => (
            <MyLink key={link.id} to={link.path}>
              {link.text}
            </MyLink>
          ))}
        </NavMenuMobileStyled>
      )}
    </AnimatePresence>
  )
}
export default NavMenuMobile
