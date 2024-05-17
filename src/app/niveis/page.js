import { IoIosAlert } from "react-icons/io"
import Tabela from "../components/Tabela"

export default () =>{
    return (
        <div style={{ margin:"0 auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Tabela
            title={"Niveis"}
            coluns={[{ name: "#", value: "id" }, { name: "Nome", value: "name" }, { name: "Info", value: "info" }]}
            data={[{ id: 0, name: "suporte 1", info: <IoIosAlert /> },{ id: 1, name: "suporte 2", info: <IoIosAlert /> }]}
        />
    </div>
    )
}