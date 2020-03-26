const environment = (process.env.NODE_ENV || 'development').trim();

if (environment === 'development') {
    module.exports = require('./webpack-config/webpack.dev.config.js');
} else {
    module.exports = require('./webpack-config/webpack.prod.config.js');
}
