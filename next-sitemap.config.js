const config = require('./osmium-config.json')

module.exports = {
  siteUrl: config.link,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  generateIndexSitemap: false,
  exclude: ['/tag/*', '/about', '/-/*'],
  // ...other options
  // https://github.com/iamvishnusankar/next-sitemap#configuration-options
}
