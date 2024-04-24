import { IoIosAlert } from "react-icons/io"
import Tabela from "../components/Tabela"

export default () => {
    return (<div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Tabela
            title={"Atendentes"}
            coluns={[{ name: "#", value: "id" }, { name: "Nome", value: "name" }, { name: "Info", value: "info" }]}
            data={[{ id: 0, name: "Vander", info: <IoIosAlert /> }]}
        />
    </div>)
}