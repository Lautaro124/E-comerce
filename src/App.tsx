import './App.css'
import {Card} from './components/card/Index'
import data from './assets/data.json'

function App() {

  return (
    <div className="App">
        {
          data.map( 
            item => <Card 
              title={item.title} 
              description={item.description}
              image={item.image} 
              price={item.price}
              />
          )
        }
    </div>
  )
}

export default App
