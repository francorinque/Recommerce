import styled from 'styled-components'
import { ResetButton } from '../GlobalStyled/GlobalComponents'
import { md } from '../../utils/breakpoints.utility'

export const NavStyled = styled.nav`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: min(100%, var(--max-w));
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--h-nav);
  padding: 0 1rem;
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  background-color: ${({ showMenu, scrolled, showCart }) =>
    showMenu || scrolled || showCart ? 'var(--bg-2)' : 'none'};
  transition: background-color ease 300ms;
`

export const LogoStyled = styled.div`
  font-size: clamp(2rem, 2vw, 2.5rem);
  font-weight: var(--bold);
`

export const NavCloseStyled = styled(ResetButton)`
  @media (${md}) {
    display: none;
  }
`
export const NavIconsStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.8rem;
`

export const NavCartStyled = styled(ResetButton)``
