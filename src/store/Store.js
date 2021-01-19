import itemReducer from './Reducer'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: itemReducer
  })

export default store;