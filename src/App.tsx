import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import { getAllData } from './redux/modules/items/items'
import service from './service/service'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    service().then(info => {
      const items = info.map(item => {
        return {
          id: item.id,
          title: item.title,
          price: item.price,
          description: item.description,
          category: item.category
        }
      })

      dispatch(getAllData(items))
    })
  },[]
  )

  return (
    <div className="App">
    </div>
  )
}

export default App
