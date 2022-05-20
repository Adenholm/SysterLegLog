import Checkbox from "./Checkbox";
import { Categories } from "./Categories";
   

   const CheckboxList = (props) =>{
         //array with individual states for each checkbox to keep track of which checkboxes are checked or not
    const states = []
   
    //var that keeps track on where each category has its state
    var i = -1;
   
    //function for creating remaining checkboxes
    function createCheckbox(cardData) {
        i++;
        return(    
                <Checkbox 
                id = "checkbox"
                label = {cardData.name}
                index = {i}
                getState = {(state,index) => states[index]=state}
                setCategories = {(p) => props.setCategoryStates(p)}
                states = {states}
                />
        )
    } 
    return (
        <div>
            <div>
                <input
                    id="checkbox"
                    type="checkbox"
                    checked={props.allCategories}
                    onChange={() => props.setAllCategories(!props.allCategories)}
                />
                <label htmlFor={"checkbox"}>{"Alla kategorier"}</label>
            </div>
        {Categories.map(createCheckbox)}
        </div>
    )
   };
   export default CheckboxList;
  
