import { useContext } from 'react'
import { useSelector } from 'react-redux'
import { FiltersContext } from '../context/FiltersContext'

export const useProducts = () => {
  const { filters, setFilters } = useContext(FiltersContext)

  let products = useSelector((state) => state.products.products)
  let isLoading = useSelector((state) => state.products.isLoading)
  let { maxPrice } = useSelector((state) => state.products)

  const filterProducts = () => {
    return products.filter((prod) => {
      return (
        prod.price >= filters.minPrice &&
        (filters.category === 'all' || prod.category === filters.category)
      )
    })
  }

  let filteredProducts = filterProducts()

  return { filteredProducts, isLoading, filters, setFilters, maxPrice }
}
