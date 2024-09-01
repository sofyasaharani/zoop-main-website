/** @format */

import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "../styles/blogPage.module.css";
import SidebarBlog from "../components/SidebarBlog";
import BannerImage from "../images/blog-banner.jpg";

const IndexPage = ({ pageContext }) => {
  const { group = [], index, first, last, pageCount, categories } = pageContext;

  const previousIndex = index - 1;
  const nextIndex = index + 1;

  const previousUrl =
    previousIndex === 1 ? "/zoop-daily/" : `/zoop-daily/${previousIndex}`;
  const nextUrl = `/zoop-daily/${nextIndex}`;

  // State for selected category
  const [selectedCategory, setSelectedCategory] = useState("");

  // State for filtered posts
  const [filteredPosts, setFilteredPosts] = useState(group);

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Update filtered posts when category changes
  useEffect(() => {
    if (selectedCategory) {
      const filtered = group.filter((post) =>
        post.categories.nodes.some(
          (category) => category.slug === selectedCategory
        )
      );
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(group);
    }
  }, [selectedCategory, group]);

  // Generate pagination numbers
  const paginationNumbers = [];
  for (let i = 1; i <= pageCount; i++) {
    const url = i === 1 ? `/zoop-daily/` : `/zoop-daily/${i}`;
    paginationNumbers.push(
      <Link key={i} to={url} className={styles.paginationLink}>
        {i}
      </Link>
    );
  }

  return (
    <Layout>
      <div className={styles.bannerBlog}>
        <div className={styles.imageWrapper}>
          <img
            src={BannerImage}
            alt="Blog Banner"
            className={styles.fullWidthImage}
          />
        </div>
        <div className={styles.content}>
          <h2>Blog</h2>
          <div className={styles.breadcrumb}>
            <Link to="/">Home</Link> / <Link to="/zoop-daily">Blog</Link>
          </div>
        </div>
      </div>
      <div className={styles.categoriesSection}>
        <button
          className={`${styles.categoryButton} ${
            selectedCategory === "" ? styles.activeCategory : ""
          }`}
          onClick={() => handleCategoryChange("")}>
          All Posts
        </button>
        {categories.length > 0 &&
          categories
            .filter((category) => category.slug !== "uncategorized") // Exclude "Uncategorized"
            .map((category) => (
              <button
                key={category.slug}
                className={`${styles.categoryButton} ${
                  selectedCategory === category.slug
                    ? styles.activeCategory
                    : ""
                }`}
                onClick={() => handleCategoryChange(category.slug)}>
                {category.name}
              </button>
            ))}
      </div>
      <div className={styles.container}>
        {/* First Column: Blog Posts */}
        <div className={styles.firstColumn}>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((project) => (
              <div key={project.id} className={styles.blogPost}>
                <GatsbyImage
                  image={getImage(
                    project.featuredImage.node.localFile.childImageSharp
                      .gatsbyImageData
                  )}
                  alt="Featured image"
                  className={styles.image}
                />
                <h3>{project.title}</h3>
                <p className={styles.zoop}>
                  By <span>Zoop ~</span> {project.date}
                </p>
                <div
                  className={styles.html}
                  dangerouslySetInnerHTML={{
                    __html: `${project.content.slice(0, 140)}...`, // Brief description
                  }}
                />

                {/* Append current page number to blog post URL */}
                <Link
                  to={`/zoop-daily${index === 1 ? "" : `/${index}`}/${
                    project.slug
                  }`}
                  className={styles.readMore}>
                  Read More
                </Link>
              </div>
            ))
          ) : (
            <p>No posts available</p>
          )}
          <div className={styles.line}></div>
          <div className={styles.pagination}>
            <Link to={previousUrl} className={styles.navLink}>
              Previous Page
            </Link>
            {paginationNumbers}
            <Link to={nextUrl} className={styles.navLink}>
              Next Page
            </Link>
          </div>
        </div>
        <SidebarBlog group={group} categories={categories} />{" "}
      </div>
    </Layout>
  );
};

export default IndexPage;
