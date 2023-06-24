import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const MyLinkStyled = styled(NavLink)`
  font-size: 1rem;

  &.active {
    color: var(--ui-2);
  }
`