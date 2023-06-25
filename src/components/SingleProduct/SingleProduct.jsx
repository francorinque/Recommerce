import {
  Wrapper,
  ImgWrapper,
  Info,
  Title,
  Desc,
  SmallTexts,
  BtnsWrapper,
} from "./SingleProductStyled"

import Add from "../UI/Add/Add"
import Button from "../UI/Button/Button"
import { useSelector } from "react-redux"
import { Price } from "../GlobalStyled/GlobalComponents"

const SingleProduct = ({ prod }) => {
  const { id, thumbnail, title, description, brand, price } = prod
  const { cart } = useSelector((state) => state.cart)
  let inCart = cart?.find((el) => el.id === id)

  return (
    <Wrapper>
      <ImgWrapper>
        <img src={thumbnail} alt={`details of product ${title}`} />
      </ImgWrapper>

      <Info>
        <Title>{title}</Title>
        <Desc>{description}</Desc>
        <SmallTexts>
          <small>{brand}</small>
          <Price>${price}</Price>
        </SmallTexts>

        <BtnsWrapper>
          <Add inCart={inCart} id={id} prod={prod} buttonSize="40px" />
          <Button>Buy</Button>
        </BtnsWrapper>
      </Info>
    </Wrapper>
  )
}
export default SingleProduct
