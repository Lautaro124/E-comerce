import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { findItems } from './redux/modules/items/items'
import { Card } from './components/card/Index'
import { RootState } from './redux/store'
import { getItems } from './redux/modules/items/actions'

export default function App() {
  const items=useSelector((state: RootState) => state.item)
  const [itemName,setItemName]=useState("");
  const dispatch = useDispatch()
  
  useEffect(()=>{
    getItems(dispatch)
  },[]) 
  const handleSumbit=()=>{
    dispatch(findItems(itemName));
  }

  return (
    <div className="cards">
      <div>
        <input onChange={(e)=>setItemName(e.target.value)}/>
        <button onClick={(e) => handleSumbit()}>Search</button>
      </div>
      {
        items.items.map(
          item => 
          <div key={item.id}>
            <Card
            {...item}
          />
          </div>
        )
      }

    </div>)
}