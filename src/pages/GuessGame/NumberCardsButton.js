import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider'; 



  
  export default function DiscreteSlider(props) {
    return (
      <Box sx={{ width: 300 }}>
        <Slider
          aria-label="Temperature"
          defaultValue={4}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={2}
          max={8}
          onChange = {(e, val) => props.onChangeHandler(val)}
        />
      
      </Box>
    );
  }
  