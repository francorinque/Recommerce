import { LogoStyled } from "./LogoStyled"
import LOGO from "../../../assets/logo.png"
import { Link } from "react-router-dom"

const Logo = ({ w }) => {
  return (
    <LogoStyled $w={w}>
      <Link to="/">
        <img src={LOGO} alt="logo website ecommerce" />
      </Link>
    </LogoStyled>
  )
}
export default Logo
