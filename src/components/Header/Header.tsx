import logo from "../../assets/icon/logo32.svg"
import profile from "../../assets/icon/profile32.svg"
import { useSelectedProducts } from "../../store/storeZ"
import basket from "../../assets/icon/basket.svg"
import { useState } from "react"

interface IArrayItem {
    price: number
    title: string
    countPizza: number
    urlImage?: string
}

const Header = () => {


    const [isCloseBtn, setCloseBtn] = useState(true)
    const { selectedProducts } = useSelectedProducts()

    const basketPizza: IArrayItem[] = selectedProducts.reduce((acc: IArrayItem[], current: IArrayItem) => {

        const existingDishIndex = acc.findIndex(dish => dish.title === current.title);
      
        if (existingDishIndex !== -1) {
          acc[existingDishIndex].countPizza += current.countPizza;
        } else {
          acc.push({ ...current });
        }
      
        return acc;
      }, []);

    return (
        <header className="header">
            <div className="header__container">
                <div className="left-header">
                    <div className="logo">
                        <img src={logo} alt="Logo" />

                        <div className="name-company">RPiZ</div>
                    </div>
                </div>

                <div className="profile">
                    <div className="money">{selectedProducts.reduce((sum, item) => item.price * item.countPizza + sum, 0)}&#8381;</div>
                    <div className="user">
                        <img src={profile} alt="Profile" />
                    </div>
                    <div className="basket">
                        <img src={basket} alt="Basket" onClick={() => setCloseBtn(!isCloseBtn)} />
                        <div className="open-basket" style={{ display: isCloseBtn ? "none" : "" }}>
                            {
                                selectedProducts.length > 0 ?

                                    <ul className="list">
                                        {basketPizza.map((item, key) => (
                                            <li key={key} className="basket-item">{item.title} x{item.countPizza}<button className="close-basket">&#10006;</button></li>
                                        ))}
                                    </ul>
                                    :
                                    <h3>Корзина пустая</h3>

                            }

                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header