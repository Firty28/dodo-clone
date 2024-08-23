import React from 'react'
import MyButton from '../UI/Button/MyButton'

const Filter: React.FC = () => {
    return (
        <div className="filter">
            <MyButton>Завтраки</MyButton>
            <MyButton>Напитки</MyButton>
            <MyButton>Комбо</MyButton>
            <MyButton>Пиццы</MyButton>
            <MyButton>Десерты</MyButton>
            <MyButton>Соусы</MyButton>
        </div>
    )
}

export default Filter