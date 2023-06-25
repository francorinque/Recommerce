import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { getSingleProduct } from "../data/api"

export const useSingleProduct = ({ productId }) => {
  const { products } = useSelector((state) => state.products)

  let productFound = products?.find((el) => el.id === productId)

  const [singleProduct, setSingleProduct] = useState(productFound)

  useEffect(() => {
    if (!singleProduct) {
      getSingleProduct({ productId }).then(setSingleProduct)
    }
  }, [singleProduct, productId])

  return {
    singleProduct,
  }
}
