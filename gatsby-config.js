module.exports = {
  siteMetadata: {
    title: 'Kata Containers',
    description:
      'Kata Containers is an open source container runtime, building lightweight virtual machines that seamlessly plug into the containers ecosystem.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation : require('sass')
      }
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-110599884-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,        
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-110599884-1", // Google Analytics / GA          
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {          
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          // exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kata Containers`,
        short_name: `Kata Containers`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#f15b3e`,
        icon: `src/img/icon.png`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/docs/*`,`/learn/*`, `/software/*`, `/community/*`],
      },
    },
    {
      resolve: "gatsby-plugin-decap-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        enableIdentityWidget: true,
        htmlTitle: `Kata Containers | Content Manager`,
        includeRobots: false,
        customizeWebpackConfig: (config) => {
          /**
           * Fixes Module not found: Error: Can"t resolve "path" bug.
           * Webpack 5 doesn"t include browser polyfills for node APIs by default anymore,
           * so we need to provide them ourselves.
           * @see https://github.com/postcss/postcss/issues/1509#issuecomment-772097567
           * @see https://github.com/gatsbyjs/gatsby/issues/31475
           * @see https://github.com/gatsbyjs/gatsby/issues/31179#issuecomment-844588682
           */
          config.resolve = {
            ...config.resolve,
            fallback: {
              ...config.resolve.fallback,
              path: require.resolve("path-browserify"),
            },
          };
        },
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        whitelist: ['blockquote', 'pre', 'code', 'ol'],
        purgeOnly: ['/style'], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    {
      resolve: 'gatsby-plugin-netlify', // make sure to keep it last in the array,
    }    
  ],
}
