import { IoIosAlert } from "react-icons/io"
import Tabela from "../components/Tabela"

export default ()=>{
    return (
        <div style={{ margin:"0 auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Tabela 
                title={"BOT"}
                coluns={[{ name: "#", value: "id" }, { name: "Colaborador", value: "colaborador" }, { name: "Setor", value: "setor" }, { name: "Atendente", value: "atendente" }, { name: "Assunto", value: "assunto" }, { name: "Nivel", value: "nivel" }, { name: "Status", value: "status",}, { name: "Info", value: "info" }]}
                data={
                    [
                        { id: 0, colaborador: "Vander", atendente: "Valder", setor: "logistica", assunto: "sinconismo", nivel: "suporte 1", status: "pendente", info: <IoIosAlert /> },

                        { id: 1, colaborador: "Vander", atendente: "Valder", setor: "logistica", assunto: "sinconismo", nivel: "suporte 1", status: "pendente",info: <IoIosAlert /> },

                        { id: 2, colaborador: "Vander", atendente: "Valder", setor: "logistica", assunto: "sinconismo", nivel: "suporte 1", status: "pendente", info: <IoIosAlert /> },

                        { id: 3, colaborador: "Vander", atendente: "Valder", setor: "logistica", assunto: "sinconismo", nivel: "suporte 1", status: "pendente", info: <IoIosAlert /> }
                    ]
                } 
            />
        </div>
    )
}