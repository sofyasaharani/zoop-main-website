/** @format */

import React, { useEffect } from "react";
import { Link } from "gatsby";
import { FaSearch } from "react-icons/fa";
import { StaticImage } from "gatsby-plugin-image";
import * as appStyles from "../styles/app.module.css";
import { BiSolidDownArrow } from "react-icons/bi";

export default function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const links = document.querySelectorAll("nav a");
      links.forEach((link) => {
        if (link.href === window.location.href) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    };

    handleScroll(); // Initial call

    window.addEventListener("popstate", handleScroll);
    return () => {
      window.removeEventListener("popstate", handleScroll);
    };
  }, []);

  return (
    <nav className={appStyles.navbar}>
      <div>
        <StaticImage
          src="../images/Zoop logo-02.png" // Adjust the path as necessary
          alt="Zoop Logo"
          placeholder="blurred"
          layout="fixed"
          width={120}
          height={120}
          className={appStyles.logo}
        />
      </div>
      <div className={appStyles.navList}>
        <Link to="/" className="">
          Home
        </Link>
        <Link to="/about/" className="">
          About
        </Link>
        <Link to="/zoop-daily/" className="">
          Blog
        </Link>
        <div className={appStyles.dropdown}>
          <Link to="#" className={appStyles.dropdownLink}>
            With Us <BiSolidDownArrow className={appStyles.arrowIcon} />
          </Link>
          <div className={appStyles.dropdownContent}>
            <Link to="/paw-protection-fund/" className={appStyles.dropdownItem}>
              Paw Protection Fund
            </Link>
            <Link to="/stray-saver-network/" className={appStyles.dropdownItem}>
              Stray Saver Network
            </Link>
          </div>
        </div>

        <Link to="/contact/" className="">
          Contact
        </Link>
      </div>
      <div className={appStyles.searchBtn}>
        <input
          type="text"
          name="query"
          placeholder="Search for paw protection funds"
          className={appStyles.searchInput}
        />
        <FaSearch className={appStyles.searchIcon} />
      </div>
    </nav>
  );
}
