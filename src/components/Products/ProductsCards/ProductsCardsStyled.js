import styled from 'styled-components'

export const ProductsCardsStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 350px));
  place-content: center;
  gap: 2rem;
`

export const ProductCardStyled = styled.div`
  border-radius: var(--radius);
  background-color: var(--bg-2);
  padding: 1rem;
`

export const ProductCardImgStyled = styled.img`
  height: 250px;
  border-radius: var(--radius-2);
`

export const ProductCardInfoStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`

export const ProductCardTitleStyled = styled.h4`
  font-weight: var(--semibold);
  font-size: clamp(1.2rem, 2vw, 1.3rem);
`

export const ProductCardBtnStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

export const ProductsCardsBtnsStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
`
