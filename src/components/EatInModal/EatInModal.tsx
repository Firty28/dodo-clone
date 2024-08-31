import { useState } from "react"
import "./eatInModal.css"
import MyButton from "../UI/Button/MyButton"
import { useSelectedProducts } from "../../store/storeZ"

interface IEatInModalProps {
  price: number,
  imgUrl: string,
  title: string,

}

const EatInModal: React.FC<IEatInModalProps> = ({ price, imgUrl, title }) => {
  
  type CssTransform = 0 | 100 | 200
  type SizePizza = 25 | 30 | 35 
  type DoughPizza = "Традиционное" | "Тонкое"

  const [translateSize, setTranslateSize] = useState<CssTransform>(0)
  const [translateDough, setTranslateDough] = useState<CssTransform>(0)
  const [sizePizza, setSizePizza] = useState<SizePizza>(25)
  const [doughPizza, setDoughPizza] = useState<DoughPizza>("Традиционное")
  const [count, setCount] = useState(1)
  
  const { addSelectedProducts } = useSelectedProducts()

  function ClickOnSizePizza(translate: CssTransform, value: string) {
    if (value === "Большая") {
      setSizePizza(35)
    } else if (value === "Средняя") {
      setSizePizza(30)
    } else {
      setSizePizza(25)
    }
    setTranslateSize(translate)
  }
  
  function ClickOnDoughPizza(translate: CssTransform, value: string) {
    if (value === "Традиционная") {
      setDoughPizza("Традиционное")
    } else {
      setDoughPizza("Тонкое")
    }
    setTranslateDough(translate)
  }


  return (
    <div className='eat-modal-container'>
        <img src={imgUrl} alt="No name" className='image-in-modal'/>
        <div className="info">
            <div className="name">{title}</div>
            <div className="size-weight">{sizePizza} см, {doughPizza} тесто 25, 420 г</div>
                <div className="ingredients">Баварские колбаски , острый соус аджика, острые колбаски чоризо , цыпленок , пикантная пепперони , моцарелла, фирменный томатный соус</div>
                <div className="button-container-size">
                    <div className='block-input' style={{ transform: `translateX(${translateSize}%)` }}></div>
                    <input type="radio" id='Big' name='size-pizza' className='input-r-big' value="Большая" />
                    <label htmlFor="Big" onClick={() => ClickOnSizePizza(0, "Большая")}>Большая</label>
                    <input type="radio" id='Medium' name='size-pizza' className='input-r-medium' value="Средняя" />
                    <label htmlFor="Medium" onClick={() => ClickOnSizePizza(100, "Средняя")}>Средняя</label>
                    <input type="radio" id='Small' name='size-pizza' className='input-r-small' value="Маленькая" />
                    <label htmlFor="Small" onClick={() => ClickOnSizePizza(200, "Маленькая")}>Маленькая</label>
                </div>
                <div className="button-container-dough">
                <div className='block-input' style={{ transform: `translateX(${translateDough}%)` }}></div>
                    <input type="radio" id='Thick' name='dough-pizza' className='input-r-thick' value="Традиционная" />
                    <label htmlFor="Thick" onClick={() => ClickOnDoughPizza(0, "Традиционная")}>Традиционная</label>
                    <input type="radio" id='Сrust' name='dough-pizza' className='input-r-crust' value="Тонкая" />
                    <label htmlFor="Сrust" onClick={() => ClickOnDoughPizza(100, "Тонкая")}>Тонкая</label>
                </div>
                <div className="counter">
                  <MyButton onClick={() => count > 1 ? setCount(count - 1) : setCount(1)}>-</MyButton>
                  <div className="count">{count}</div>
                  <MyButton onClick={() => setCount(count + 1)}>+</MyButton>
                </div>
                
                <MyButton onClick={() => addSelectedProducts(price, title, count)} style={{ marginTop: "10px" }}>В корзину за {price * count}&#8381;</MyButton>
        </div>
    </div>
  )
}

export default EatInModal