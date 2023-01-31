import { useDispatch } from 'react-redux'
import { Item } from '../../interfaces/item'
import { addCart, getDetails } from '../../redux/modules/items/items'
import './style.css'
import { useNavigate } from 'react-router-dom';
import Compra from '../compra/Compra';

export const Card = (item: Item) => {
    const dispatch = useDispatch()
    let history = useNavigate();

    function handleClick() {
        dispatch(getDetails(item))
        history('/interView');
    }

    return (
        <button className='container' onClick={handleClick}>
            <div className='imageContainer'>
                <img
                    className='cover'
                    src={item.image}
                />
            </div>
            <div className='titlesContainer'>
                <p className='bodyNormalMedium second'>{item.title}</p>
                <p className=' bodySmall second third'>{item.description}</p>
            </div>
            <div className='buyDataContainer'>
                <div className='buyData'>
                    <p className='bodyNormalMedium'>${item.price}</p>
                    <Compra {...item}/>
                </div>
            </div>
        </button>

    )
}
