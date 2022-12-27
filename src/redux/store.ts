import { configureStore } from '@reduxjs/toolkit'
import itemSlicer from './modules/items/items'

export const store = configureStore({
  reducer: {
    item: itemSlicer
  },
})