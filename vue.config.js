const consoleInfo = require('./console');

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
}