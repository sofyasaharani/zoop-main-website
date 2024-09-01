/** @format */

import React, { useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "../styles/cta.module.css";
import * as home from "../styles/home.css";
import { Link, useStaticQuery, graphql } from "gatsby";
import "../styles/global.css";
import { FaSearch } from "react-icons/fa";

export default function Cta() {
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Subscribed email:", email);
    // Clear the input field after submission (optional)
    setEmail("");
  };

  const data = useStaticQuery(graphql`
    query Footer {
      file(relativePath: { eq: "footer-banner.png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  `);

  console.log(data);
  const image = getImage(data.file.childImageSharp.gatsbyImageData);

  return (
    <div className={styles.cta}>
      <div className={styles.imageWrapper}>
        <GatsbyImage image={image} alt="Banner" />
      </div>
      <div className={styles.content}>
        <h2>Subscribe to our Newsletter</h2>
        <p>
          Zoop newsletter is pawsitively packed with exciting news, helpful
          tips, and upcoming events that will make you and your pet wag your
          tails (or flap your wings, or shed with joy
        </p>
        <div className={styles.subscriptionForm}>
          <input
            type="text"
            name="query"
            placeholder="sample@gmail.com"
            className={styles.subscriptionInput}
          />
          <button className={styles.subscriptionButton} type="submit">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
