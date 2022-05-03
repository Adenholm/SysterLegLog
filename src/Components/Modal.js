import "./Modal.css"
import Sound from "react-sound";
import stitch from "./images/stitch.png";
import pettson from "./images/pettsonsocka.jpg";
import computerKeyboard from "./sounds/Computer-keyboard.wav";
import cat from "./sounds/cat.wav";
import closeicon from './icons/cross.png';
import {useState} from 'react';

function clickMe(){
  alert('You clicked me!')
}
//<button className="closeBtn" onClick={() => setIsOpen(false)}><img src={closeicon} className="closeImg"/></button>  
//<img src={closeicon} onClick={() => setIsOpen(false)} className="closeImg"/>

//img src={props.img} className="bigPhoto"

const Modal =({setIsOpen,props}) =>{
    const [isPlaying,setIsPlaying] = useState(true);
    return(
        <div id="modal">
            <img src={closeicon} className="closeImg" onClick={() => setIsOpen(false)}/>

            

            <button className= "btn" onClick={() => setIsPlaying(!isPlaying)} ><img src={props.img} className="bigPhoto"/></button>
            <Sound
                url = {cat}
                playStatus = {
                    Sound.status.PLAYING
                }
                playFromPosition={0}
            />
        </div>
    );
};
export default Modal

