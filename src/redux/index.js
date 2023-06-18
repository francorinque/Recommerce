import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { productsSlice } from './products/products.slice'
import { cartSlice } from './cart/cart.slice'
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/es/persistStore'
import storage from 'redux-persist/lib/storage'

const reducers = combineReducers({
  products: productsSlice.reducer,
  cart: cartSlice.reducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
}
const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})

export const persistor = persistStore(store)
