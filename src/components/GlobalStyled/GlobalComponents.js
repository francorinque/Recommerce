import styled from 'styled-components'

export const TextGradient = styled.h1`
  background: -webkit-linear-gradient(1deg, var(--text), #9ca3af);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const ResetButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  user-select: none;
  background: none;
  color: var(--text);
  display: grid;
  place-items: center;
  font-size: 1.5rem;
`
