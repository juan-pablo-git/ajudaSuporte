'use client'
import React, { useRef, useState } from 'react';

export default () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [isActive, setIsActive] = useState(false);

    const handleLabelClick = (e) => {
        setSelectedOption(e.target.value);
        setIsActive(e.target.value !== '');
    };

    return (
        <div>
            <fieldset >
                <legend>

                    <label style={{ display: isActive ? "flex" : "none" }} htmlFor="teste">
                        Selecione uma opçao:
                    </label>
                </legend>
                <select onBlur={()=>{
                    setIsActive(false)
                }} style={
                    {
                        width: "200px",
                        height: "40px",
                        border: "none",
                        outline: "none",
                        padding: "5px"
                    }
                } value={selectedOption} onChange={handleLabelClick} >
                    <option value="" disabled >Selecione uma opçao</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </fieldset>
        </div>
    );
};