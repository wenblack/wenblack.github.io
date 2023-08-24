/** @type {import('next').NextConfig} */
const nextConfig = {
  output:'export'
}
const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = ''

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
      remotePatterns: [
          {
              protocol: 'http',
              hostname: 'github.com',
          },
      ],
  },
  ...nextConfig
}

