import React from 'react'
import CardItem from './CardItem'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these locations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                            src='/images/img-9.jpg'
                            text='The Amazon Jungle'
                            label='Adventure'
                            path='/services'
                        />
                         <CardItem
                            src='images/img-2.jpg'
                            text='Bali Rocks'
                            label='Luxury'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-11.jpg'
                            text='Streets of Bcn'
                            label='Local'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-12.jpg'
                            text='From Madrid to heaven'
                            label='Local'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards
