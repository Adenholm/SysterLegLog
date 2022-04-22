
import React from 'react';
import Card from "./Card";

let Image = function statelessFunctionComponentClass(props) {
  //let source = './Components/images/' + props.source;
  let source = props.source;


  let style = {
    width: '200px',
    margin: '10px 5px 0px 5px'
  };

  return (
    <img src={source} style={style} />
    //<Card img={source} style={style} />
  );
};

export default Image;
