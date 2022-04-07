import { render } from "@testing-library/react"
import ReactDOM from 'react-dom';
import "./Card.css";
import Modal from "./Modal.js";
import React, { useState } from "react";

const Card = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="cardSize">
            
            <button onClick={() => setIsOpen(true)}><img src={props.img} className="photo"/></button>                
            
            {isOpen && (
                <Modal 
                    setIsOpen={setIsOpen}
                    props = {props}
                />
                
            )}
        </div>
    );
    
};
export default Card
