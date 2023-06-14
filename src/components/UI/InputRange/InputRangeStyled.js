import styled from 'styled-components'

export const InputRangeContainerStyled = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  align-items: center;
`

export const InpuRangeTitleStyled = styled.div`
  font-size: 1rem;
`

export const InputRangeStyled = styled.input.attrs({ type: 'range' })`
  outline: 0;
  height: 10px;
  border-radius: var(--radius);
  position: relative;
`

export const InputRangeValueStyled = styled.span`
  font-weight: var(--semibold);
`
