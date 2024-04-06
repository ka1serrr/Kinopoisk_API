const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@/shared": path.resolve(__dirname, "src/shared/index.ts"),
      "@/pages": path.resolve(__dirname, "src/pages/"),
      "@/app": path.resolve(__dirname, "src/app/index.ts"),
      "@": path.resolve(__dirname, "src/"),
    },
  },
};
