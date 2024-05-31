/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/home',
          permanent: true
        },
      ]
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'optimise2.assets-servd.host',
          port: '',
          pathname: '/dig-upsiide/production/images/**',
        },
        {
          protocol: 'https',
          hostname: 'i.pinimg.com',
          pathname: '/474x/36/9f/61/**',
        },
        {
          protocol: 'https',
          hostname: 'encrypted-tbn0.gstatic.com',
          pathname: '/**',
        },
      ],
    },
    
    
  };
  
  export default nextConfig;
  
  