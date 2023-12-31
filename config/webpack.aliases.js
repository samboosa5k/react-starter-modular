const { createWebpackAliases } = require('./webpack.helpers');

/**
 * Export Webpack Aliases
 *
 * Tip: Some text editors will show the errors or invalid intellisense reports
 * based on these webpack aliases, make sure to update `tsconfig.json` file also
 * to match the `paths` we using in here for aliases in project.
 */
module.exports = createWebpackAliases({
    '@src': 'src',
    '@apps': 'apps',
    '@atoms': 'src/atoms',
    '@molecules':'src/molecules',
    '@assets': 'assets',
    '@context': 'src/context',
    '@HOC': 'src/HOC',
    '@hooks': 'src/hooks',
    '@utils': 'utils',
    '@theme': 'src/theme',
});
