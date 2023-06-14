import {
  WeProvideCardStyled,
  WCardIconStyled,
  WCardTitleStyled,
  WCardParagraphStyled,
} from './WeProvideStyled'

const WeProvideCard = ({ id, title, paragraph, Icon, isNearScreen }) => {
  return (
    <WeProvideCardStyled isNearScreen={isNearScreen} >
      <WCardIconStyled>{<Icon />}</WCardIconStyled>
      <WCardTitleStyled>{title}</WCardTitleStyled>
      <WCardParagraphStyled>{paragraph}</WCardParagraphStyled>
    </WeProvideCardStyled>
  )
}
export default WeProvideCard
