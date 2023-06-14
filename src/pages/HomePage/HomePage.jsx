import { Hero, Products, WeProvide } from '../../components'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllProducts } from '../../data/api'

const HomePage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])

  return (
    <>
      <Hero />
      <WeProvide />
      <Products />
    </>
  )
}
export default HomePage
