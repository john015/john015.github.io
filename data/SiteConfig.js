const config = {
  siteTitle: 'John`s Dev log', // Site title.
  siteTitleShort: 'John`s Dev log', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'My Dev log', // Alternative site title for SEO.
  siteLogo: '/logos/favicon-96x96.png', // Logo used for SEO and manifest.
  siteUrl: 'https://john015.netlify.com', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: '웹 기술에 대한 블로그 입니다.', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteFBAppID: '1825356251115265', // FB Application ID for using app insights
  siteGATrackingID: 'UA-134073355-1', // Tracking code ID for google analytics.
  disqusShortname: 'john-dev-log', // Disqus shortname.
  postDefaultCategoryID: 'Tech', // Default category for posts.
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'YYYY-MM-DD', // Date format for display.
  userName: 'john015', // Username to display in the author segment.
  userEmail: 'lsw0150305@gmail.com', // Email used for RSS feed's author segment
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/john015',
      iconClassName: 'fa fa-github'
    },
    {
      label: 'Email',
      url: 'mailto:lsw0150305@gmail.com',
      iconClassName: 'fa fa-envelope'
    },
    {
      label: 'RSS',
      url: 'https://john015.netlify.com/rss.xml',
      iconClassName: 'fa fa-rss'
    }
  ],
  copyright: 'All content copyright john015 © 2019 • All rights reserved.' // Copyright string for the footer of the website and RSS feed.
}

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/')
  config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/')
  config.siteRss = `/${config.siteRss}`

module.exports = config
