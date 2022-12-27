import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { initialState } from './utils'
import { ItemState } from '../../../interfaces/item'

const itemSlicer = createSlice({
  name: 'item',
  initialState,
  reducers: {
    getAllData: (state, action: PayloadAction<ItemState>) => {
      
    },
    getDetails: (state, action: PayloadAction<number>) => {
      state.itemSelected = action.payload
    },
    getItems: (state) =>{
      
    }
  }
})

export const { getDetails, getItems, getAllData } = itemSlicer.actions
export default itemSlicer.reducer