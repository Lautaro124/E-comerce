import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { findItems, getAllData } from './redux/modules/items/items'
import service from './service/service'
import { Card } from './components/card/Index'
import { RootState } from './redux/store'

export default function App() {
  const items=useSelector((state: RootState) => state.item)
  const [itemName,setItemName]=useState("");
  const dispatch = useDispatch()
  useEffect(()=>{
    if(items.items.length != 0) return
    service().then(info => {
        const ite = info.map(item => {
          return {
            id: item.id,
            title: item.title,
            price: item.price,
            description: item.description,
            category: item.category,
            image: item.image
          }
        })
        dispatch(getAllData(ite))
    })
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
            title={item.title}
            description={item.description}
            image={item.image}
            price={item.price}
          />
          </div>
        )
      }

    </div>)
}