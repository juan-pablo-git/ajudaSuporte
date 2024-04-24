import Button from "../Button"
import Input from "../Input"
import "./style.css"
export default ({ title, data, coluns }) => {

    return (
        <table>
            <thead>
                <th >
                    <Button label={"+Adicionar"} />
                </th>
                <th>
                    <Input type="search" placeholder="pesquisar" />
                </th>
                <th>
                    FILTRAR
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