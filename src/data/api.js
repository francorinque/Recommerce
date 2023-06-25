import axios from "axios"
import {
  setProducts,
  startProducts,
  errorProducts,
} from "../redux/products/products.slice"

const API = axios.create({
  baseURL: "https://dummyjson.com/products",
})

export const getSingleProduct = async ({ productId }) => {
  try {
    const { data } = await API.get(`/${productId}`)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getAllProducts = () => {
  return async (dispatch) => {
    dispatch(startProducts())
    try {
      const { data } = await API.get()
      dispatch(setProducts(data.products))
    } catch (error) {
      dispatch(errorProducts(error))
    }
  }
}
