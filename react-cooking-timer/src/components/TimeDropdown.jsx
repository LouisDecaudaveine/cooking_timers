import { useState } from "react";

function TimeDropdown({rangeStart, rangeEnd, title, name}) {
    const [selectedOption, setSelectedOption] = useState(0);


    const dropdownValues = Array.from({length:rangeEnd - rangeStart + 1}, (_, index) => rangeStart + index);

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    }

    return(
        <div className="TimeDropDown"> 
            <p>{title}</p>  
            <label>
                <select id="dropdown" name={name} value={selectedOption} onChange={handleChange}>
                    {dropdownValues.map((val,index) => {
                        return <option key={index} value={val}>{val.toString()}</option>
                    })}
                </select>
            </label>
        </div>
    )

}

export default TimeDropdown;