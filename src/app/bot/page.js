'use client'
import { IoIosAlert } from "react-icons/io"
import Tabela from "../components/Tabela"
import { useState } from "react"
import Modal from "../components/Modal"
import Button from "../components/Button"
import Input from "../components/Input"

export default () => {

    const [modalIsOpen, setModalIsOpen] = useState(0)
    const [filterIsOpen, setFilterIsOpen] = useState({ isOpen: 0, data: { colaborador: "", setor: "", atendente: "", assunto: "", problema: "", nivel: "", status: "" } })
    const [inputsModal, setInputsModal] = useState({ colaborador: "", setor: "", atendente: "", assunto: "", problema: "", nivel: "", status: "" })

    const openFilter = (value) => {
        setFilterIsOpen({ ...filterIsOpen, isOpen: value })
    }

    return (
        <>
            <Modal isOpen={modalIsOpen} >
                <div style={{ padding: 10, backgroundColor: "white", height: "auto", width: "500px" }}>
                    <div style={{ textAlign: "right" }}>

                        <Button color={"erro"} onClick={() => {
                            setModalIsOpen(!modalIsOpen)
                            openFilter(0)
                        }} label={"X"} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "start" }}>
                        <ul style={{ display: "flex", flexDirection: "column", alignItems: "end" }}>
                            <dl style={{ margin: "10px 0px 10px 0px" }}>
                                Colaborador: <Input onChange={(e) => {
                                    console.log(e.target.value)
                                }} style={{ width: "200px", height: "30px" }} type={"select"} >
                                    <option value={""}>Selecione um colaborador</option>
                                    <option value={1}>Teste</option>
                                    <option value={2}>Teste2</option>
                                </Input>
                            </dl>
                            <dl style={{ margin: "10px 0px 10px 0px" }}>
                                Setor:  <Input onChange={(e) => {
                                    console.log(e.target.value)
                                }} style={{ width: "200px", height: "30px" }} type={"select"} >
                                    <option>Teste</option>
                                </Input>
                            </dl>
                            <dl style={{ margin: "10px 0px 10px 0px" }}>
                                Atendente: <Input onChange={(e) => {
                                    console.log(e.target.value)
                                }} style={{ width: "200px", height: "30px" }} type={"select"} >
                                    <option>Teste</option>
                                </Input>
                            </dl>
                            <dl style={{ margin: "10px 0px 10px 0px" }}>

                                assunto: <Input onChange={(e) => {
                                    console.log(e.target.value)
                                }} type={"select"} style={{ width: "200px", height: "30px" }}>
                                    <option>Teste</option>
                                </Input>
                            </dl>
                            <dl style={{ margin: "10px 0px 10px 0px" }}>
                                Problema: <Input onChange={(e) => {
                                    console.log(e.target.value)
                                }} type={"select"} style={{ width: "200px", height: "30px" }} >
                                    <option>
                                        TESTE
                                    </option>
                                </Input>
                            </dl>

                            <dl style={{ margin: "10px 0px 10px 0px" }}>
                                <Input onChange={(e) => {
                                    console.log(e.target.value)
                                }} placeholder={"Digite a sua descricao:"} style={{ width: "200px", height: "200px" }} type={"textarea"} />
                            </dl>
                            <dl style={{ margin: "10px 0px 10px 0px" }}>
                                Nivel: <Input onChange={(e) => {
                                    console.log(e.target.value)
                                }} type={"select"} style={{ width: "200px", height: "30px" }} >
                                    <option>
                                        TESTE
                                    </option>
                                </Input>
                            </dl>
                            <dl style={{ margin: "10px 0px 10px 0px" }}>
                                Status : <Input onChange={(e) => {
                                    console.log(e.target.value)
                                }} type={"select"} style={{ width: "200px", height: "30px" }} >
                                    <option>
                                        TESTE
                                    </option>
                                </Input>
                            </dl>
                        </ul>
                    </div>
                    <div>
                        {filterIsOpen.isOpen ? <Button label={"Filtrar"} /> : <Button label={"Adicionar"} />} <Button color={"disable"} onClick={() => {
                            setModalIsOpen(!modalIsOpen)
                            openFilter(0)
                        }} label={"Cancelar"} />
                    </div>

                </div>
            </Modal>
            <div style={{ margin: "0 auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Tabela
                    title={"BOT"}
                    modalIsOpen={modalIsOpen}
                    setModalIsOpen={setModalIsOpen}
                    setFilterIsOpen={openFilter}
                    coluns={[{ name: "#", value: "id" }, { name: "Colaborador", value: "colaborador" }, { name: "Setor", value: "setor" }, { name: "Atendente", value: "atendente" }, { name: "Assunto", value: "assunto" }, { name: "Nivel", value: "nivel" }, { name: "Status", value: "status", }, { name: "Info", value: "info" }]}
                    data={
                        [
                            { id: 0, colaborador: "Vander", atendente: "Valder", setor: "logistica", assunto: "sinconismo", nivel: "suporte 1", status: "pendente", info: <IoIosAlert /> },

                            { id: 1, colaborador: "Vander", atendente: "Valder", setor: "logistica", assunto: "sinconismo", nivel: "suporte 1", status: "pendente", info: <IoIosAlert /> },

                            { id: 2, colaborador: "Vander", atendente: "Valder", setor: "logistica", assunto: "sinconismo", nivel: "suporte 1", status: "pendente", info: <IoIosAlert /> },

                            { id: 3, colaborador: "Vander", atendente: "Valder", setor: "logistica", assunto: "sinconismo", nivel: "suporte 1", status: "pendente", info: <IoIosAlert /> }
                        ]
                    }
                />
            </div>
        </>
    )
}