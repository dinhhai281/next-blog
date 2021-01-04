const postCssConfigs = require('./postcss.config');

module.exports = {
  plugins: [
    '@chakra-ui/gatsby-plugin',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: postCssConfigs.plugins,
      },
    },
  ],
};
