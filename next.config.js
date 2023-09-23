/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'komo.vamtam.com',
            // hostname: 'https://imgbb.com/',
            }
        ]
    },
}


module.exports = nextConfig;
