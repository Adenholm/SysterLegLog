import "./Modal.css"
import Sound from "react-sound";

import {useState,useEffect,useRef} from 'react';
import closeicon from "../../Components/icons/cross.png"


//ref={menuRef} ligger nere i html 




const Modal =({setIsOpen,props}) =>{
    let menuRef = useRef();
    useEffect(() => {
        document.addEventListener("mousedown",(event) => {
            if(!menuRef.current.contains(event.target)){
                setIsOpen(false)
            }
            
        })
    });
    const [isPlaying,setIsPlaying] = useState(true);
    return(
       
       <div id="modal">
            <img src={closeicon} className="closeImg" onClick={() => setIsOpen(false)}/>

            

            <button className= "modalBtn" ref={menuRef} onClick={() => setIsPlaying(!isPlaying)} ><img src={props.img} className="bigPhoto"/></button>
            <Sound

                url = {props.sound}
                playStatus = {Sound.status.PLAYING}
                playFromPosition={0}
            />
        </div>
    );
};
export default Modal

