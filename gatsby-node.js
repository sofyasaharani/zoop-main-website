/** @format */

const path = require("path");
const createPaginatedPages = require("gatsby-paginate");

exports.createPages = ({ graphql, actions: { createPage } }) => {
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allWpPost {
          nodes {
            id
            title
            slug
            content
            date(formatString: "MMMM DD, YYYY")
            modified(formatString: "MMMM DD, YYYY")
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH)
                  }
                }
              }
            }
            author {
              node {
                name
              }
            }
            categories {
              nodes {
                name
                slug
              }
            }
            tags {
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
    `)
      .then((result) => {
        const posts = result.data.allWpPost.nodes;
        const categories = result.data.allWpCategory.nodes;
        const tags = result.data.allWpTag.nodes;

        // Create paginated pages for posts
        createPaginatedPages({
          edges: posts,
          createPage,
          pageTemplate: path.resolve("./src/templates/blog.js"),
          pageLength: 6,
          pathPrefix: "zoop-daily",
          context: {
            categories, // Pass categories here
          },
        });

        // Create individual post pages
        const postsPerPage = 6;
        posts.forEach((node, index) => {
          const pageIndex = Math.ceil((index + 1) / postsPerPage);
          const pageNumber = pageIndex === 1 ? "" : `/${pageIndex}`;
          createPage({
            path: `/zoop-daily${pageNumber}/${node.slug}`,
            component: path.resolve("./src/templates/blog-details.js"),
            context: { slug: node.slug },
            categories, // Pass categories here
          });
        });

        // Create a page for displaying all posts with categories
        createPage({
          path: `/zoop-daily`,
          component: path.resolve("./src/templates/blog.js"),
          context: {
            group: posts,
            categories,
            index: 1, // Starting index for pagination
            first: 1,
            last: Math.ceil(posts.length / 6),
            pageCount: Math.ceil(posts.length / 6),
          },
        });

        // Create category pages
        categories.forEach((category) => {
          createPage({
            path: `/category/${category.slug}`,
            component: path.resolve(`./src/templates/categories.js`),
            context: {
              slug: category.slug,
            },
          });
        });

        // Create tag pages
        tags.forEach((tag) => {
          createPage({
            path: `/tag/${tag.slug}`,
            component: path.resolve(`./src/templates/tags.js`), // Ensure this path is correct
            context: {
              slug: tag.slug,
            },
          });
        });

        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
};
