import { useState } from 'react'
import { createContext } from 'react'

const Links = [
  { id: 1, text: 'Home', path: '/' },
  { id: 2, text: 'About', path: '/about' }
]

export const MenuContext = createContext()

const MenuProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [showCart, setShowCart] = useState(false)

  const closeAll = () => {
    if (showCart) {
      setShowCart(false)
    }
    if (showMenu) {
      setShowMenu(false)
    }
  }

  const toggleMenu = () => {
    setShowMenu(!showMenu)
    closeAll()
  }

  const toggleCart = () => {
    setShowCart(!showCart)
    closeAll()
  }

  const value = {
    Links,
    toggleMenu,
    showMenu,
    showCart,
    toggleCart,
    closeAll
  }
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}

export default MenuProvider
