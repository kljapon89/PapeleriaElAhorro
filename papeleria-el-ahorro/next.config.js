/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {hostname:'firebasestorage.googleapis.com'},
        {hostname:'lh3.googleusercontent.com'},
        {hostname:'via.placeholder.com'},
        
      ]
    },
  };
  
  module.exports = {
    reactStrictMode: true,
    experimental: {
      reactRefresh: false
    }
  }