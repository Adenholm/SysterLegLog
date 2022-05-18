import { render } from "@testing-library/react"
import ReactDOM from 'react-dom';
import "./Card.css";
import Modal from "./Modal.js";
import React, { useState } from "react";

const Card = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="card" style={{padding: (props.cardsize * 2) + "rem " + (props.cardsize * 2) + "rem"}}>
            
            <img 
                src={props.img} 
                className="cardPhoto" 
                onClick={() => setIsOpen(true)} 
                style={{width: (props.cardsize * 16) + "rem", 
                        height: (props.cardsize * 20) + "rem"}}/>      
            
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
