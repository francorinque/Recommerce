import {
  WeProvideStyled,
  WeProvideTitle,
  WeProvideCards
} from './WeProvideStyled'

import { useNearScreen } from '../../hooks/useNearScreen'
import { weprovide_cards } from '../../utils/weprovide.utility'
import WeProvideCard from './WeProvideCard'
import { useRef } from 'react'

const WeProvide = () => {
  const elementRef = useRef(null)
  const { isNearScreen } = useNearScreen({
    once: true,
    externalRef: elementRef
  })

  return (
    <WeProvideStyled>
      <WeProvideTitle as='h2'>We provide customer experience</WeProvideTitle>
      <WeProvideCards ref={elementRef}>
        {weprovide_cards.map((card) => (
          <WeProvideCard
            key={card.id}
            {...card}
            Icon={card.icon}
            $isNearScreen={isNearScreen}
          />
        ))}
      </WeProvideCards>
    </WeProvideStyled>
  )
}
export default WeProvide
