import React from 'react'
import CardItem from './CardItem'

function Cards() {
    return (
        <div className='cards'>
            <h2 className="card_header">
                <div className="cards_container">
                    <CardItem
                        src='images/home01.jpg'
                        text='Burger'

                    />
                </div>
            </h2>

        </div>
    )
}

export default Cards
