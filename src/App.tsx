import './App.css'
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import Filter from './components/Filter/Filter'
import items from "./api/pizza.json"

function App() {

    

    return (
        <>
            <Header />
            <main className="content">
                <Filter/>
                <div className="menu">
                    {items.map((item) => (
                        <Card
                        urlImage={item.urlImage}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                     />
                    ))}
                    
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
