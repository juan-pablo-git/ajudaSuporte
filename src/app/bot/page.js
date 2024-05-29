'use client'
import { IoIosAlert } from "react-icons/io"
import Tabela from "../components/Tabela"
import { useState } from "react"
import Modal from "../components/Modal"
import Button from "../components/Button"
import Input from "../components/Input"
import "./style.css"

export default () => {

    const [modalIsOpen, setModalIsOpen] = useState(1)
    const [dados, setDados] = useState([
        { id: 0, colaborador: "Vander", atendente: "Valder", setor: "logistica", assunto: "sinconismo", nivel: "suporte 1", status: "pendente", info: <IoIosAlert /> },

        { id: 1, colaborador: "Vander", atendente: "Valder", setor: "logistica", assunto: "sinconismo", nivel: "suporte 1", status: "pendente", info: <IoIosAlert /> },

        { id: 2, colaborador: "Vander", atendente: "Valder", setor: "logistica", assunto: "sinconismo", nivel: "suporte 1", status: "pendente", info: <IoIosAlert /> },

        { id: 3, colaborador: "Vander", atendente: "Valder", setor: "logistica", assunto: "sinconismo", nivel: "suporte 1", status: "pendente", info: <IoIosAlert /> }
    ])
    const [filterIsOpen, setFilterIsOpen] = useState({ isOpen: 0, data: { colaborador: "", setor: "", atendente: "", assunto: "", problema: "", nivel: "", status: "" } })
    const [inputsModal, setInputsModal] = useState({ colaborador: "", setor: "", atendente: "", assunto: "", problema: "", nivel: "", descricao: "", status: "" })

    const openFilter = (value) => {
        setFilterIsOpen({ ...filterIsOpen, isOpen: value })
    }
    const filterTable = (dados) => {
        let retorno = dados

        console.log(inputsModal)
    }

    const adiconarChamado = (data) => {
        console.log("inputsModal: ", inputsModal)
    }

    return (
        <>
            <Modal isOpen={modalIsOpen} >
                <div style={{ padding: 10, backgroundColor: "white", height: "auto", width: "auto" }}>
                    <div style={{ textAlign: "right" }}>

                        <Button color={"erro"} onClick={() => {
                            setModalIsOpen(!modalIsOpen)
                            openFilter(0)
                        }} label={"X"} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "start" }}>
                        <ul style={{ display: "flex", flexDirection: "column" }}>
                            <dl style={{ margin: "10px 0px 10px 0px" }}>
                                <Input onClick={(e) => {
                                    e.target.style.paddingTop = "50px"
                                }} onChange={(e) => {
                                    setInputsModal({ ...inputsModal, colaborador: e.target.value })
                                }} style={{
                                    width: "400px",
                                    height: "30px"
                                }} placeholder={"Colaborador:"} type={"select"} >
                                    <option value={""}>Selecione um colaborador</option>
                                    <option value={1}>Teste</option>
                                    <option value={2}>Teste2</option>
                                </Input>
                            </dl>
                            <dl style={{ margin: "10px 0px 10px 0px" }}>
                                <Input placeholder={"Setor:"} onChange={(e) => {
                                    setInputsModal({ ...inputsModal, setor: e.target.value })
                                }} style={{
                                    width: "400px",
                                    height: "30px"
                                }} type={"select"} >
                                    <option>Selecione o setor</option>
                                    <option value={1}>Teste</option>
                                </Input>
                            </dl>
                            <dl style={{ margin: "10px 0px 10px 0px" }}>

                                <Input onChange={(e) => {
                                    setInputsModal({ ...inputsModal, atendente: e.target.value })

                                }} placeholder={"Atendente:"} style={{
                                    width: "400px",
                                    height: "30px"
                                }} type={"select"} >
                                    <option>Selecione o atendente</option>
                                    <option value={1}>Teste</option>
                                </Input>
                            </dl>
                            <dl style={{ margin: "10px 0px 10px 0px" }}>
                                <Input onChange={(e) => {
                                    setInputsModal({ ...inputsModal, assunto: e.target.value })

                                }} placeholder={"Assunto:"} type={"select"}
                                    style={{
                                        width: "400px",
                                        height: "30px"
                                    }}>
                                    <option>Selecione o assunto</option>
                                    <option value={1}>Teste</option>
                                </Input>
                            </dl>
                            <dl style={{ margin: "10px 0px 10px 0px" }}>
                                <Input onChange={(e) => {
                                    setInputsModal({ ...inputsModal, problema: e.target.value })
                                    console.log(e.target.value)
                                }} placeholder={"Problema:"} type={"select"}
                                    style={{
                                        width: "400px",
                                        height: "30px"
                                    }} >
                                    <option>Selecione o problema</option>

                                    <option value={1}>
                                        TESTE
                                    </option>
                                </Input>
                            </dl>

                            <dl style={{ margin: "10px 0px 10px 0px" }}>

                                <Input onChange={(e) => {
                                    setInputsModal({ ...inputsModal, descricao: e.target.value })
                                }} placeholder={"Digite a sua descricao:"} style={{ width: "400px", height: "200px" }} type={"textarea"} />
                            </dl>
                            <dl style={{ margin: "10px 0px 10px 0px" }}>

                                <Input placeholder={"Nivel:"} onChange={(e) => {
                                    setInputsModal({ ...inputsModal, nivel: e.target.value })
                                }} type={"select"} style={{
                                    width: "400px",
                                    height: "30px"
                                }} >
                                    <option>Selecione o nivel</option>
                                    <option value={1}>
                                        TESTE
                                    </option>
                                </Input>
                            </dl>
                            <dl style={{ margin: "10px 0px 10px 0px" }}>
                                <Input placeholder={"Status:"} onChange={(e) => {
                                    setInputsModal({ ...inputsModal, status: e.target.value })
                                }} type={"select"} style={{
                                    width: "400px",
                                    height: "30px"
                                }} >
                                    <option >
                                        Selecione o status
                                    </option>
                                    <option value={0}>Pendente</option>
                                    <option value={1}>Em atendimento</option>
                                </Input>
                            </dl>
                        </ul>
                    </div>
                    <div>
                        {filterIsOpen.isOpen ? <Button onClick={filterTable} label={"Filtrar"} /> : <Button onClick={adiconarChamado} label={"Adicionar"} />} <Button color={"disable"} onClick={() => {
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
                        dados
                    }
                />
            </div>
        </>
    )
}