/** @format */

import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";
import * as styles from "../styles/footer.module.css"; // Import CSS module
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterRecentBlogPosts {
      allWpPost(limit: 3, sort: { fields: date, order: DESC }) {
        nodes {
          id
          title
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
  `);

  const blogPosts = data.allWpPost.nodes;

  return (
    <footer className={styles.footer}>
      {/* First Column: Logo and Description */}
      <div className={styles.footerColumn}>
        <div className={styles.footerLogo}>
          <StaticImage
            src="../images/Zoop logo-02.png"
            alt="Zoop Logo"
            placeholder="blurred"
          />
        </div>
        <p className={styles.descriptionZoop}>
          Zoop is your one-stop shop for everything pet-related. Download the
          app today and join a vibrant community that’s passionate about making
          a difference in the lives of pets everywhere!
        </p>
        <div className={styles.footerSocialMedia}>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialMediaIcon}>
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialMediaIcon}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialMediaIcon}>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialMediaIcon}>
            <FontAwesomeIcon icon={faPinterestP} />
          </a>
        </div>
      </div>

      <div className={styles.footerColumn + " " + styles.contact}>
        <h3>Contact</h3>
        <p>
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          contact@zooppets.in
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} className={styles.icon} />
          +91 72007 00369
        </p>
        <p>
          <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
          Bengaluru, Karnataka, India
        </p>
      </div>

      <div className={styles.footerColumn}>
        <h3>Quick Links</h3>
        <Link to="/about">Paw Protection Fund</Link>
        <Link to="/services">Stray Saver Network</Link>
      </div>

      {/* Fourth Column: Menu */}
      <div className={styles.footerColumn}>
        <h3>Menu</h3>
        <Link to="/">Home</Link>
        <Link to="/shop">About us</Link>
        <Link to="/faq">Contact us</Link>
      </div>

      <div className={`${styles.footerColumn} ${styles.lastColumn}`}>
        <h3>Recent Blog</h3>
        {blogPosts.map((post) => {
          const image = getImage(post.featuredImage.node.localFile);
          return (
            <Link
              to={`/zoop-daily/${post.slug}`}
              key={post.id}
              className={styles.blogPost}>
              <GatsbyImage
                image={image}
                alt={post.title}
                className={styles.blogImage}
              />
              <div className={styles.blogDetails}>
                <h4>{post.title}</h4>
                <p>{post.date}</p>
              </div>
            </Link>
          );
        })}
      </div>

      <p className={styles.copyright}>
        © 2024 Created with <Link to="/faq">Negoteq</Link>
      </p>
    </footer>
  );
};

export default Footer;
