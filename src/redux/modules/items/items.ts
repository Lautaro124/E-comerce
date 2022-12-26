import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { initialState } from './utils'

const itemSlicer = createSlice({
  name: 'item',
  initialState,
  reducers: {
    getDetails: (state, action: PayloadAction<number>) => {
      state.itemSelected = action.payload
    },
    getItems: (state) =>{
      
    }
  }
})

export const { getDetails, getItems } = itemSlicer.actions
export default itemSlicer.reducer