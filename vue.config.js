module.exports = {
  devServer: {
    host: "localhost",
    port: 8080,
    proxy: {
      "/api": {
        target: "https://www.leywis.com",
        changeOrigin: true,
        pathRewrite: {
          "/api": "",
        },
      },
    },
  },
};
