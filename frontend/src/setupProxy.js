const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/pricing",
    createProxyMiddleware({
      target: "http://localhost:3001", // backend port
      changeOrigin: true,
    })
  );
};
