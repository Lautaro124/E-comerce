import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { initialState } from './utils'
import { Item } from '../../../interfaces/item'


const itemSlicer = createSlice({
  name: 'item',
  initialState,
  reducers: {
    getAllData: (state, action: PayloadAction<Item[]>) => {  
      return state = {
        ...state,
        items: action.payload,
      }
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
      agregarItem: (state, action: PayloadAction<Item>) => {

        state.carrito.push(action.payload)
      },
      eliminarItem: (state, action: PayloadAction<number>) => {
        
        state.carrito.splice(action.payload, 1);
      }
  
  }
})

export const { getDetails, findItems, getAllData, agregarItem, eliminarItem } = itemSlicer.actions
export default itemSlicer.reducer



    
   