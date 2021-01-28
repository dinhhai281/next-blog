if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({
    path: '.env',
  });
}
module.exports = {
  siteMetadata: {
    title: 'Lorem',
    author: 'Hai Nguyen',
    description: "Hai's Personal Blog",
    keywords: ['Blog', 'React', 'Angular', 'Javascript', 'Typescript', 'Functional Programming'],
  },
  plugins: [
    '@chakra-ui/gatsby-plugin',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-intl',
      options: {
        path: `${__dirname}/src/i18n`,
        languages: ['en', 'vi'],
        defaultLanguage: 'en',
        redirect: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'articles',
        path: `${__dirname}/src/articles`,
      },
    },
    {
      resolve: 'gatsby-source-github-api',
      options: {
        token: process.env.GITHUB_API_KEY,
        graphQLQuery: `
          query {
            viewer {
              login
              name
              avatarUrl
              email
            }
        }`,
      },
    },
  ],
};
