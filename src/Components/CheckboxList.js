import { Categories } from "./Categories";
   

   const CheckboxList = (props) =>{

    function checkBoxChanged (id) {
        const newStates = [...props.categoryStates]
        newStates[id] = !props.categoryStates[id]
        props.setCategoryStates(newStates)
    }
    return (
        <div>
            <div>
                <input
                    type="checkbox"
                    checked={props.allCategories}
                    onChange={() => props.setAllCategories(!props.allCategories)}
                />
                <label htmlFor={"checkbox"}>{"Alla kategorier"}</label>
            </div>
            {Categories.map(cardData =>
                <div>
                    <input
                        id = {cardData.id}
                        type="checkbox"
                        checked={props.categoryStates[cardData.id]}
                        onChange={() => checkBoxChanged(cardData.id)}
                    />
                    <label htmlFor={cardData.id}>{cardData.name}</label>
                </div>
            )}
        </div>
    )
};
export default CheckboxList;
  