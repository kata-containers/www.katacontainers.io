import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import { kebabCase } from 'lodash'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const BlogPostTemplate = ({
  content,
  contentComponent,  
  title,
  date,
  author,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <main className="main main-border">
      <section className="section section-article-single">
        {helmet || ''}
        <div className="container container-thin-alt">
          <div className="section-body">
            <div className="article-single">
              <div className="article-single-head">
                <h3 className="article-single-title">{title}</h3>
                <div className="article-single-meta">
                  <p>By <Link to={`/author/${kebabCase(author)}/`}>{author}</Link> on {date}</p>
                </div>
              </div>
              <div className="article-single-entry">
                <div className="content custom">
                  <PostContent content={content} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  author: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
            <meta property="og:type" content="article" />
            <meta property="article:published_time" content={`${post.frontmatter.date}`} />
          </Helmet>
        }        
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        author={post.frontmatter.author}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date
        title
        author
      }
    }
  }
`
