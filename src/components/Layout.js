/** @format */

import React from "react";
import Navbar from "./Navbar";
import "../styles/global.css";
import Footer from "./Footer";
import Cta from "./CTA";
import ScrollToTopButton from "../components/ScrollButton"; // Import the button

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <Cta />
      <Footer />
      <ScrollToTopButton /> {/* Add scroll-to-top button */}
    </div>
  );
}
