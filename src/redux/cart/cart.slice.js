import { createSlice } from '@reduxjs/toolkit'
import {
  handleAddToCart,
  handleRemoveFromCart,
  handleClearCart,
} from './cart-utils'

const initialState = {
  cart: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      return {
        cart: handleAddToCart({ arr: state.cart, newProduct: action.payload }),
      }
    },
    removeFromCart: (state, action) => {
      return {
        cart: handleRemoveFromCart({
          arr: state.cart,
          productId: action.payload,
        }),
      }
    },
    clearCart: (state) => {
      return {
        cart: handleClearCart({ arr: state.cart }),
      }
    },
  },
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
