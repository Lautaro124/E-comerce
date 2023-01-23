import './style.css'

const Cart = () => {
  return (
    <div className='cartBody'>
      <h2 className='titleCard'>Bag</h2>
      <div className='CartImages'>
        <img
          className='cardImages'
          src='https://cdn.discordapp.com/attachments/1010267684119793674/1057398733521821817/Main-Image.png'
          alt='No hay imagen'
        />
      </div>
      <button>
        <h5>View Bag</h5>
      </button>
    </div>
  )
}

export default Cart