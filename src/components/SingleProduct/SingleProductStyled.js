import styled from 'styled-components'
import { md } from '../../utils/breakpoints.utility'
import { Subtitle } from '../GlobalStyled/GlobalComponents'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (${md}) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 400px;
  }
`
export const ImgWrapper = styled.figure`
  overflow: hidden;
  border-radius: var(--radius);
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

export const Title = styled(Subtitle)`
  margin: 0;
`

export const Desc = styled.p`
  color: var(--text-2);
  font-size: 14px;
`

export const SmallTexts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const BtnsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  align-items: center;

  @media (${md}) {
    margin-top: auto;
  }
`
