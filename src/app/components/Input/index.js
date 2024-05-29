import { useState } from "react";
import "./style.css"
export default ({ type, placeholder, children, style, onChange, onClick }) => {

    const [selectedOption, setSelectedOption] = useState('');
    const [isActive, setIsActive] = useState(false);

    const handleLabelClick = (e) => {
        setSelectedOption(e.target.value);
        setIsActive(e.target.value !== '');
    };
    if (type == "select") {
        return <div>
            <fieldset >
                <legend>

                    <label style={{ display: isActive ? "flex" : "none" }} htmlFor="teste">
                        {placeholder}
                    </label>
                </legend>
                <select className="inputComponent" style={style} value={selectedOption} onChange={handleLabelClick} >
                    {children}
                </select>
            </fieldset>
        </div>
    } else if (type == "textarea") {
        return <textarea onClick={onClick} onChange={onChange} placeholder={placeholder} style={style}></textarea>
    } else {
        return <input onChange={onChange} onClick={onClick} style={style} className="inputComponent" type={type} placeholder={placeholder} />
    }
}