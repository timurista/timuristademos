const loaders = require('loaders');
const path = require('path');

module.exports = {
    components: 'src/components/**/[A-Z]*.jsx',
    defaultExample: true,
    webpackConfig: {
        module: {
            loaders: loaders.all
        },
        resolve: {
            alias: {
                'rsg-components/Wrapper': path.join(__dirname, 'lib/styleguide/Wrapper')
            }
        }
    }
};