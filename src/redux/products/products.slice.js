import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  error: false,
  products: [],
  maxPrice: 0,
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    startProducts: (state) => {
      return {
        ...state,
        isLoading: true,
      }
    },
    setProducts: (state, action) => {
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        maxPrice: Math.max(...action.payload.map((el) => el.price)),
      }
    },
    errorProducts: (state, action) => {
      return { ...state, isLoading: false, error: action.payload }
    },
  },
})

export const { startProducts, setProducts, errorProducts } =
  productsSlice.actions
