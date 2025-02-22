/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // 关闭 ESLint 检查
    ignoreDuringBuilds: true,
  },
  typescript: {
    // 关闭 TypeScript 检查
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
