import styled from 'styled-components'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { md } from '../../../utils/breakpoints.utility'

export const NavMenuDesktopStyled = styled.div`
  justify-content: center;
  align-items: center;
  display: none;
  flex: 1;

  @media (${md}) {
    display: flex;
    gap: 1rem;
  }
`

export const NavMenuMobileStyled = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  align-items: center;
  position: fixed;
  top: var(--h-nav);
  right: 0;
  padding: 1.2rem 1rem;
  display: flex;
  flex-direction: column;
  background: var(--bg-2);
  border-radius: var(--radius);
`


