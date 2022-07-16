
const { createProxyMiddleware } = require('http-proxy-middleware');
console.log("hello=====");
module.exports = function(app) {
  app.use(
    '/authentication',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};