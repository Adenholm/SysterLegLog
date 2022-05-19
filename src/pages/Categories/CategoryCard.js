import React from "react";
import "./CategoryCard.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const CategoryCard = (props) => {
  const navigate = useNavigate();
  const toCardPage = () => {
    navigate("/Cards", { state: { category: props.title } });
  };

  return (
    <div
      onClick={() => {
        toCardPage();
      }}
      className="cardBody"
    >
      <button className="cardBtn">
        <img src={props.img} className="photo" />
        <h2 className="categoryTitletxt">
          <b>{props.title}</b>
        </h2>
      </button>
    </div>
  );
};
export default CategoryCard;
