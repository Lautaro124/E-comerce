import './style.css'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { Link } from 'react-router-dom'
 const InterView = () => { 
  const item = useSelector( ( state: RootState ) => state.item.itemSelected)
  console.log(item);
  return(
    <div className='flexi'>
    <div className='containe'>
    <Link className='back' to='/'> {'< '}Back </Link>
     <img className='imagee' src={item?.image}/>
     <div className='price'>
      <h2>{item?.title}</h2> 
      <h4 className='txt'>$ {item?.price}</h4>
      <h6>{item?.description}</h6>
      <button className='move'>
        <img 
        src="https://cdn.discordapp.com/attachments/1010267684119793674/1057398320814887004/Icon.png"/>
           {'  '} Add To Bag
        </button>

     </div>
     <div className='description'>
      <h3 className='backk'>Descripcion</h3>
      <h4 >{item?.description}</h4>
     </div>
    </div>
    </div>
  )

}
export default InterView