/** @format */

import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import * as styles from "../styles/project-details.module.css";
import { graphql } from "gatsby";

const ProjectDetails = ({ data }) => {
  const image = data.wpPost;
  const { title, content, date } = data.wpPost;
  const author = data.wpPost.author.node.name;

  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2> {/* <h3>{stack}</h3> */}
        <h5>
          By {author} On {date}
        </h5>
        <div className={styles.featured}>
          <GatsbyImage
            image={
              image.featuredImage.node.localFile.childImageSharp.gatsbyImageData
            }
          />
        </div>
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </Layout>
  );
};

export default ProjectDetails;

// export const query = graphql`
//   query ProjectDetails($slug: String) {
//     markdownRemark(frontmatter: {slug: {eq: $slug}}) {
//       html
//       frontmatter {
//         stack
//         title
//         featuredImg {
//           childImageSharp {
//              gatsbyImageData(
//             layout: FULL_WIDTH
//             placeholder: BLURRED
//             formats: [AUTO, WEBP]
//         )
//           }
//         }
//       }
//     }
//   }
// `
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
  }
`;
