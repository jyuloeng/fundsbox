const path = require("path");

const pathResolve = (pathUrl) => path.join(__dirname, pathUrl);

module.exports = {
  webpack: {
    alias: {
      "@": pathResolve("src"),
      "@assets": pathResolve("src/assets"),
      "@components": pathResolve("src/components"),
      "@context": pathResolve("src/context"),
      "@hooks": pathResolve("src/hooks"),
      "@layout": pathResolve("src/layout"),
      "@pages": pathResolve("src/pages"),
      "@routes": pathResolve("src/routes"),
      "@styles": pathResolve("src/styles"),
      "@types": pathResolve("src/types"),
      "@utils": pathResolve("src/utils"),
    },
  },
};
