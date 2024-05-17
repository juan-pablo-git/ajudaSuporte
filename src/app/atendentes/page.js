import { IoIosAlert } from "react-icons/io"
import Tabela from "../components/Tabela"

export default () => {
    return (<div style={{ margin:"0 auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Tabela
            title={"Atendentes"}
            coluns={[
                { name: "#", value: "id" }, 
                { name: "Nome", value: "name" },
                { name: "Nivel", value: "nivel" },
                { name: "Setor", value: "setor" },
                { name: "Info", value: "info" }]}
            data={[{ id: 0, nivel:1,setor:"T.I",name:"Vander Silva",info: <IoIosAlert /> },{ id: 1, nivel:1,setor:"T.I",name:"Clauber Nogueira",info: <IoIosAlert /> },{ id: 2, nivel:2,setor:"T.I",name:"Dev Frabriocio Silva",info: <IoIosAlert /> }]}
        />
    </div>)
}