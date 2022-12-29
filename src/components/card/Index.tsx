import React from 'react'
import './style.css'

export const Card = () => {
    return (
        <button className='container'>
            <img 
                src={"https://cdn.discordapp.com/attachments/1010267684119793674/1057398733521821817/Main-Image.png"} 
                alt="Apple Watch" />
            <p className='bodyNormalMedium second'>Apple Watch</p>
            <p className='bodySmall third second'>Series 5 SE</p>
            <div className='buyData'>
                <p className='bodyNormalMedium four'>$529.99</p>
                <button className='bottonCompra'>
                    <img 
                        src={"https://cdn.discordapp.com/attachments/1010267684119793674/1057398320814887004/Icon.png"} 
                        alt="My Image" />
                </button>
            </div>
        </button>
    )

}

