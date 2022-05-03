import React from "react";
import "./CategoryCard.css"

function CategoryCard(props) {
    return(
        <div className="cardSize">
            <div className="cardBody">
                <div className="frame">
                    <img src={props.img} className= "photo"/>
                    <h2 className="cardTitle">{props.title}</h2>
                </div>
            </div>

        </div>
    )
}
export default CategoryCard;