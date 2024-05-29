import "./style.css"
export default (props)=>{
    return (
        <div style={{display: props.isOpen ? "flex" : "none", backgroundColor:"#0000006e",width:"100vw",height:"100vh",position:"absolute",justifyContent:"center",alignItems:"center"}}>
            {props.children}
        </div>
    )
}