import Button from '../UI/Button/Button'
import {
  HeroStyled,
  HeroTexts,
  HeroTitleStyled,
  HeroImgStyled,
} from './HeroStyled'

import HeroImg from '../../assets/hero-img.jpg'

const Hero = () => {
  return (
    <HeroStyled>
      <HeroTexts>
        <HeroTitleStyled>Elevate your style with our products</HeroTitleStyled>
        <Button>Buy now</Button>
      </HeroTexts>

      <HeroImgStyled>
        <img src={HeroImg} alt='photo banner' />
      </HeroImgStyled>
    </HeroStyled>
  )
}
export default Hero
