import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export const ButtonStyled = styled(motion.button)`
  border: none;
  outline: none;
  cursor: pointer;
  user-select: none;
  background-color: var(--ui);
  color: var(--bg-2);
  border-radius: var(--radius);
  width: ${({ w }) => (w ? w : '110px')};
  height: ${({ h }) => (h ? h : '40px')};
  display: grid;
  place-items: center;
  font-size: 1rem;
  font-weight: var(--semibold);

  &:disabled {
    opacity: 50%;
    cursor: not-allowed;
    filter: grayscale(0.4);
  }

  ${({ secundary }) =>
    secundary &&
    css`
      background-color: transparent;
      outline: thin solid var(--ui);
      color: var(--ui);
    `}

  ${({ warning }) =>
    warning &&
    css`
      background-color: var(--warning);
      color: var(--text);
    `}
`
