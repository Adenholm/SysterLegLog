import { TextField } from "@mui/material";
import "../Categories/SearchBar.css"
import { useState } from "react";

export const SearchBar = (props) =>{
    
    //convert text to lower case
    let inputHandler = (input) => {
        var lowerCase = input.target.value.toLowerCase();
        props.setInputText(lowerCase)
      

    };

    return(
        <div className="searchWrapper">
            <div className="search">
                <TextField
                    className="inputRounded"
                    onChange={inputHandler}
                    variant="outlined"
                    fullWidth
                    label="Sök"
                />
            </div>

        </div>
    )

}; export default SearchBar;