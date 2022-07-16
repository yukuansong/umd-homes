

const { createProxyMiddleware } = require('http-proxy-middleware');

console.log("got called here")
module.exports = function(app) {
  app.use(
    '/read-cookie',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
  app.use(
    '/authenticate',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
  app.use(
    '/clear-cookie',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
  app.use(
    '/get-data',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  )
};