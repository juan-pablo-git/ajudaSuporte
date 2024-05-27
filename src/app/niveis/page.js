'use client'
import { IoIosAlert } from "react-icons/io"
import Tabela from "../components/Tabela"
import { useState } from "react"
import Modal from "../components/Modal"
import Button from "../components/Button"
import Input from "../components/Input"

export default () => {
    const [modalIsOpen, setModalIsOpen] = useState(0)

    return (
        <>
            <Modal isOpen={modalIsOpen} >
                <div style={{ padding: 10, backgroundColor: "white", height: "auto", width: "500px" }}>
                    <div style={{ textAlign: "right" }}>

                        <Button color={"erro"} onClick={() => { setModalIsOpen(!modalIsOpen) }} label={"X"} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "start" }}>
                        <ul style={{ display: "flex", flexDirection: "column", alignItems: "end" }}>
                            <dl style={{ margin: "10px 0px 10px 0px" }}>Nome: <Input type={"text"} /></dl>
                        </ul>
                    </div>
                    <div><Button label={"Adicionar"} /> <Button color={"disable"} label={"Cancelar"} /> </div>

                </div>
            </Modal>
            <div style={{ margin: "0 auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Tabela
                    modalIsOpen={modalIsOpen}

                    setModalIsOpen={setModalIsOpen}

                    title={"Niveis"}

                    coluns={[{ name: "#", value: "id" }, { name: "Nome", value: "name" }, { name: "Info", value: "info" }]}

                    data={[{ id: 0, name: "suporte 1", info: <IoIosAlert /> }, { id: 1, name: "suporte 2", info: <IoIosAlert /> }]}
                />
            </div>
        </>
    )
}