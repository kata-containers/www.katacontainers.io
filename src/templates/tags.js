import React from 'react'
import { graphql } from 'gatsby'

import BlogIndexPage from '../pages/blog'

class TagRoute extends React.Component {
  render() {

    const category = this.props.pageContext.category
    const author = this.props.pageContext.author

    return (
      <React.Fragment>
        <BlogIndexPage filter={category ? category : author ? author : null} />
      </React.Fragment>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($category: String, $author: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: {elemMatch: {label: {eq: $category } } }, author: { eq: $author } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
