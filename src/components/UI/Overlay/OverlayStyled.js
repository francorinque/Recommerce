import styled from 'styled-components'

export const OverlayStyled = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 98;
  opacity: ${({ showCart, showMenu }) => (showCart || showMenu ? 0.9 : 0)};
  transition: opacity ease 300ms;
  visibility: ${({ showCart, showMenu }) =>
    showCart || showMenu ? 'visible' : 'hidden'};

  background: rgba(175, 175, 175, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(5px);
`
