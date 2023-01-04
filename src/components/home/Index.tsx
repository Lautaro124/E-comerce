import { useState, MouseEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { findItems } from '../../redux/modules/items/items';
import { RootState } from '../../redux/store';
import { Card } from '../card/Index';

function Home() {
  const items = useSelector( ( state: RootState ) => state.item.items )
  const [ itemName,setItemName ] = useState('')
  const dispatch = useDispatch()

  const handleSumbit=(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault()
    dispatch( findItems(itemName) )
  }

  return (
    <div>
      <div>
        <input onChange={ (e) => setItemName(e.target.value) }/>
        <button onClick={ (e) => handleSumbit(e) }>Search</button>
      </div>
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