import { useDispatch } from "react-redux";
import { Item } from "../../interfaces/item";
import { addCart } from "../../redux/modules/items/items";

const Compra = (item: Item) => {
  const dispatch = useDispatch()
  const handleAddCard = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.stopPropagation();
      dispatch(addCart(item))
  }
    
  return (
      <button className='bottonCompra' onClick={handleAddCard}>
          <img
              src={"https://cdn.discordapp.com/attachments/1010267684119793674/1057398320814887004/Icon.png"}
              alt="My Image" />
      </button>
  )
}

export default Compra