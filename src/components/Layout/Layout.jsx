import { LayoutStyled } from "./LayoutStyled"

import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import { MenuContext } from "../../context/MenuContext"
import { useContext } from "react"

const Layout = ({ children }) => {
  const { pathname } = useLocation()
  const { closeAll } = useContext(MenuContext)

  useEffect(() => {
    closeAll()
    window.scrollTo({ top: 0 })
  }, [pathname])

  return <LayoutStyled>{children}</LayoutStyled>
}
export default Layout
