import styled from "styled-components"

export const FooterStyled = styled.footer`
  width: 100%;
  padding: 2rem 0;
`

export const BoxInner = styled.div`
  width: min(100%, var(--max-w));
  margin-inline: auto;
`
export const LogoWrapper = styled.div`
  margin: 0 auto;
  width: max-content;
`
export const Info = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  gap: 1rem;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  flex: 1 1 250px;
`

export const Text = styled.span`
  font-weight: var(--semibold);
  color: var(--text-2);
  font-size: 14px;
`
