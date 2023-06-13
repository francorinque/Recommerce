import {
  WeProvideCardStyled,
  WCardIconStyled,
  WCardTitleStyled,
  WCardParagraphStyled,
} from './WeProvideStyled'

const WeProvideCard = ({ title, paragraph, Icon }) => {
  return (
    <WeProvideCardStyled>
      <WCardIconStyled>{<Icon />}</WCardIconStyled>
      <WCardTitleStyled>{title}</WCardTitleStyled>
      <WCardParagraphStyled>{paragraph}</WCardParagraphStyled>
    </WeProvideCardStyled>
  )
}
export default WeProvideCard
