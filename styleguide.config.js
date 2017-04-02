const loaders = require('loaders');
module.exports = {
    components: 'src/components/**/[A-Z]*.jsx',
    defaultExample: true,
    webpackConfig: {
        module: {
            loaders: loaders.all
        }
    }
};