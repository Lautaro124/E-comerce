import { useDispatch } from 'react-redux'
import { Item } from '../../interfaces/item'
import { addCart } from '../../redux/modules/items/items'
import './style.css'

export const Card = (item: Item) => {
    const dispatch = useDispatch()
    const addCard = () => {
        dispatch(addCart(item))
    }

    return (
        <button className='container' onClick={() => console.log(item.title)}>
            <div className='imageContainer'>
                <img 
                    className='cover'
                    src={item.image} 
                />
            </div>
            <div className='titlesContainer'>
                <p className='bodyNormalMedium second'>{ item.title }</p>
                <p className=' bodySmall second third'>{item.description}</p>
            </div>
            <div className='buyDataContainer'>
                <div className='buyData'>
                    <p className='bodyNormalMedium'>${item.price}</p>
                    <button className='bottonCompra' onClick={addCard}>
                        <img 
                            src={"https://cdn.discordapp.com/attachments/1010267684119793674/1057398320814887004/Icon.png"} 
                            alt="My Image" />
                    </button>
                </div>
            </div>
        </button>
    )
}

