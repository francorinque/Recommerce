import {
  Wrapper,
  ImgWrapper,
  Info,
  Title,
  Desc,
  SmallTexts,
  BtnsWrapper,
} from './SingleProductStyled'

import Add from '../UI/Add/Add'
import Button from '../UI/Button/Button'
import { Price } from '../GlobalStyled/GlobalComponents'
import Loader from '../UI/Loader/Loader'

const SingleProduct = ({ prod, loading }) => {
  const { id, thumbnail, title, description, brand, price } = prod

  if (loading) {
    return <Loader />
  }

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
          <Add id={id} prod={prod} buttonSize="40px" />
          <Button>Buy</Button>
        </BtnsWrapper>
      </Info>
    </Wrapper>
  )
}
export default SingleProduct
