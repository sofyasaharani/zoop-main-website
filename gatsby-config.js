/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 *
 * @format
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `images`,
        // Path to the directory
        path: `${__dirname}/src/images/`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `data`,
        // Path to the directory
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `http://13.234.101.124/graphql`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
  ],
  siteMetadata: {
    title: "Zoop",
    description: "web pets",
    copyright: "This website is copyright 2024 Zoop Pets",
    contact: "zoop@gmail.com",
  },
};
