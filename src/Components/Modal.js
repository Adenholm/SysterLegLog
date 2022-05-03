import "./Modal.css"
import Sound from "react-sound";

//import computerKeyboard from "./sounds/Computer-keyboard.wav";
//import cat from "./sounds/cat.wav";

const Modal =({setIsOpen,props}) =>{
    return(
        <div id="modal">
            <button className= "btn" onClick={() => setIsOpen(false)}><img src={props.img} className="bigPhoto"/></button>
            <Sound
                url = {props.sound}
                playStatus = {Sound.status.PLAYING}
                playFromPosition={0}
            />
        </div>
    );
};
export default Modal

