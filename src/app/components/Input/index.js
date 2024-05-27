import "./style.css"
export default ({ type, placeholder, children,style }) => {


    if (type == "select") {
        return <select style={style}>
            {children}
        </select>
    }else if(type == "textarea"){
        return <textarea placeholder={placeholder} style={style}></textarea>
    } else {
        return <input style={style} className="inputComponent" type={type} placeholder={placeholder} />
    }
}