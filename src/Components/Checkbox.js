import React, {useState} from "react";

const Checkbox = ({id,label,index,getState,setCategories,states}) => {
    const [checked, setChecked] = useState(false);
    const onChange = () => {
        let newChecked = !checked
        setChecked(newChecked);
        getState(newChecked,index);
        setCategories(states)
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
