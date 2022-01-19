import React from 'react'
import './Cards.css'

function CardItem(props) {
    return (
        <div className='card_item'>
            <div className="cards_wrapper">
                <div className="cards_img">
                    <img src={props.src} alt="" />
                </div>
                <div className="cards_content">
                    <p className='cards_item_text'>{props.text}</p><span className='cards_item_price'></span>
                    <p className='cards_item_details'></p>
                </div>
            </div>
        </div>
    )
}

export default CardItem
