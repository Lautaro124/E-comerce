import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import { getItems } from './redux/modules/items/actions'
import Home from './components/home/Index'
import { LeftBar } from './components/leftBar'
import Cart from './components/cart/Index'

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    getItems(dispatch)
  },[])

  return (
    <div className="body">
      <LeftBar />
      <Home />
      <Cart />
    </div>
  )
}