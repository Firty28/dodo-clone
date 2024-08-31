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

  const [ active, setModalActive ] = useState<boolean>(false)

  return (
    <div className="card">
      <img className="image" src={urlImage} alt="Меню"></img>
      <div className="container-text">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
      <div className="container-price">
        <div className="price">{price}&#8381;</div>

        <MyButton onClick={() =>  setModalActive(true) }>В корзину</MyButton>
        {
        active ? 
        <Modal active={active} setActive={setModalActive}>
          <EatInModal price={Number(price)} imgUrl={urlImage} title={title} />
        </Modal> 
        : 
        null
        }

      </div>
    </div>
  )
})

export default Card