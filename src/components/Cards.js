import React from 'react'
import CardItem from './CardItem'

function Cards() {
    return (
        <div className='cards'>
            <h1>Confira esses destinos ÉPICOS!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="./images/img-9.jpg"
                        text="Explore as catatumbas escondidas dentro da dungeom em morrowind"
                        label='Aventura'
                        path='/servicos'
                        />
                        <CardItem 
                        src="./images/img-2.jpg"
                        text="Viaje através das ilhas do caribe em um cruzeiro privado com o Spinal"
                        label='Luxúria'
                        path='/servicos'
                        />


                        <CardItem 
                        src="./images/img-1.jpg"
                        text="Experiencie futebol com os jogadores mais assustadores"
                        label='Esporte'
                        path='/servicos'
                        />
                        <CardItem 
                        src="./images/img-3.jpg"
                        text="Acelere pelo inferno pelo tour com o caveirinha"
                        label='Adrenalina'
                        path='/servicos'
                        />
                        <CardItem 
                        src="./images/img-4.jpg"
                        text="Medite com as caveiras monge das catacumbas de dark souls"
                        label='Saúde e bem estar'
                        path='/servicos'
                        />
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Cards
