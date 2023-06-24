import {
  FooterStyled,
  BoxInner,
  LogoWrapper,
  TextWrapper,
  Info,
  Text,
} from "./FooterStyled.js"

import Logo from "../UI/Logo/Logo.jsx"
import { TfiLocationPin, TfiMobile, TfiEmail } from "react-icons/tfi"

const FooterLinks = [
  { id: 1, text: "Argentina,Buenos Aires", Icon: TfiLocationPin },
  { id: 2, text: "+54-11-22-33-44-55", Icon: TfiMobile },
  { id: 3, text: "ecommerce@gmail.com", Icon: TfiEmail },
]

const Footer = () => {
  return (
    <FooterStyled>
      <BoxInner>
        <LogoWrapper>
          <Logo w="120px" />
        </LogoWrapper>

        <Info>
          {FooterLinks.map(({ id, text, Icon }) => (
            <TextWrapper key={id}>
              {<Icon />}
              <Text>{text}</Text>
            </TextWrapper>
          ))}
        </Info>
      </BoxInner>
    </FooterStyled>
  )
}
export default Footer
