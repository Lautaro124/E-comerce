import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import { getItems } from './redux/modules/items/actions'
import Home from './components/home/Index'

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    getItems(dispatch)
  },[])

  return (
    <div className="cards">
      <Home />
    </div>)
}