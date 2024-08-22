import './App.css'
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import MyButton from './components/UI/Button/MyButton'

function App() {

  return (
    <>
    <Header/>
    <main className="content">
        <div className="filter">
            <MyButton>Завтраки</MyButton>
            <MyButton>Напитки</MyButton>
            <MyButton>Комбо</MyButton>
            <MyButton>Пиццы</MyButton>
            <MyButton>Десерты</MyButton>
            <MyButton>Соусы</MyButton>
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
