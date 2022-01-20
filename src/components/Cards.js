import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <div className="cards_container">
                <CardItem
                    src='images/noodles.jpg'
                    text='Noodles'
                    price='$10'
                    details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, soluta!'
                />
                <CardItem
                    src='images/burger.jpg'
                    text='Crispy Burger'
                    price='$20'
                    details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, soluta!'
                />
            </div>
            <div className="cards_container">

                <CardItem
                    src='images/cuisine.jpg'
                    text='Cuisine'
                    price='$25'
                    details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, soluta!'
                />
                <CardItem
                    src='images/chicken-starters.jpg'
                    text='Chciken Wings'
                    price='$25'
                    details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, soluta!'
                />
                <CardItem
                    src='images/pizza.jpg'
                    text='Pizza'
                    price='$15'
                    details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, soluta!'
                />

            </div>

        </div>
    )
}

export default Cards
