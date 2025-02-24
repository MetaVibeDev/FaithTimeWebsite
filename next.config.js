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
  async rewrites() {
    return [
      {
        source: '/share/:path*',
        destination: '/share', // 这里是目标页面
      },
    ];
  },
};

module.exports = nextConfig;