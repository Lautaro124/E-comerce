import { FC } from 'react'
import { Item } from '../../interfaces/item'
import './style.css'

const BagCard: FC<Item> = (item) => {
  return (
    <div className='cardBody' key={item.id}>
      <div>
        <img className='imageCard' src={ item.image } alt="" />
      </div>
      <div>
        <div>
          <h3 className='titleCard'>{ item.title }</h3>
          <span>{ item.category }</span>
        </div>
        <h6>{ item.description }</h6>
        <div>
          <span>{ item.price }</span>
        </div>
      </div>
    </div>
  )
}

export default BagCard