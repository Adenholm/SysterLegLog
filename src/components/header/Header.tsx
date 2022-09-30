import React from "react";
import Link from "next/link";
import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s["header"]}>
      <Link href="/" className={s["logo"]}>
        <h1>LegLoggen</h1>
      </Link>
      <div className={s["buttonContainer"]}>
        <li className={s["menuButton"]}>
          <Link href="/categories" className={s["headerLink"]}>
            Klicka och Lyssna
          </Link>
        </li>
        <li className={s["menuButton"]}>
          <Link href="/guess-game" className={s["headerLink"]}>
            Lyssna och Gissa
          </Link>
        </li>
        <li className={s["menuButton"]}>
          <Link href="/guess-sound" className={s["headerLink"]}>
            Gissa och se
          </Link>
        </li>
      </div>
    </div>
  );
};
export default Header;
