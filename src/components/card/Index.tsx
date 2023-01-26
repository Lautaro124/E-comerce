import { useDispatch } from 'react-redux'
import { Item } from '../../interfaces/item'
import { addCart } from '../../redux/modules/items/items'
import './style.css'
import { useNavigate } from 'react-router-dom';



export const Card = (item: Item) => {
    
    const dispatch = useDispatch()
    const addCard = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();
        dispatch(addCart(item))
    }
    
        let history = useNavigate();
      
        function handleClick() {
            
          history('/interView');
        }
        const Compra=()=>{
            return(
                <button className='bottonCompra' onClick={addCard}>
                                <img 
                                    src={"https://cdn.discordapp.com/attachments/1010267684119793674/1057398320814887004/Icon.png"} 
                                    alt="My Image" />
                            </button>
            )
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
                <p className='bodyNormalMedium second'>{ item.title }</p>
                <p className=' bodySmall second third'>{item.description}</p>
            </div>
            <div className='buyDataContainer'>
                <div className='buyData'>
                    <p className='bodyNormalMedium'>${item.price}</p>
                    <Compra/>
                </div>
            </div>
        </button>

    )

  
}



