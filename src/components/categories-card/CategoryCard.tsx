import Link from "next/link";
import React from "react";
import s from "./CategoryCard.module.css";

interface Props {
  id: number;
  title: string;
  img: string;
}

const CategoryCard = ({ id, title, img }: Props) => {
  return (
    <Link href={`/cards?category=${id}`} className={s["cardBody"]}>
      <button className={s["cardBtn"]}>
        <img src={img} className={s["photo"]} />
        <h2>
          <b>{title}</b>
        </h2>
      </button>
    </Link>
  );
};

export default CategoryCard;
