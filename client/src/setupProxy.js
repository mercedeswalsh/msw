const proxy = require("http-proxy-middleware")

module.exports = function(app) {
  app.use(
    proxy(
      [
        // for db's
        '/tbd', 
      ], { target: "http://localhost:3001", changeOrigin: true }
    )
  )
}