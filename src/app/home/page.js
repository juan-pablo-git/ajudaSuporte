'use client'
import { useState } from "react";
import Modal from "../components/Modal";
import Tabela from "../components/Tabela"
import { IoIosAlert } from "react-icons/io";
import Button from "../components/Button";
import Input from "../components/Input";


export default () => {
    const [modalIsOpen, setModalIsOpen] = useState(0)
    return (
        <>
            <Modal isOpen={modalIsOpen} >
                <div style={{ padding: 10, backgroundColor: "white", height: "auto", width: "auto" }}>
                    <div style={{textAlign:"right"}}>

                        <Button color={"erro"} onClick={() => { setModalIsOpen(!modalIsOpen) }} label={"X"} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "start" }}>
                        <ul style={{ display: "flex", flexDirection: "column" }}>
                            <dl style={{ margin: "10px 0px 10px 0px" }}>
                                Colaborador: <Input type={"select"} >
                                    <option>Teste</option>
                                </Input>
                            </dl>
                            <dl style={{ margin: "10px 0px 10px 0px" }}>
                                Setor:  <Input  type={"select"} >
                                    <option>Teste</option>
                                </Input>
                            </dl>
                            <dl style={{ margin: "10px 0px 10px 0px" }}>
                                Atendente: <Input  type={"select"} >
                                    <option>Teste</option>
                                </Input>
                            </dl>
                            <dl style={{ margin: "10px 0px 10px 0px" }}>

                                assunto: <Input type={"select"} >
                                    <option>Teste</option>
                                </Input>
                            </dl>
                            <dl style={{ margin: "10px 0px 10px 0px" }}>
                                Problema: <Input type={"select"}  >
                                    <option>
                                        TESTE
                                    </option>
                                </Input>
                            </dl>
                            
                            <dl style={{ margin: "10px 0px 10px 0px" }}>
                                <Input placeholder={"Digite a sua descricao:"} style={{ width: "400px", height: "200px" }}  type={"textarea"} />
                            </dl>
                            <dl style={{ margin: "10px 0px 10px 0px" }}>
                                Nivel: <Input type={"select"}  >
                                    <option>
                                        TESTE
                                    </option>
                                </Input>
                            </dl>
                            <dl style={{ margin: "10px 0px 10px 0px" }}>
                                Status : <Input type={"select"}  >
                                    <option>
                                        TESTE
                                    </option>
                                </Input>
                            </dl>
                        </ul>
                    </div>
                    <div><Button label={"Adicionar"} /> <Button color={"disable"} label={"Cancelar"} /> </div>

                </div>
            </Modal>
            <div style={{ margin: "0 auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Tabela
                    setModalIsOpen={setModalIsOpen}
                    modalIsOpen={modalIsOpen}
                    title={"CHAMADOS"}
                    coluns={[
                        { name: "#", value: "id" },
                        { name: "Colaborador", value: "colaborador" },
                        { name: "Setor", value: "setor" },
                        { name: "Atendente", value: "atendente" },
                        { name: "Assunto", value: "assunto" },
                        { name: "Problema", value: "problema" },
                        { name: "Nivel", value: "nivel" },
                        { name: "Status", value: "status" },
                        { name: "Info", value: "info" }
                    ]}
                    data={
                        [
                            {
                                id: 0,
                                colaborador: "Vander",
                                atendente: "Valder",
                                setor: "logistica",
                                assunto: "sinconismo",
                                problema: "erro",
                                nivel: "suporte 1",
                                status: "pendente", info: <IoIosAlert />
                            },
                            {
                                id: 1,
                                colaborador: "Vander",
                                atendente: "Valder",
                                setor: "logistica",
                                assunto: "sinconismo",
                                problema: "erro",
                                nivel: "suporte 1",
                                status: "pendente",
                                info: <IoIosAlert />
                            },
                            { id: 2, colaborador: "Vander", atendente: "Valder", setor: "logistica", assunto: "sinconismo", problema: "erro", nivel: "suporte 1", status: "pendente", info: <IoIosAlert /> },
                            {
                                id: 3, colaborador: "Vander", atendente: "Valder", setor: "logistica", assunto: "sinconismo",
                                problema: "erro", nivel: "suporte 1", status: "pendente", info: <IoIosAlert />
                            }
                        ]
                    } />
            </div>
        </>
    )
}