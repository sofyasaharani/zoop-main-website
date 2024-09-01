/** @format */

import React, { useState, useEffect } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import * as styles from "../styles/blogPage.module.css";

const SidebarBlog = () => {
  const data = useStaticQuery(graphql`
    query {
      allWpPost(sort: { fields: date, order: DESC }) {
        nodes {
          id
          title
          slug
          date(formatString: "MMMM DD, YYYY")
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 300, height: 200, placeholder: BLURRED)
                }
              }
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
        }
      }
      allWpCategory {
        nodes {
          name
          slug
        }
      }
      allWpTag {
        nodes {
          name
          slug
        }
      }
    }
  `);

  const group = data.allWpPost.nodes;
  const categories = data.allWpCategory.nodes;
  const tags = data.allWpTag.nodes;

  const [fixedBlogPosts, setFixedBlogPosts] = useState([]);
  const [categoryPostCounts, setCategoryPostCounts] = useState({});

  // Fetch the fixed 3 blog posts
  useEffect(() => {
    if (group.length > 0) {
      setFixedBlogPosts(group.slice(0, 3));
    }
  }, [group]);

  // Calculate post counts per category
  useEffect(() => {
    const counts = {};
    group.forEach((post) => {
      if (post.categories?.nodes) {
        post.categories.nodes.forEach((category) => {
          counts[category.slug] = (counts[category.slug] || 0) + 1;
        });
      }
    });
    setCategoryPostCounts(counts);
  }, [group]);

  return (
    <div className={styles.secondColumn}>
      <div className={styles.logo}>
        <StaticImage
          src="../images/Zoop logo-03.png" // Adjust the path as necessary
          alt="Zoop Logo"
          placeholder="blurred"
        />
        <p>
          Zoop is your one-stop shop for everything pet-related. Download the
          app today and join a vibrant community that’s passionate about making
          a difference in the lives of pets everywhere!
        </p>
        <div className={styles.socialMedia}>
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
      <div className={styles.section}>
        <h3>Blog</h3>
        {fixedBlogPosts.length > 0 ? (
          fixedBlogPosts.map((project) => (
            <div key={project.id} className={styles.blogSection}>
              <Link to={`/zoop-daily/${project.slug}`}>
                <GatsbyImage
                  image={getImage(
                    project.featuredImage.node.localFile.childImageSharp
                      .gatsbyImageData
                  )}
                  alt="Featured image"
                  className={styles.image}
                />
              </Link>

              <div>
                <Link to={`/zoop-daily/${project.slug}`}>{project.title}</Link>
                <p className={styles.zoop}>{project.date}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No posts available</p>
        )}
      </div>
      <div className={styles.section}>
        <h3>Explore Topics</h3>
        <ul className={styles.categoryList}>
          {categories
            .filter((category) => category.slug !== "uncategorized") // Exclude "Uncategorized"
            .map((category) => (
              <li key={category.slug}>
                <Link
                  to={`/category/${category.slug}`}
                  className={styles.categoryItem}>
                  <span className={styles.categoryName}>
                    <FontAwesomeIcon
                      className={styles.categoryIcon}
                      icon={faAngleRight}
                    />
                    {category.name}
                  </span>
                  <span className={styles.categoryCount}>
                    ({categoryPostCounts[category.slug] || 0})
                  </span>
                </Link>
              </li>
            ))}
        </ul>
      </div>

      <div className={styles.section}>
        <h3>Newsletter</h3>
        <h4>Join 70,000 subscribers!</h4>
        <div className={styles.subscriptionForm}>
          <input
            type="text"
            name="query"
            placeholder="sample@gmail.com"
            className={styles.subscriptionInput}
          />
        </div>
        <button className={styles.subscriptionButton} type="submit">
          Subscribe
        </button>
        <p className={styles.subscriptionLink}>
          By signing up, you agree to our {""}
          <Link to="/privacy-policy">Privacy Policy</Link>
        </p>
      </div>

      <div className={styles.section}>
        <h3>Tag Cloud</h3>
        <ul className={styles.tagCloud}>
          {tags.map((tag) => (
            <li key={tag.slug}>
              <Link to={`/tag/${tag.slug}`} className={styles.tagItem}>
                {tag.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarBlog;
