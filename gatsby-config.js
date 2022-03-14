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
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 100,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `David Portfolio`,
        short_name: `David Portfolio`,
        start_url: `/`,
        icon: 'src/images/favicon.png',
      },
    },
  ]
};