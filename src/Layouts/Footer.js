import React from "react";
import "./Footer.css";

const Footer = (props) => {
  return (
    <section className="footer">
      <hr className="footer-seperator" />
      <section className="footer-info">
        <section className="footer-info__left">
          <section className="footer-info__name">Kontakt</section>
        </section>
        <a href="/" target="_blank" rel="noopener noreferrer">
          systerleglog@gmail.com
        </a>
      </section>

      <hr className="footer-seperator" />
    </section>
  );
};
export default Footer;
