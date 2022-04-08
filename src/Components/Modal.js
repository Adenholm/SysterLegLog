import "./Modal.css"
import Sound from "react-sound";
import stitch from "./images/stitch.png"
import computerKeyboard from "./sounds/Computer-keyboard.wav";

const Modal =({setIsOpen,props}) =>{
    return(
        <div id="modal">
            <button className= "btn" onClick={() => setIsOpen(false)}><img src={props.img} className="bigPhoto"/></button>
            <Sound
                url = {computerKeyboard}
                playStatus = {Sound.status.PLAYING}
                playFromPosition={0}
            />
        </div>
    );
};
export default Modal

