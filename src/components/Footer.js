/** @format */

import React from "react";
import * as styles from "../styles/footer.module.css";
import fb from "../images/footer-logo/fb.png";
import ig from "../images/footer-logo/ig.png";
import yt from "../images/footer-logo/yt.png";
import x from "../images/footer-logo/x.png";
import { Link } from "gatsby";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h4>Copyright 2024 Negoteq</h4>
      <div className={styles.social}>
        <Link to="https://zooppets.in/blog/">
          <img src={fb} alt=""></img>
        </Link>
        <Link to="https://zooppets.in/blog/">
          <img src={ig} alt=""></img>
        </Link>
        <Link to="https://zooppets.in/blog/">
          <img src={yt} alt=""></img>
        </Link>
        <Link to="https://zooppets.in/blog/">
          <img src={x} alt=""></img>
        </Link>
      </div>
    </footer>
  );
}
