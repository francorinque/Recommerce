import { useState } from 'react'
import { createContext } from 'react'

export const FiltersContext = createContext()

const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    minPrice: 0,
    category: 'all'
  })

  const value = {
    filters,
    setFilters
  }

  return (
    <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>
  )
}

export default FiltersProvider
