import { FC } from 'react'
import { Item } from '../../interfaces/item'
import './style.css'


const BagCard: FC<Item> = (item) => {
  return (
    <div className='cardBody' key={item.id}>
      <div>
        <img className='imageCard' src={item.image} alt="" />
      </div>
      <div className='cardInfo'>
        <div className='headerCard'>
          <h3 className='titleCardBag'>{item.title}</h3>
          <span className='categoriCard'>{item.category}</span>
        </div>
        <h6 className='decriptionCard'>{item.description}</h6>
        <span>$ {item.price}</span>
      </div>
    </div>
  )
}

export default BagCard