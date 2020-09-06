module.exports = {
  siteMetadata: {
    title: `Arttu Viljakainen`,
    titleTemplate: "%s · Arttu Viljakainen",
    description: `On creating digital tools and human-computer interactions in them`,
    siteUrl: `https://www.arttuv.com`,
    url: `https://www.arttuv.com`,
    image: `../images/arttu_face_2019.jpg`,
    author: `Arttu Viljakainen`,
    twitterUsername: "@arttuv",
  },
  plugins: [
    'gatsby-plugin-robots-txt',
    `gatsby-remark-reading-time`,
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint: `https://arttuv.us8.list-manage.com/subscribe/post?u=e6fa8cd1f7936f091c9072614&amp;id=d39685d12d`,
      }
    },
    `gatsby-plugin-feed`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `oswald\:300,400`,
          `lora\:400,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-writings`,
        path: `${__dirname}/src/markdown-pages/writings`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `mages`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-html-attributes`,
      options: {
        lang: `en`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
              showCaptions: true
            },
          },
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 300,
              height:170, 
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              //height: auto, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              urlOverrides: [
                {
                  id: 'youtube',
                  embedURL: (videoId) => `https://www.youtube-nocookie.com/embed/${videoId}`,
                }
              ] //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
            }
          },
          
        ],
      },
    },
    `gatsby-plugin-catch-links`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
