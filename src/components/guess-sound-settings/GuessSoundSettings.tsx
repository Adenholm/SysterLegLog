import React from "react";
import CheckboxList from "../../components/CheckboxList";

const GuessSoundSettings = (props) => {
  return (
    <div
      id="mySidebar"
      className="sidebar"
      style={{ width: props.isSettingsOpen ? "250px" : "0px" }}
    >
      <CheckboxList {...props} />
    </div>
  );
};

export default GuessSoundSettings;
