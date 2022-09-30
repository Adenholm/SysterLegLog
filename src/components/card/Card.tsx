import React, { useState } from "react";
import s from "./Card.module.css";
import Sound from "react-sound";
import { Modal } from "@mui/material";

interface Props {
  cardsize: number;
  img: string;
  sound: string;
}

const Card = ({ cardsize, img, sound }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div
      className={s["card"]}
      style={{
        padding: cardsize * 2 + "rem " + cardsize * 2 + "rem",
      }}
    >
      <img
        src={img}
        className={s["cardPhoto"]}
        onClick={() => setIsOpen(true)}
        style={{
          width: cardsize * 16 + "rem",
          height: cardsize * 20 + "rem",
        }}
      />
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <>
          <button className="modalBtn" onClick={() => setIsPlaying(!isPlaying)}>
            <img src={img} className="bigPhoto" />
          </button>
          <Sound url={sound} playStatus="PLAYING" playFromPosition={0} />
        </>
      </Modal>
    </div>
  );
};
export default Card;
