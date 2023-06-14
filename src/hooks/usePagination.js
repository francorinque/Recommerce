import { useState } from 'react'

const limit = 6

export const usePagination = () => {
  const [perPage, setPerPage] = useState(limit)

  const handlePrev = () => setPerPage((prev) => prev - limit)
  const handleNext = () => setPerPage((prev) => prev + limit)

  return { limit, perPage, handlePrev, handleNext }
}
