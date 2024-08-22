import React from 'react'
import styleM from "./myButton.module.css"

interface IMyButton {
    children: React.ReactNode
    onClick?: () => void
    style?: React.CSSProperties
}

const MyButton: React.FC<IMyButton> = ({children, onClick, style}) => {
  return (
    <button onClick={onClick} className={styleM.button} style={style}>
        {children}
    </button>
  )
}

export default MyButton