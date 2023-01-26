import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import './style.css'
import{Link} from 'react-router-dom'

const Cart = () => {
  const cartsItems = useSelector((state: RootState) => state.item.cart)
  
  return (
    <div className='cartBody'>
      <h2 className='titleCard'>Bag</h2>
      <div className='CartImages'>
        {
          cartsItems.map( (item, index) => (
            <img
              key={index + 'Cart'}
              className='cardImages'
              src={ item.image }
              alt='No hay imagen'
            />
          ))
        }
      </div>
      <Link to='/bag'>
        <button>View Bag</button>
      </Link>
    </div>
  )
}

export default Cart