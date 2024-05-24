'use client'
import { useState } from "react";
import Modal from "../components/Modal";
import Tabela from "../components/Tabela"
import { IoIosAlert } from "react-icons/io";
import Button from "../components/Button";
import Input from "../components/Input";


export default () => {
    const [modalIsOpen, setModalIsOpen] = useState(1)
    return (
        <>
            <Modal isOpen={modalIsOpen} >
                <div style={{ padding: 10, backgroundColor: "white", height: "500px", width: "500px" }}>
                    <div>

                        <Button color={"erro"} onClick={() => { setModalIsOpen(!modalIsOpen) }} label={"X"} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "start" }}>
                        <ul style={{ display: "flex", flexDirection: "column", alignItems: "end" }}>
                            <dl style={{ margin: "10px 0px 10px 0px" }}>
                                Colaborador: <Input style={{ width: "200px", height: "30px" }} type={"select"} >
                                    <option>Teste</option>
                                </Input>
                            </dl>
                            <dl style={{ margin: "10px 0px 10px 0px" }}>
                                Cetor:  <Input style={{ width: "200px", height: "30px" }} type={"select"} >
                                    <option>Teste</option>
                                </Input>
                            </dl>
                            <dl style={{ margin: "10px 0px 10px 0px" }}>
                                Atendente: <Input style={{ width: "200px", height: "30px" }} type={"select"} >
                                    <option>Teste</option>
                                </Input>
                            </dl>
                            <dl style={{ margin: "10px 0px 10px 0px" }}>

                                assunto: <Input type={"select"} style={{ width: "200px", height: "30px" }}>
                                    <option>Teste</option>
                                </Input>
                            </dl>
                            <dl style={{ margin: "10px 0px 10px 0px" }}>
                                Problema: <Input type={"select"} style={{ width: "200px", height: "30px" }} >
                                    <option>
                                        TESTE
                                    </option>
                                    </Input>
                            </dl>
                            <dl style={{ margin: "10px 0px 10px 0px" }}>
                                Descricao: <Input style={{ width: "200px", height: "20px" }} type={"textarea"} />
                            </dl>
                            <dl style={{ margin: "10px 0px 10px 0px" }}>
                                Nivel: <Input type={"text"} style={{ width: "190px", height: "20px" }} />
                            </dl>
                            <dl style={{ margin: "10px 0px 10px 0px" }}>
                                Status : <Input type={"text"} style={{ width: "190px", height: "20px" }} />
                            </dl>
                        </ul>
                    </div>

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