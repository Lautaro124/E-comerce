import React from 'react'
import './style.css'

interface Props {
    title: string
    description: string
    image: string
    price: number
}

export const Card = ({title,description,image,price}: Props) => {
    return (
        <div className='container' onClick={() => console.log(title)}>
            <div className='imageContainer'>
                <img 
                    className='cover'
                    src={image} 
                />
            </div>
            <div className='titlesContainer'>
                <p className='bodyNormalMedium second'>{ title }</p>
                <p className=' bodySmall second third'>{description}</p>
            </div>
            <div className='buyDataContainer'>
                <div className='buyData'>
                    <p className='bodyNormalMedium'>${price}</p>
                    <button className='bottonCompra'>
                        <img 
                            src={"https://cdn.discordapp.com/attachments/1010267684119793674/1057398320814887004/Icon.png"} 
                            alt="My Image" />
                    </button>
                </div>
            </div>
        </div>
    )
        
}

