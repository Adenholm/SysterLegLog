import "./Modal.css"

function Modal({setIsOpen, props}){
    return(
        <div className="modal">
            <button onClick={() => setIsOpen(false)}><img src={props.img} className="photo"/></button>

        </div>
    );
}

