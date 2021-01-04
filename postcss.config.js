const tailwindConfig = require('./tailwind.config');

module.exports = {
  plugins: [
    require('tailwindcss')(tailwindConfig),
    ...(process.env.NODE_ENV === 'production' ? [require('cssnano')] : []),
  ],
};
