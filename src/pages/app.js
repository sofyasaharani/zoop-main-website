/** @format */

import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import * as styles from "../styles/app.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Values from "../data/values.json";
import android from "../images/app-icon/android.png";
import appstore from "../images/app-icon/appstore.png";

export default function Home({ data }) {
  console.log(data);
  const image = getImage(data.file.childImageSharp.gatsbyImageData);

  return (
    <Layout>
      <section className={styles.header}>
        <div className={styles.headerContent}>
          <h3>Awesome Technology Sign Up now and Join our Community</h3>
          <p>
            Lorem ninja ipsum dolor sit amet, consectetuer adipiscing elit, sed
            diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
            erat volutpat. Ut ninja wisi enim ad minim veniam, quis nostrud
            exerci tation ullamcorper suscipit ninja lobortis nisl ut aliquip ex
            ea commodo consequat
          </p>
          <Link to="https://zooppets.in/blog/">
            <img src={android} alt=""></img>
          </Link>
          <Link to="https://zooppets.in/blog/">
            <img className={styles.store} src={appstore} alt=""></img>
          </Link>
        </div>
        <GatsbyImage image={image} alt="Banner" />
      </section>

      <section className={styles.value}>
        <h3>Zoop App Features</h3>
        <p>Lorem ninja ipsum dolor sit amet, consectetuer adipiscing elit</p>
        <div className={styles.values}>
          {Values &&
            Values.map((record) => {
              return (
                <div className={styles.line}>
                  <h2>{record.title}</h2>
                  <p>{record.description}</p>
                </div>
              );
            })}
        </div>
      </section>
      <section className={styles.value}>
        <h3>Testimonial</h3>
        <div className={styles.values}>
          {data.allTestimoniJson.nodes.map((record, index) => {
            const testimonialImage = getImage(record.image);
            return (
              <div className={styles.cardContainer} key={index}>
                <div className={styles.card}>
                  <GatsbyImage
                    className={styles.cardImg}
                    image={testimonialImage}
                    alt="Testimonial Image"
                  />
                  <p>"{record.description}"</p>
                  <h2>{record.title}</h2>
                  <p>{record.job}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query {
    allTestimoniJson {
      nodes {
        title
        job
        description
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    file(relativePath: { eq: "banner-app.png" }) {
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
