/** @format */

import React, { useState, useEffect } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import SidebarBlog from "../components/SidebarBlog";
import * as styles from "../styles/blogPage.module.css";
import BannerImage from "../images/blog-banner.jpg";

const TagPage = ({ data }) => {
  const tag = data.tag;
  const posts = data.allWpPost.nodes;

  // State for fixed blog posts
  const [fixedBlogPosts, setFixedBlogPosts] = useState([]);

  // Fetch the fixed 3 blog posts (not affected by tag filtering)
  useEffect(() => {
    const allPosts = data.allWpPost.nodes; // Get all posts for fixed blog posts
    if (allPosts.length > 0) {
      setFixedBlogPosts(allPosts.slice(0, 3)); // Set the first 3 posts as fixed
    }
  }, [data.allWpPost.nodes]);

  return (
    <Layout>
      <div className={styles.bannerBlog}>
        <div className={styles.imageWrapper}>
          <img
            src={BannerImage}
            alt="Tag Banner"
            className={styles.fullWidthImage}
          />
        </div>
        <div className={styles.content}>
          <h2>{tag.name}</h2>
          <div className={styles.breadcrumb}>
            <Link to="/">Home</Link> / <Link to="/zoop-daily">Blog</Link> /
            <Link to="/zoop-daily"> Tag</Link>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.firstColumn}>
          <div className={styles.postsContainer}>
            {posts.length > 0 ? (
              posts.map((post) => (
                <div key={post.id} className={styles.blogPost}>
                  <Link to={`/zoop-daily/${post.slug}`}>
                    <GatsbyImage
                      image={getImage(
                        post.featuredImage.node.localFile.childImageSharp
                          .gatsbyImageData
                      )}
                      alt="Featured image"
                      className={styles.image}
                    />
                  </Link>
                  <h3>{post.title}</h3>
                  <p className={styles.zoop}>
                    By <span>Zoop ~</span> On {post.date}
                  </p>
                  <div
                    className={styles.html}
                    dangerouslySetInnerHTML={{
                      __html: `${post.excerpt.slice(0, 140)}...`,
                    }}
                  />
                  <Link
                    to={`/zoop-daily/${post.slug}`}
                    className={styles.readMore}>
                    Read More
                  </Link>
                </div>
              ))
            ) : (
              <p>No posts available with this tag.</p>
            )}
          </div>
        </div>

        {/* Second Column: Sidebar */}
        <SidebarBlog
          group={fixedBlogPosts}
          categories={data.allWpCategory.nodes}
        />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    tag: wpTag(slug: { eq: $slug }) {
      name
    }
    allWpPost(
      filter: { tags: { nodes: { elemMatch: { slug: { eq: $slug } } } } }
    ) {
      nodes {
        id
        slug
        title
        date(formatString: "MMMM DD, YYYY")
        excerpt
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
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
        count
      }
    }
  }
`;

export default TagPage;
