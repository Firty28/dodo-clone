import React from 'react'
import image from "../../assets/image/pizza1.avif"
import "./eatInModal.css"

const EatInModal = () => {
  return (
    <div className='eat-modal-container'>
        <img src={image} alt="No name" />
        <div className="info">
            <div className="name">Мясная с аджикой</div>
            <div className="size-weight">25 см, традиционное тесто 25, 420 г</div>
                <div className="ingredients">Баварские колбаски , острый соус аджика, острые колбаски чоризо , цыпленок , пикантная пепперони , моцарелла, фирменный томатный соус</div>
                <div className="button-container-size">
                    <div className='block-input'></div>
                    <input type="radio" id='Big' name='size-pizza' className='input-r-big' value="Большая" />
                    <label htmlFor="Big">Большая</label>
                    <input type="radio" id='Medium' name='size-pizza' className='input-r-medium' value="Средняя" />
                    <label htmlFor="Medium">Средняя</label>
                    <input type="radio" id='Small' name='size-pizza' className='input-r-small' value="Маленькая" />
                    <label htmlFor="Small">Маленькая</label>
                </div>
                <div className="button-container-dough">
                    <div className='block-input'></div>
                    <input type="radio" id='Thick' name='dough-pizza' className='input-r-thick' value="Традиционная" />
                    <label htmlFor="Thick">Традиционная</label>
                    <input type="radio" id='Сrust' name='dough-pizza' className='input-r-crust' value="Тонкая" />
                    <label htmlFor="Сrust">Тонкая</label>
                </div>
        </div>
    </div>
  )
}

export default EatInModal