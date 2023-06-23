import { OverlayStyled } from './OverlayStyled'

import { useContext } from 'react'
import { MenuContext } from '../../../context/MenuContext'

const Overlay = () => {
  const { showCart, showMenu, closeAll } = useContext(MenuContext)

  return (
    <OverlayStyled
      $showCart={showCart}
      $showMenu={showMenu}
      onClick={closeAll}
    />
  )
}
export default Overlay
