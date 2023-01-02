import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { initialState } from './utils'
import { Item } from '../../../interfaces/item'

const itemSlicer = createSlice({
  name: 'item',
  initialState,
  reducers: {
    getAllData: (state, action: PayloadAction<Item[]>) => {  
      action.payload.map(item => {
        state.items.push(item)
      })
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