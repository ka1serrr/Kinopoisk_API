const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@/shared": path.resolve(__dirname, "src/shared/index.ts"),
      "@/pages": path.resolve(__dirname, "src/pages/"),
      "@/features": path.resolve(__dirname, 'src/features/index.ts'),
      "@/entities": path.resolve(__dirname, "src/entities/index.ts"),
      "@/widgets": path.resolve(__dirname, "src/widgets/"),
      "@/app": path.resolve(__dirname, "src/app/index.ts"),
      "@": path.resolve(__dirname, "src/"),
    },
  },
};
