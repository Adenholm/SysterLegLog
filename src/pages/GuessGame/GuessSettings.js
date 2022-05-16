import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import DiscreteSlider from "./NumberCardsButton";



function GuessSettings (){
    const [numberOfCards, setNumberOfCards] = useState(4)
    const navigate = useNavigate();
    const toGuessPage = () => {
        navigate('/GuessPage',{state:{numCards:numberOfCards}});
    }
    return(
        <div>
            <button><Link to = {-1}>Tillbaka</Link></button>
            <li>
            <button onClick={true}>Välj kategori</button>
            </li>
            <li>
                <DiscreteSlider 
                    onChangeHandler = {setNumberOfCards} 
                />
            </li>
            <li>
            <button onClick={() => toGuessPage()}>Spela</button>
            </li>
            <button onClick={() => console.log(numberOfCards)}>Debug</button>
        </div>
    )

}

export default GuessSettings;

