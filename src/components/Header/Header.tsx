import logo from "../../assets/icon/logo32.svg"
import profile from "../../assets/icon/profile32.svg"
import { useMoneyStore } from "../../store/storeZ"


const Header = () => {

    const { money } = useMoneyStore()

  return (
    <header className="header">
        <div className="header__container">
            <div className="left-header">
                <div className="logo">
                    <img src={logo} alt="Logo"/>
                      
                    <div className="name-company">RPiZ</div>
                </div>
            </div>

            <div className="profile">
                <div className="money">{money}&#8381;</div>
                <div className="user">
                    <img src={profile} alt="Profile"/>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header