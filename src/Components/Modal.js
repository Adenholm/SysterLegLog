import "./Modal.css"
import sound from "react-sound";
import stitch from "./images/stitch.png"

const Modal =({setIsOpen,props}) =>{
    return(
        <div className="modal">
            <button onClick={() => setIsOpen(false)}><img src={props.img} className="bigPhoto"/></button>

        </div>
    );
};
export default Modal

