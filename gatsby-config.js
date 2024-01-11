require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `gamolsky.net`,
    titleTemplate: "%s | Nikita Gamolsky",
    siteUrl: `https://www.gamolsky.net`,
    url: "https://www.gamolsky.net",
    description: "Nikita Gamolsky - personal site.",
    image: "/images/profilePic.jpeg",
  },
  flags: {
    DEV_SSR: true,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-breakpoints",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.svg",
        name: "gamolsky.net",
        short_name: "gamolsky.net",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-typescript",
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },

    {
      resolve: `gatsby-source-notion-api`,
      options: {
        token: process.env.GATSBY_NOTION_TOKEN,
        databaseId: process.env.PROJECTS_DB_ID,
        propsToFrontmatter: true,
        lowerTitleLevel: true,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
          options: {
            props: {
              className: "",
            },
          },
        },
      },
    },
  ],
};
