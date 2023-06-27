import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getSingleProduct } from '../data/api'

export const useSingleProduct = ({ productId }) => {
  const { products } = useSelector((state) => state.products)

  let productFound = products?.find((el) => el.id === productId)

  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [singleProduct, setSingleProduct] = useState(productFound)

  useEffect(() => {
    if (!singleProduct) {
      setIsLoading(true)
      getSingleProduct({ productId })
        .then(setSingleProduct)
        .catch(setIsError)
        .finally(() => setIsLoading(false))
    }
  }, [singleProduct, productId])

  return {
    singleProduct,
    isLoading,
    isError,
  }
}
