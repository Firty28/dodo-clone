import './App.css'
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import Filter from './components/Filter/Filter'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface IGetApi {
    name: string
    composition: string
    weight: string
    price: string
    img: string
}

function App() {
    const [infoData, setInfoData] = useState<IGetApi | null>(null)

    useEffect(() => {
        axios.get("https://66c86fcd8a477f50dc2e0a03.mockapi.io/api/v1/pizza")
            .then((respons) => setInfoData(respons.data))
    }, [])

    return (
        <>
            <Header />
            <main className="content">
                <Filter />
                <div className="menu">
                    {infoData != null ? Object.values(infoData).map((item, key) => (
                        <Card
                            key={key}
                            urlImage={item.img}
                            title={item.name}
                            description={item.composition}
                            price={Number(item.price)}
                        />
                    )) : <h1>Ничего не нашёл</h1>
                    }


                </div>
            </main>

            <footer>
                <div className="footer">
                    Информацию тут показывать не буду пока
                </div>
            </footer>
        </>
    )
}

export default App
