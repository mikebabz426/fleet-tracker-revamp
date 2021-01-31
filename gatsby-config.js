module.exports = {
  siteMetadata: {
    title: `My Fleet Tracker`,
    description: `An organizational tool for logistics companies`,
    author: `Mike Babetchki`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-theme-material-ui`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    {
      resolve: "gatsby-plugin-apollo",
      options: {
        uri: "https://bright-sawfish-99.hasura.app/v1/graphql",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `my-fleet-tracker`,
        short_name: `fleet-tracker`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
