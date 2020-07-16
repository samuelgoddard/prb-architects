require("dotenv").config({ path: `.env` })

module.exports = {
  siteMetadata: {
    title: `PRB Architects`,
    siteUrl: `https://www.prb-a.com`,
    description: `We’re Architects and Building Conservation specialists who are known for delivering projects with an authentic sense of place. We’re an RIBA Chartered Practice based in the Midlands.`,
    author: `@samuelgoddard`,
  },
  plugins: [
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
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
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `${process.env.DATOCMS_KEY}`,
      },
    },
  ],
}
