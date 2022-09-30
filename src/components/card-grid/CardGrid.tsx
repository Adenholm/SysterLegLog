import React, { useEffect, useState } from "react";
// import "../Grid.css";
import Grid from "@mui/material/Grid";
import Card from "../card/Card";

interface Props {
  cards: {
    id: number;
    pic: string;
    sound: string;
  }[];
  cardsize: number;
}

export const CardGrid = ({ cards, cardsize }: Props) => {
  return (
    <div>
      <Grid className="row">
        {cards.map((card) => (
          <Card
            img={card.pic}
            sound={card.sound}
            cardsize={cardsize}
            key={card.id}
          />
        ))}
      </Grid>
    </div>
  );
};

export default CardGrid;
