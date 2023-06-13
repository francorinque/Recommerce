import { weprovide_cards } from '../../utils/weprovide.utility'
import WeProvideCard from './WeProvideCard'
import {
  WeProvideStyled,
  WeProvideTitle,
  WeProvideCards,
} from './WeProvideStyled'

const WeProvide = () => {
  return (
    <WeProvideStyled>
      <WeProvideTitle as='h2'>We provide customer experience</WeProvideTitle>
      <WeProvideCards>
        {weprovide_cards.map((card) => (
          <WeProvideCard key={card.id} {...card} Icon={card.icon} />
        ))}
      </WeProvideCards>
    </WeProvideStyled>
  )
}
export default WeProvide
