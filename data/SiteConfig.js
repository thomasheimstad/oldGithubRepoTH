module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  siteTitle: "Einar Stefansson", // Site title.
  siteTitleAlt: "Barytone's website", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "http://www.einarstefansson.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Homepage Einar Stefansson, classical barytone singer", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "", // GA tracking ID.
  disqusShortname: "http-einar-stefansson", // Disqus shortname.
  postDefaultCategoryID: "Upcoming", // Default category for posts.
  userName: "Einar Stefansson", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Manchester, UK", // User location to display in the author segment.
  userAvatar: "", // User avatar to display in the author segment.
  userDescription:
    "I do in fact love Bryn Terfel!", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/Vagr9K/gatsby-advanced-starter",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/Vagr9K",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:vagr9k@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2017. Einar Stefansson", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};
