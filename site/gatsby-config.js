const path = require("path");

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: "gatsby-plugin-fathom",
      options: {
        // Fathom server URL. Defaults to `cdn.usefathom.com`
        // trackingUrl: "your-fathom-instance.com",
        // Unique site id
        siteId: "HVFHMZGR",
        // Domain whitelist
        // whitelistHostnames: ["yoursite.com"],
      },
    },
    `gatsby-plugin-theme-ui`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
