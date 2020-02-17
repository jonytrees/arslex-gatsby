/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    // You can have multiple instances of this plugin
    // to read source nodes from different locations on your
    // filesystem.
    //
    // The following sets up the Jekyll pattern of having a
    // "pages" directory for Markdown files and a "data" directory
    // for `.json`, `.yaml`, `.csv`.
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
        name: `fonts`,
        path: `${__dirname}/src/css/fonts/`,
        name: `images`,
        path: `${__dirname}/src/img/`,
        name: `js`,
        path: `${__dirname}/src/js/`,
        name: `pdf`,
        path: `${__dirname}/src/pages/pdf/`,
      },
    },
    `gatsby-transformer-pdf`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: '/src/js/main.js',
      },
    },
  ],
}
