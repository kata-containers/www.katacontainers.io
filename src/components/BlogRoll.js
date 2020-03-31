import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery, Link } from 'gatsby'
import { kebabCase } from 'lodash'

class BlogRoll extends React.Component {
  render() {
    const { data, customFilter } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (        
        posts && posts.length === 0 ? 
          <div>There don't seem to be any posts that match.</div>
        :
          posts.map(({ node: post }) => {
            if(customFilter) {
              if(post.frontmatter.author === customFilter || post.frontmatter.category[0].label === customFilter) {
                return (            
                  <div className="article-excerpt" metalink="https://www.google.com/" key={post.id}>
                    <h5 className="article-excerpt-title">
                      <a href={post.fields.slug} className="">{post.frontmatter.title}</a>
                    </h5> 
                    <div className="article-excerpt-entry">
                      <div>
                        <p>{post.excerpt}</p>
                      </div>
                    </div> 
                    <div className="article-excerpt-meta">
                      <p>By <Link to={`/author/${kebabCase(post.frontmatter.author)}/`}>{post.frontmatter.author}</Link> on {post.frontmatter.date}</p>                
                    </div>
                  </div>
                )
              } else {
                return null
              }
            } else {
              return (            
                <div className="article-excerpt" metalink="https://www.google.com/" key={post.id}>
                  <h5 className="article-excerpt-title">
                    <a href={post.fields.slug} className="">{post.frontmatter.title}</a>
                  </h5> 
                  <div className="article-excerpt-entry">
                    <div>
                      <p>{post.excerpt}</p>
                    </div>
                  </div> 
                  <div className="article-excerpt-meta">
                    <p>By <Link to={`/author/${kebabCase(post.frontmatter.author)}/`}>{post.frontmatter.author}</Link> on {post.frontmatter.date}</p>                
                  </div>
                </div>                
              )
            }              
          }
      )
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
  customFilter: PropTypes.string,
}

export default ({customFilter}) => (  
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 200)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date
                author
                category {
                  label
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} customFilter={customFilter}/>}
  />
)
