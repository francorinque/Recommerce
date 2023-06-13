import styled from 'styled-components'
import { md } from '../../utils/breakpoints.utility'
import { TextGradient } from '../GlobalStyled/GlobalComponents'

export const HeroStyled = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (${md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const HeroTexts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const HeroTitleStyled = styled(TextGradient)`
  font-size: clamp(1.8rem, 2vw, 2.5rem);
  max-width: 500px;
  margin-inline: auto;
`

export const HeroImgStyled = styled.figure`
  width: 95%;
  margin: 0 auto;
  border-radius: var(--radius);
  overflow: hidden;
`
