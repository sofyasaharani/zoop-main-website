/** @format */

import React, { useState } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
// import "../styles/home.css";
import { FaCheck, FaArrowRight, FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as styles from "../styles/paw.module.css";

export default function Home({ data }) {
  const image = getImage(data.file.childImageSharp.gatsbyImageData);
  const blogPosts = data.allWpPost.nodes; // Fetch blog posts

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  return (
    <Layout>
      <div className={styles.containerPaw}>
        <section className={styles.firstHeader}>
          <div>
            <h2>Campaigns</h2>
          </div>
          <p>
            Millions of stray animals roam the streets worldwide, facing hunger,
            illness, and danger. They deserve a chance at a safe and loving
            life. Together, we can create a world where every animal feels cared
            for and protected.
          </p>
        </section>

        <section className={styles.secondHeader}>
          <h4>WELCOME TO ZOOP</h4>
          <h1>Paw Protection Fund</h1>
          <p>
            Our goal is to create a vibrant community of pet lovers who are
            passionate about helping stray animals. Through this initiative, we
            aim to collect donations from kind-hearted individuals and
            distribute them among the Zoop: Stray Saver Network, which consists
            of registered NGOs, rescue groups, and individuals dedicated to
            feeding, rescuing, and treating stray animals. Zoop will also
            utilize these funds for its own charitable efforts to support
            strays.
          </p>
          <img src="../images/paw-banner.jpg" alt="Zoop Logo" />
        </section>

        <section className={styles.thirdHeader}>
          <img src="../images/paw-banner-1.jpg" alt="Dog Banner" />
          <div className={styles.content}>
            <div className={styles.title}>
              <h4>PAW PROTECTION FUND</h4>
              <h1>How It Works</h1>
              <p>
                Written enquire painful ye to offices forming it. Then so does
                over sent dull on. Likewise offended humoured mrs fat trifling
                answered.
              </p>
            </div>
            <div className={styles.graph}>
              <div className={styles.timeline}>
                <div className={styles.list}>
                  <h5>One</h5>
                  <h4>Donate to the Fund Pool</h4>
                  <p>
                    Contribute any amount you wish to support stray animals.
                  </p>
                </div>
                <div className={styles.list}>
                  <h5>Two</h5>
                  <h4>Distribution of Funds</h4>
                  <ul>
                    <li>
                      The Zoop: Stray Saver Network, which includes registered
                      NGOs and individuals focused on animal welfare.
                    </li>
                    <li>
                      Zoop’s own charitable initiatives for stray animals.
                    </li>
                  </ul>
                </div>
                <div className={styles.list}>
                  <h5>Three</h5>
                  <h4>Transparency</h4>
                  <p>
                    We ensure complete transparency in fund allocation. Regular
                    updates will be provided on how the donations are being
                    utilized.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.fourHeader}>
          <img src="../images/paw-banner-2.jpg" alt="Dog Banner" />
          <div className={styles.content}>
            <h4>PAW PROTECTION FUND</h4>
            <h1>Why Participate</h1>
            <p>Every penny accounts</p>
            <ul>
              <li>
                <FaCheck></FaCheck>
                <p>
                  Stray Support: Your contribution helps provide food, medical
                  care, and shelter to stray animals in need.
                </p>
              </li>
              <li>
                <FaCheck></FaCheck>
                <p>
                  Rescue Relief: By donating, you support a network of dedicated
                  individuals and organizations working tirelessly for animal
                  welfare.
                </p>
              </li>
              <li>
                <FaCheck></FaCheck>
                <p>
                  Be a Hero: Every donation, big or small, makes you a hero to a
                  stray animal
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.fiveHeader}>
          <h4>GALLERY</h4>
          <h1>Souls of the Streets: Portraits of India's Strays</h1>
          <p>
            From playful pups to wise elders, this gallery offers a glimpse into
            the lives of India’s street dogs. Witness their resilience, their
            struggles, and the undeniable spirit that shines through in their
            eyes. Many of these dogs face daily challenges, and your support can
            make a difference.
          </p>
          <div>
            <div className={styles.gridBanner}>
              {[
                "../images/paw-grid/grid-banner-1.jpg",
                "../images/paw-grid/grid-banner-2.jpg",
                "../images/paw-grid/grid-banner-3.jpg",
                "../images/paw-grid/grid-banner-4.jpg",
                "../images/paw-grid/grid-banner-5.jpg",
                "../images/paw-grid/grid-banner-6.jpg",
                "../images/paw-grid/grid-banner-7.jpg",
                "../images/paw-grid/grid-banner-9.jpg",
                "../images/paw-grid/grid-banner-8.jpg",
                "../images/paw-grid/grid-banner-10.jpg",
                "../images/paw-grid/grid-banner-11.jpg",
                "../images/paw-grid/grid-banner-12.jpg",
                "../images/paw-grid/grid-banner-14.jpg",
                "../images/paw-grid/grid-banner-13.jpg",
              ].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Dog Banner ${index + 1}`}
                  onClick={() => handleImageClick(src)}
                />
              ))}
            </div>

            {selectedImage && (
              <div className={styles.modal} onClick={closeModal}>
                <span className={styles.close}>&times;</span>
                <div className={styles.modalContent}>
                  <img src={selectedImage} alt="Large View" />
                </div>
              </div>
            )}
          </div>
        </section>

        <section className={styles.sixHeader}>
          <h1>
            Helping one animal wont change the world, but it will change the
            world for that one animal
          </h1>
          <div className={styles.content}>
            <h1>How to donate</h1>
            <p>
              Simply fill out our Google Form to make your donation. Your
              generosity can change the lives of many stray animals.
            </p>
            <Link className="btn" to="/contact">
              Donate
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query HomePage {
    file(relativePath: { eq: "banner-choose.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    allWpPost(limit: 5) {
      # Add the limit parameter here
      nodes {
        id
        title
        excerpt
        slug
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                )
              }
            }
          }
        }
      }
    }
  }
`;
