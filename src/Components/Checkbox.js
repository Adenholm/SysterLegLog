import React, {useState} from "react";

const Checkbox = ({id,label,value}) => {
    const [checked, setChecked] = useState(false);
    const onChange = () => {
        setChecked(!checked);
      };
    return (
        <div>
            <input
                id={id}
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};
export default Checkbox;
