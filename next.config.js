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
        destination: '/share',
      },
      {
        source: '/invite/:path*',
        destination: '/invite',
      },
    ];
  },
};

module.exports = nextConfig;