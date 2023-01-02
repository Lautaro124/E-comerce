import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import { getAllData } from './redux/modules/items/items'
import service from './service/service'
import { Card } from './components/card/Index'
import data from './assets/data.json'


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
  }, []
  )
  return (
    <div className="App">
      {
        data.map(
          item => <Card
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            price={item.price}
          />
        )
      }

    </div>)
}