import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { productsSlice } from './products/products.slice'

const rootReducer = combineReducers({
  products: productsSlice.reducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store
