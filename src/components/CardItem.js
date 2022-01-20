import React from 'react'
import './CardItem.css'

function CardItem(props) {
    return (
        <div className='card_item'>
            <div className="cards_wrapper">
                <div className="cards_img">
                    <img src={props.src} alt="" />
                </div>
                <div className="cards_content">
                    <div className="cards_name">
                        <p className='cards_item_text'>
                            {props.text}
                        </p>
                        <p className='cards_item_price'>
                            {props.price}
                        </p>
                    </div>
                    <p className='cards_item_details'>
                        {props.details}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CardItem
