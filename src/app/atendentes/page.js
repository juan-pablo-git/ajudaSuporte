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
                        <dl style={{ margin: "10px 0px 10px 0px" }}>
                                Nome: <Input style={{ width: "200px", height: "30px" }} type={"select"} >
                                    <option>Teste</option>
                                </Input>
                            </dl>
                            <dl style={{ margin: "10px 0px 10px 0px" }}>
                                Nivel: <Input style={{ width: "200px", height: "30px" }} type={"select"} >
                                    <option>Teste</option>
                                </Input>
                            </dl>
                            <dl style={{ margin: "10px 0px 10px 0px" }}>
                                Setor:  <Input style={{ width: "200px", height: "30px" }} type={"select"} >
                                    <option>Teste</option>
                                </Input>
                            </dl>
                           
                        </ul>
                    </div>
                    <div><Button label={"Adicionar"} /> <Button color={"disable"} label={"Cancelar"} /> </div>

                </div>
            </Modal>
            <div style={{ margin: "0 auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Tabela
                    title={"Atendentes"}
                    modalIsOpen={modalIsOpen}
                    setModalIsOpen={setModalIsOpen}
                    coluns={[
                        { name: "#", value: "id" },
                        { name: "Nome", value: "name" },
                        { name: "Nivel", value: "nivel" },
                        { name: "Setor", value: "setor" },
                        { name: "Info", value: "info" }]}
                    data={[{ id: 0, nivel: 1, setor: "T.I", name: "Vander Silva", info: <IoIosAlert /> }, { id: 1, nivel: 1, setor: "T.I", name: "Clauber Nogueira", info: <IoIosAlert /> }, { id: 2, nivel: 2, setor: "T.I", name: "Dev Frabriocio Silva", info: <IoIosAlert /> }]}
                />
            </div>
        </>)

}