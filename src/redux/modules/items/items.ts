import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { initialState } from './utils'
import { Item } from '../../../interfaces/item'

const itemSlicer = createSlice({
  name: 'item',
  initialState,
  reducers: {
    getAllData: (state, action: PayloadAction<Item[]>) => {  
      if(state.items.length != 0) return state;
      action.payload.map(item => {
        state.items.push(item)
      })
    },
    getDetails: (state, action: PayloadAction<number>) => {
      state.itemSelected = action.payload
    },
    findItems: (state,action: PayloadAction<string>) =>{
      return state= {
            ...state,
            items:state.items.filter((item)=> item.title.includes(action.payload))
          }
       }
  }
})

export const { getDetails, findItems, getAllData } = itemSlicer.actions
export default itemSlicer.reducer