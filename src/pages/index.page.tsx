import React from "react";
import Link from "next/link";
import s from "./index.module.css";

function StartPage() {
  return (
    <div>
      <ul className={s["nav"]}>
        <li className={s["item"]}>
          <Link href="/categories" className={s["link"]}>
            Klicka och Lyssna
          </Link>
        </li>
        <li className={s["item"]}>
          <Link href="/guess-game" className={s["link"]}>
            Lyssna och Gissa
          </Link>
        </li>
        <li className={s["item"]}>
          <Link href="/guess-sound" className={s["link"]}>
            Gissa och se
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default StartPage;
