const _ = require('lodash')
const axios = require('axios')
const path = require('path')
const fs = require('fs')
const { createFilePath } = require('gatsby-source-filesystem')

// explicit Frontmatter declaration to make category, author and date, optionals.
// those properties only present in blog frontmatter

const myEnv = require("dotenv").config({
  path: `.env`,
  expand: true
});

const writeToJson = (filePath, data) => {
  fs.writeFileSync(filePath, JSON.stringify(data), 'utf8', function (err) {
    if (err) throw err;
    console.log(`wrote ${filePath}`);
  });
};

const SSR_getSponsoredProjects = async (baseUrl) => {
  return await axios.get(
    `${baseUrl}/api/public/v1/sponsored-projects/`,
    {
      params: {
        order: 'name',
        per_page: 100,
        page: 1,
        expand: 'subprojects,subprojects.sponsorship_types,subprojects.sponsorship_types.supporting_companies,subprojects.sponsorship_types.supporting_companies.company'
      }
    }).then((response) => response.data.data)
    .catch(e => console.log('ERROR: ', e));
}

exports.onPreBootstrap = async () => {
  const apiBaseUrl = process.env.GATSBY_API_BASE_URL;  

  // pull sponsored projects
  const sponsoredProjects = await SSR_getSponsoredProjects(apiBaseUrl);
  if (sponsoredProjects) {
    writeToJson('src/content/sponsored-projects.json', sponsoredProjects);
  };
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      category: [Category]
      author: [String]
      date: Date
    }
    type Category {
      label: [String!]!
    }
  `
  createTypes(typeDefs)
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              category {
                label
              }
              author
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        category: edge.node.frontmatter.category,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    // category pages:
    let categories = []
    // Iterate through each post, putting all found categories into `categories`
    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.category`)) {
        categories = categories.concat(edge.node.frontmatter.category[0].label)
      }
    })
    // Eliminate duplicate categories
    categories = _.uniq(categories)

    // Make category pages
    categories.forEach(category => {
      const categoriePath = `/category/${_.kebabCase(category)}/`

      createPage({
        path: categoriePath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          category,
        },
      })
    })

    // author pages:
    let authors = []
    // Iterate through each post, putting all found authors into `authors`    
    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.author`)) {
        authors = authors.concat(edge.node.frontmatter.author)
      }
    })
    // Eliminate duplicate categories
    authors = _.uniq(authors)

    // Make category pages
    authors.forEach(author => {
      const authorPath = `/author/${_.kebabCase(author)}/`

      createPage({
        path: authorPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          author,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest
}) => {
  const { createNode } = actions

  const blogPosts = await axios.get(
    `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/kata-containers`
  ).then((response) => {
    return response.data.items.slice(0, 3);
  });
  
  for (const post of blogPosts) {    
    const nodeContent = JSON.stringify(post)

    const nodeMeta = {
      id: createNodeId(`medium-post-${post.guid}`),
      parent: null,
      children: [],
      internal: {
        type: `MediumPost`,
        mediaType: `application/json`,
        content: nodeContent,
        contentDigest: createContentDigest(post)
      }
    }

    const node = Object.assign({}, post, nodeMeta)
    createNode(node)
  }
}
