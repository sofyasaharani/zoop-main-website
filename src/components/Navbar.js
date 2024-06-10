/** @format */

import React from "react";
import { Link } from "gatsby";
import * as styles from "../styles/app.module.css";

export default function Navbar() {
  return (
    <nav>
      <h1>Zoop</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about/">About</Link>
        <Link to="/zoop-daily/">Zoop Daily</Link>
        <Link to="/contact/">Contact</Link>
        <Link className={styles.appBtn} to="/app/">
          Download Now
        </Link>
      </div>
    </nav>
  );
}
