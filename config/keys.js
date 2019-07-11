if (process.env.NODE_ENV === 'production') {
    // we are in production - return the pro set of keys
    module.exports = require('./prod');
} else {
    // we are in development
    module.exports = require('./dev');
}