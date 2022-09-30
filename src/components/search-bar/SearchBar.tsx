import { TextField } from "@mui/material";
// import "./SearchBar.css";

interface Props {
  query: string;
  onChange: (newValue: string) => void;
}

export const SearchBar = ({ query, onChange }: Props) => {
  return (
    <div className="searchWrapper">
      <div className="search">
        <TextField
          value={query}
          className="inputRounded"
          onChange={(e) => onChange(e.target.value.toLowerCase())}
          variant="outlined"
          fullWidth
          label="Sök"
        />
      </div>
    </div>
  );
};
export default SearchBar;
