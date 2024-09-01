/** @format */

import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import SidebarBlog from "../components/SidebarBlog";
import * as styles from "../styles/project-details.module.css";
import { graphql } from "gatsby";

const ProjectDetails = ({ data }) => {
  const { wpPost, allWpPost, allWpCategory } = data;
  const { title, content, date } = wpPost;
  const author = wpPost.author.node.name;

  // Prepare data for SidebarBlog
  const group = allWpPost.nodes;
  const categories = allWpCategory.nodes;

  return (
    <Layout>
      <div className={styles.fullWidthImage}>
        <GatsbyImage
          image={
            wpPost.featuredImage.node.localFile.childImageSharp.gatsbyImageData
          }
          alt={title}
        />
        <div className={styles.titleOverlay}>{title}</div>
      </div>
      <div className={styles.container}>
        <div className={styles.details}>
          <div
            className={styles.html}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
        <SidebarBlog group={group} categories={categories} />{" "}
        {/* Add SidebarBlog */}
      </div>
    </Layout>
  );
};

export default ProjectDetails;

// Existing GraphQL query
export const query = graphql`
  query ProjectDetails($slug: String) {
    wpPost(slug: { eq: $slug }) {
      slug
      title
      content
      date(formatString: "dddd / mm / yyyy hh:mm")
      modified(formatString: "dddd / mm / yyyy hh:mm")
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(height: 500, width: 2000)
            }
          }
        }
      }
      author {
        node {
          name
        }
      }
    }
    allWpPost {
      nodes {
        id
        slug
        title
        date(formatString: "dddd / mm / yyyy")
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(height: 150, width: 300)
              }
            }
          }
        }
      }
    }
    allWpCategory {
      nodes {
        slug
        name
      }
    }
  }
`;
