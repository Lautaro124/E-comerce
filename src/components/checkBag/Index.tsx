import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import BagCard from '../bagCard/Index'
import './style.css'

const CheckBag = () => {
  const cart = useSelector( (state: RootState) => state.item.cart )

  return (
    <div className='bodyHome bagHome'>
      <h2>Check your Bag Items</h2>
      <div className='bagHome'>
        {
          cart.map( 
            (items) => <BagCard { ...items } />
          )
        }
      </div>
    </div>
  )
}

export default CheckBag