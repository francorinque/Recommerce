import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Subtitle, ResetButton } from '../../GlobalStyled/GlobalComponents'

export const Container = styled(motion.div)`
  position: fixed;
  top: var(--h-nav);
  right: 0;
  width: 100%;
  height: 100vh;
  max-width: 450px;
  background-color: var(--bg-2);
  padding: 1rem 1.5rem;
  z-index: 99;
  border-radius: var(--radius);
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
`

export const Title = styled(Subtitle)`
  font-size: 1.2rem;
`
export const Close = styled(ResetButton)``

export const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 400px;
  overflow-y: auto;
`

export const ProductWrapper = styled.div`
  width: 100%;
  padding: 1rem 0.8rem;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  grid-auto-columns: 1fr;
  align-items: center;
  column-gap: 1rem;
`
export const Texts = styled.div`
  text-align: start;
  width: 100%;

  h4 {
    font-size: clamp(0.8rem, 2vw, 1rem);
    font-weight: var(--semibold);
  }
  span {
    font-size: 0.7rem;
  }
`

export const QuantityWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const ImgWrapper = styled.figure`
  width: 70px;
  height: 70px;
  border-radius: var(--radius);
  overflow: hidden;
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
`

export const Empty = styled.span`
  font-size: 1.2rem;
  font-weight: var(--bold);
  text-align: center;
  color: var(--warning);
`
