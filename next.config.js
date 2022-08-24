/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  nextConfig,
  images:{
    domains:["links.papareact.com","image.tmdb.org"]
  }
}
