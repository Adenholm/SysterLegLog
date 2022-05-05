import "./Modal.css"
import Sound from "react-sound";


import closeicon from './icons/cross.png';
import {useState} from 'react';



//import computerKeyboard from "./sounds/Computer-keyboard.wav";
//import cat from "./sounds/cat.wav";


const Modal =({setIsOpen,props}) =>{
    const [isPlaying,setIsPlaying] = useState(true);
    return(
        <div id="modal">
            <img src={closeicon} className="closeImg" onClick={() => setIsOpen(false)}/>

            

            <button className= "btn" onClick={() => setIsPlaying(!isPlaying)} ><img src={props.img} className="bigPhoto"/></button>
            <Sound

                url = {props.sound}
                playStatus = {Sound.status.PLAYING}
                playFromPosition={0}
            />
        </div>
    );
};
export default Modal

