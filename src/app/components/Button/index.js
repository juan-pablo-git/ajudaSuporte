import "./style.css"
import tema from "../../config/tema.js"
export default ({label,onClick,color})=>{
    let bgColor =  color
    if(bgColor == "sucesso"){
        bgColor = tema.color.sucesso
    }else if(color == "erro"){
        bgColor = tema.color.erro

    }
    return <button style={{backgroundColor:bgColor}} onClick={onClick} className="button">{label}</button>
}