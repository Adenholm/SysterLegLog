import React from "react";
import s from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={s["footer"]}>
      <hr className={s["footer-seperator"]} />
      <section className={s["footer-info"]}>
        <section className={s["footer-info__left"]}>
          <section className={s["footer-info__name"]}>Kontakt</section>
        </section>
        <a
          href="mailto:systerleglog@gmail.com?body="
          target="_blank"
          rel="noopener noreferrer"
        >
          systerleglog@gmail.com
        </a>
      </section>
      <hr className={s["footer-seperator"]} />
    </section>
  );
};

export default Footer;
