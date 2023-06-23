import Button from '../UI/Button/Button'
import {
  HeroImgStyled,
  HeroStyled,
  HeroTexts,
  HeroTitleStyled
} from './HeroStyled'

import HeroImg from '../../assets/hero-img.jpg'
import { useContext } from 'react'
import { RectContext } from '../../context/RectContext'

const Hero = () => {
  const { rect } = useContext(RectContext)

  return (
    <HeroStyled>
      <HeroTexts>
        <HeroTitleStyled>The best price, just a click away</HeroTitleStyled>
        <Button onClick={() => window.scrollTo({ top: rect })}>See now</Button>
      </HeroTexts>

      <HeroImgStyled>
        <img src={HeroImg} alt='photo banner' />
      </HeroImgStyled>
    </HeroStyled>
  )
}
export default Hero
