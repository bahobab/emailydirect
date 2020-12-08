// const proxy = require('http-proxy-middleware')
// https://stackoverflow.com/questions/60755768/after-using-this-http-proxy-middleware-it-give-me-this-error-in-reactjs
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(createProxyMiddleware('/auth/google', {target: 'http://localhost:5000'}));
    app.use(createProxyMiddleware('/api/**', {target: 'http://localhost:5000'}));
}