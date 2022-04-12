import "./Modal.css"
import Sound from "react-sound";
import stitch from "./images/stitch.png";
import pettson from "./images/pettsonsocka.jpg";
import computerKeyboard from "./sounds/Computer-keyboard.wav";
import cat from "./sounds/cat.wav";

const Modal =({setIsOpen,props}) =>{
    return(
        <div id="modal">
            <button className= "btn" onClick={() => setIsOpen(false)}><img src={props.img} className="bigPhoto"/></button>
            <Sound
                url = {cat}
                playStatus = {Sound.status.PLAYING}
                playFromPosition={0}
            />
        </div>
    );
};
export default Modal

