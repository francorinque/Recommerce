import styled from 'styled-components'
import { Subtitle } from '../GlobalStyled/GlobalComponents'

export const WeProvideStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const WeProvideTitle = styled(Subtitle)`
  text-align: center;
  max-width: 400px;
  margin-inline: auto;
`

export const WeProvideCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
`

export const WeProvideCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
`

export const WCardIconStyled = styled.div`
  width: 40px;
  height: 40px;
  display: grid;
  font-size: var(--size-icon);
  place-items: center;
  background-color: var(--bg-2);
  border-radius: var(--radius);
`

export const WCardTitleStyled = styled.h3``

export const WCardParagraphStyled = styled.p`
  color: var(--text-2);
  max-width: 300px;
`
