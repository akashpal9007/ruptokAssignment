import ModalContext from "./ModalContext";
import { useState } from "react";

const ModalState = (props) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <ModalContext.Provider value={{showModal, setShowModal}}>
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalState;