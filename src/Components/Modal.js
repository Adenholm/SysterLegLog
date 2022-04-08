import "./Modal.css"
import Sound from "react-sound";
import stitch from "./images/stitch.png"
import computerKeyboard from "./sounds/Computer-keyboard.wav";

const Modal =({setIsOpen,props}) =>{
    return(
        <div className="modal">
            <button onClick={() => setIsOpen(false)}><img src={props.img} className="bigPhoto"/></button>
            <Sound
                url = {computerKeyboard}
                playStatus = {Sound.status.PLAYING}
                playFromPosition={0}
            />
        </div>
    );
};
export default Modal

