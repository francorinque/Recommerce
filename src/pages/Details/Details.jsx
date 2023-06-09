import { useParams } from 'react-router-dom'
import { useSingleProduct } from '../../hooks'
import { SingleProduct } from '../../components'

const Details = () => {
  const { id } = useParams()
  const { singleProduct, isLoading } = useSingleProduct({ productId: id })

  return (
    <div style={{ marginTop: '2.5rem', minHeight: '70vh' }}>
      <SingleProduct prod={singleProduct ?? {}} loading={isLoading} />
    </div>
  )
}
export default Details
