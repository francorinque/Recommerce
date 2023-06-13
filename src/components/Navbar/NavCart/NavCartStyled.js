import styled from 'styled-components'
import { motion } from 'framer-motion'

export const NavCartContainer = styled(motion.div)`
  position: fixed;
  top: var(--h-nav);
  right: 0;
  width: 100%;
  max-width: 400px;
  background-color: var(--bg-2);
  padding: 1rem;
  z-index: 99;
  border-radius: var(--radius);
`
