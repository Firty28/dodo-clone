import React from "react"
import "./myModal.modal.css"

interface IModal {
     active: boolean, 
     setActive: (active: boolean) => void 
     children?: React.ReactNode
}

const Modal = ({ active, setActive, children }: IModal) => {
    if (!active) return null

    return (
        <div className="modal">
            <div className="modal__content">
                <div className="modal__close" onClick={() => setActive(false)}>&#10006;</div>
                {children}
            </div>
        </div>
    )
}

export default Modal