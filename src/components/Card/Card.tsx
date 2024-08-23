import { memo, useState } from "react"
import Modal from "../UI/Modal/Modal"
import EatInModal from "../EatInModal/EatInModal"
import MyButton from "../UI/Button/MyButton"


interface ICardProps {
  urlImage: string
  title: string
  description: string
  price: number
  typeForFilter?: string

}

const Card: React.FC<ICardProps> = memo(function Card({ urlImage, title, description, price }) {
  
  const [ modalActive, setModalActive ] = useState<boolean>(false)
 

  return (
    <div className="card">
    <img className="image" src={urlImage} alt="Меню"></img>
    <div className="container-text">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
    </div>
    <div className="container-price">
        <div className="price">{price}&#8381;</div>
       
        <MyButton onClick={() => {setModalActive(true)}}>В корзину</MyButton>
        <Modal active={modalActive} setActive={setModalActive}>
          <EatInModal price={price} imgUrl={urlImage} title={title}/>
        </Modal>
    </div>
</div>
  )
})

export default Card