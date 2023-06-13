import { useState } from 'react'
import { createContext } from 'react'

const Links = [
  { id: 1, text: 'Home', path: '/' },
  { id: 2, text: 'About', path: '/about' },
]

export const MenuContext = createContext()

const MenuProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [showCart, setShowCart] = useState(false)

  const toggleMenu = () => setShowMenu(!showMenu)
  const closeMenu = () => setShowMenu(false)

  const toggleCart = () => setShowCart(!showCart)

  const value = {
    Links,
    toggleMenu,
    showMenu,
    closeMenu,
    showCart,
    toggleCart,
  }
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}

export default MenuProvider
