import { render } from "@testing-library/react"
import React from "react"
import ReactDOM from 'react-dom';
import "./Card.css"


class Card extends React.Component{
    enhancePic(){

    }
    render(){
        return(
            <div className="cardSize">
                <div className="card__body">
                <button onClick={this.enhancePic}><img src={this.props.img} className="photo"/></button>                
                </div>
                <h1 className="card__title">{this.props.title}</h1>
        
               </div>
        )
    }
}
export default Card
