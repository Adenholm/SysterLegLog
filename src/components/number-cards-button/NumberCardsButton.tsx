import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const DiscreteSlider = (props) => {
  return (
    <Box>
      <Slider
        aria-label="Temperature"
        defaultValue={4}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={2}
        max={8}
        onChange={(e, val) => props.onChangeHandler(val)}
      />
    </Box>
  );
};

export default DiscreteSlider;
