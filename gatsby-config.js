require("dotenv").config({ path: `.env` })

module.exports = {
  siteMetadata: {
    title: `PRB Architects`,
    siteUrl: `https://prb-a.com`,
    description: `We’re Architects and Building Conservation specialists who are known for delivering projects with an authentic sense of place. We’re an RIBA Chartered Practice based in the Midlands.`,
    author: `@samuelgoddard`,
  },
  plugins: [
    `gatsby-plugin-no-index`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // Enable this if we want to go back to supporting IE11...
    // {
    //   resolve: `gatsby-plugin-polyfill-io`,
    //   options: {
    //      features: [
    //       `Array.prototype.forEach`,
    //       `NodeList.prototype.forEach`,
    //       `Array.from`,
    //       `String.prototype.startsWith`,
    //       `Object.assign`,
    //       `Array.prototype.entries`,
    //       `Object.entries`,
    //       `Object.fromEntries`,
    //       `DocumentFragment.prototype.append`,
    //       `Element.prototype.append`,
    //       `Promise`,
    //       `Promise.prototype.finally`,
    //       `Array.prototype.includes`,
    //       `es6`,
    //       `Event`,
    //       `Element.prototype.matches`,
    //       `fetch`,
    //       `Element.prototype.remove`
    //     ]
    //   },
    // },
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `prb-architects`,
        short_name: `prb`,
        start_url: `/`,
        background_color: `#dc481e`,
        theme_color: `#dc481e`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-BDVN8XQRWZ", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
      
        pluginConfig: {
          head: true,
        },
      }
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `${process.env.DATOCMS_KEY}`,
      },
    },
  ],
}
