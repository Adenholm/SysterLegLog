import { Categories } from "./Categories";
import { Checkbox } from "@mui/material";

const CheckboxList = (props) => {
  function checkBoxChanged(id) {
    const newStates = [...props.categoryStates];
    newStates[id] = !props.categoryStates[id];
    props.setCategoryStates(newStates);
  }
  return (
    <div>
      <div>
        <Checkbox
          checked={props.allCategories}
          onChange={() => props.setAllCategories(!props.allCategories)}
          defaultChecked
          size="small"
          sx={{
            color: "green",
            "&.Mui-checked": {
              color: "green",
            },
          }}
        />
        <label htmlFor={"checkbox"}>{"Alla kategorier"}</label>
      </div>
      {Categories.map((cardData) => (
        <div>
          <Checkbox
            id={cardData.id}
            checked={props.categoryStates[cardData.id]}
            onChange={() => checkBoxChanged(cardData.id)}
            defaultChecked
            size="small"
            sx={{
              color: "green",
              "&.Mui-checked": {
                color: "green",
              },
            }}
          />
          <label htmlFor={cardData.id}>{cardData.name}</label>
        </div>
      ))}
    </div>
  );
};
export default CheckboxList;
