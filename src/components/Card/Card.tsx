import { useState } from "react"
import imageCard from "../../assets/image/image1.jpg"
import { useMoneyStore } from "../../store/storeZ"
import Modal from "../UI/Modal/Modal"
import EatInModal from "../EatInModal/EatInModal"
import MyButton from "../UI/Button/MyButton"


const Card = () => {
  const [ modalActive, setModalActive ] = useState<boolean>(false)
  const { addMoney } = useMoneyStore()

  return (
    <div className="card">
    <img className="image" src={imageCard} alt="Меню"></img>
    <div className="container-text">
        <div className="title">Омлет с беконом</div>
        <div className="description">Классическое сочетание горячего омлета с поджаристой корочкой и бекона с добавлением моцареллы и томатов на завтрак</div>
    </div>
    <div className="container-price">
        <div className="price">450&#8381;</div>
       
        <MyButton onClick={() => {addMoney(32); setModalActive(true)}}>В корзину</MyButton>
        <Modal active={modalActive} setActive={setModalActive}>
          <EatInModal/>
        </Modal>
    </div>
</div>
  )
}

export default Card