import styled from "styled-components"
import { ResetButton } from "../GlobalStyled/GlobalComponents"
import { md } from "../../utils/breakpoints.utility"

export const NavContainerStyled = styled.header`
  width: 100%;
  height: var(--h-nav);
  position: fixed;
  z-index: 99;
  top: 0;
  transition: background-color ease 300ms;
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);

  background-color: ${({ $showMenu, $scrolled, $showCart }) =>
    $showMenu || $scrolled || $showCart ? "var(--bg-2)" : "none"};
`

export const NavStyled = styled.nav`
  width: min(100%, var(--max-w));
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
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

export const NavCartStyled = styled(ResetButton)`
  position: relative;
`

export const NavCartLengthStyled = styled.span`
  position: absolute;
  top: -8px;
  left: -12px;
  display: block;
  color: var(--ui);
  font-weight: var(--semibold);
  font-size: 14px;
`
