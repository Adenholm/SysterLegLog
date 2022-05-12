import { TextField } from "@mui/material";
import "../Categories/SearchBar.css"

export const SearchBar = (props) =>{
    return(
        <div className="searchWrapper1">
            <div className="search">
                <TextField
                    className="inputRounded"
                    variant="outlined"
                    fullWidth
                    label="Sök"
                />
            </div>
        </div>
    )

}; export default SearchBar;