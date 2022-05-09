import React, {useState} from "react";

const Checkbox = ({id,label,index,getState}) => {
    const [checked, setChecked] = useState(false);
    const onChange = () => {
        setChecked(!checked);
        getState(checked,index);
      };
      getState(checked,index);
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
