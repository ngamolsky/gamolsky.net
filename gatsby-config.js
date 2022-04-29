module.exports = {
  siteMetadata: {
    title: `gamolsky.net`,
    titleTemplate: "%s | Nikita Gamolsky",
    siteUrl: `https://www.gamolsky.net`,
    description: "Nikita Gamolsky's personal site.",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.svg",
        name: "gamolsky.net",
        short_name: "gamolsky.net",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};