import './App.css'
import Header from './components/Header/Header'
import Card from './components/Card/Card'

function App() {

  return (
    <>
    <Header/>
    <main className="content">
        <div className="filter">
            <button className="breakfast filter-menu">Завтраки</button>
            <button className="drinks filter-menu">Напитки</button>
            <button className="combos filter-menu">Комбо</button>
            <button className="pizzas filter-menu">Пиццы</button>
            <button className="desserts filter-menu">Десерты</button>
            <button className="sauces filter-menu">Соусы</button>
        </div>
        <div className="menu">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
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
