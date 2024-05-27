import Button from "../Button"
import Input from "../Input"
import "./style.css"
import { FaFilter } from "react-icons/fa6";
export default ({ title, data, coluns, setModalIsOpen, modalIsOpen,setFilterIsOpen }) => {

    return (
        <table>
            <thead>
                <th >
                    <Button onClick={() => {
                        setModalIsOpen(!modalIsOpen)
                    }} label={"+Adicionar"} />
                </th>
                <th>
                    <Input type="search" placeholder="pesquisar" />
                </th>
                <th>
                    {
                        <FaFilter onClick={()=>{
                            setModalIsOpen(1)
                            setFilterIsOpen(1)
                        }} />
                        
                    }
                </th>
            </thead>
            <thead>
                <th colSpan={8}>
                    {title}
                </th>
            </thead>
            <thead>
                {
                    coluns.map((iten, key) => {
                        return (
                            <th>
                                {iten.name}
                            </th>

                        )
                    })
                }

            </thead>
            <tbody>{
                data.map((iten, k) => {
                    return <tr>{coluns.map((coluna, k) => {

                        return <td>{iten[coluna.value]}</td>
                    })}</tr>
                })
            }
            </tbody>
        </table>
    )
}