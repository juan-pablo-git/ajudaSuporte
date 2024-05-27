import "./style.css"
export default ({ type, placeholder, children,style,onChange }) => {


    if (type == "select") {
        return <select onChange={onChange} style={style}>
            {children}
        </select>
    }else if(type == "textarea"){
        return <textarea onChange={onChange} placeholder={placeholder} style={style}></textarea>
    } else {
        return <input onChange={onChange} style={style} className="inputComponent" type={type} placeholder={placeholder} />
    }
}