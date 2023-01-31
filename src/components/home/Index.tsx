import { useState, MouseEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { findItems } from '../../redux/modules/items/items';
import { RootState } from '../../redux/store';
import { Card } from '../card/Index';
import './style.css';


function Home() {
  const items = useSelector( ( state: RootState ) => state.item.items )
  const [ itemName,setItemName ] = useState('')
  const dispatch = useDispatch()

  const handleSumbit=() => {
    dispatch( findItems(itemName) )
  }

  return (
    <div className='bodyHome'>
      <form onSubmit={() => handleSumbit()}>
        <input placeholder="Enter product to search" className='browser' onChange={ (event) => setItemName(event.target.value) }/>
      </form>
      <div className='cards'>
        {
          items.map(
            item => 
              <Card
                key={ item.id }
                { ...item }
              />
          )
        }
      </div>
    </div>
  )
}

export default Home