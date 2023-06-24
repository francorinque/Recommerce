import { MyLinkStyled } from "./MyLinkStyled"

const MyLink = ({ children, to }) => {
  return <MyLinkStyled to={to}>{children}</MyLinkStyled>
}
export default MyLink
