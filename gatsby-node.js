/** @format */

const createPaginatedPages = require("gatsby-paginate");
const path = require(`path`);

exports.createPages = ({ graphql, actions: { createPage } }) => {
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allWpPost {
          nodes {
            title
            slug
            content
            date(formatString: "dddd / mm / yyyy hh:mm")
            modified(formatString: "dddd / mm / yyyy hh:mm")
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
          }
        }
      }
    `).then((result) => {
      createPaginatedPages({
        edges: result.data.allWpPost.nodes,
        createPage: createPage,
        pageTemplate: "./src/templates/projects.js",
        pageLength: 6,
        pathPrefix: "zoop-daily",
      });

      const postsPerPage = 6;
      result.data.allWpPost.nodes.forEach((node, index) => {
        const pageIndex = Math.ceil((index + 1) / postsPerPage);
        const pageNumber = pageIndex === 1 ? "" : `/${pageIndex}`;
        createPage({
          path: `/zoop-daily${pageNumber}/${node.slug}`,
          component: path.resolve("./src/templates/project-details.js"),
          context: { slug: node.slug },
        });
      });
      resolve();
    });
  });
};
