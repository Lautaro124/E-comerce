import { Link } from 'react-router-dom'
import './style.css'


export const LeftBar = () => {

return (
  <div className='background'>
      <div className='Buton'>
        <div>
        <button className='button'>
          <img className='img'
          src=
            "https://cdn.discordapp.com/attachments/925160720574857227/1062104267965604030/Group_1.png"/>
        </button>
        </div>
          <div>
            <button className='button'>
              <img 
                src=
                  "https://cdn.discordapp.com/attachments/925160720574857227/1062102409037496320/Icon.png"/>
            </button>
          </div>
          <div> 
            <Link to='/' >    
              <button className='housebutton'>
                <img 
                  src=
                    "https://cdn.discordapp.com/attachments/925160720574857227/1062104879633551502/Icon.png"/>
              </button>
          </Link>
          </div>
          <div>
          <button className='button'>
            <img 
               src="https://cdn.discordapp.com/attachments/925160720574857227/1062105334338044016/Icon.png"/>
          </button>
          </div>
      </div>
        <div>
          <button className='buttone'>
          <img 
               src="https://cdn.discordapp.com/attachments/925160720574857227/1062105767936794634/Icon.png"/>
          </button>
        </div>
    
  </div>
)


}

