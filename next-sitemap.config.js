/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://osmrtnica.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/404', '/500'], // optional
  changefreq: 'daily',
  priority: 0.7,
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://osmrtnica.com/sitemap-0.xml',
    ],
  },
};
