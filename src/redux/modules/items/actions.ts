import { AnyAction, Dispatch } from "@reduxjs/toolkit"
import { Item } from "../../../interfaces/item"
import service from "../../../service/service"
import { getAllData, agregarItem, eliminarItem } from "./items"
import { useDispatch } from 'react-redux'


function Component() {
  const dispatch = useDispatch();

 
  const handleAgregar = (item:Item) => {
    dispatch(agregarItem(item));
  }

 
  const handleEliminar = (index:number) => {
    dispatch(eliminarItem(index));
  }

  
}
const action = {
  async getItems(dispatch: Dispatch<AnyAction>){
    try {
      const response = await service()
      const items: Item[] = response.map(
        item => ({
            id: item.id,
            title: item.title,
            price: item.price,
            description: item.description,
            category: item.category,
            image: item.image
          })
      )
      dispatch(getAllData(items))
    }
    catch(e){
      throw e
    }
  }
  
  
}

export const { getItems } = action