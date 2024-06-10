/** @format */

import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Values from "../data/values.json";
import Choose from "../data/choose.json";
import "../styles/global.css";

export default function Home({ data }) {
  console.log(data);
  const image = getImage(data.file.childImageSharp.gatsbyImageData);

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Pet Community App</h2>
          <h3>Experience the Petaverse</h3>
          <p>Unlock the world of Petaverse with</p>
          <Link className={styles.btn} to="/contact">
            Join Now
          </Link>
        </div>
        <GatsbyImage image={image} alt="Banner" />
      </section>
      <section className={styles.value}>
        <h4>OUR VALUES</h4>
        <h3>Our Core Values</h3>
        <div className={styles.values}>
          {Values &&
            Values.map((record) => {
              return (
                <div>
                  <h2>{record.title}</h2>
                  <p>{record.description}</p>
                </div>
              );
            })}
        </div>
      </section>
      <section className={styles.chooses}>
        <div>
          <h4>WHY CHOOSE US</h4>
          <h3>Discover the Zoop Difference</h3>
          <p>
            We offer a unique platform that celebrates the bond between pets and
            their humans. Here’s why Zoop stands out:
          </p>
        </div>
        <div className={styles.choose}>
          {Choose &&
            Choose.map((record) => {
              return (
                <div>
                  <h2>{record.title}</h2>
                  <p>{record.description}</p>
                  <div className={styles.line}></div>
                </div>
              );
            })}
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`;
