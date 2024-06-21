/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'http',
                hostname:"fakestoreapi.com"
            }
        ]
    }
};

export default nextConfig;
