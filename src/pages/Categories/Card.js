import { render } from "@testing-library/react"
import ReactDOM from 'react-dom';
import "./Card.css";
import Modal from "./Modal.js";
import React, { useState } from "react";

const Card = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="card">
            
            <img src={props.img} className="cardPhoto" onClick={() => setIsOpen(true)}/>            
            
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
