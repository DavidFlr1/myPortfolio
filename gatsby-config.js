module.exports = {
  siteMetadata: {
      title: `myPortfolio`,
      description: ``,
      author: `David Flores`,
    siteUrl: `https://www.davidflores.tld`
  },
  plugins: [
    "gatsby-plugin-styled-components",
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ]
};