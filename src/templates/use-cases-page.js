import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

import metadata from '../content/site-metadata.json'

export const UseCasesPageTemplate = ({ seo, title, subTitle, blogUrl, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (

    <main className="main">
      {seo && 
      <Helmet title={seo.title ? seo.title : metadata.siteMetadata.title} titleTemplate={metadata.siteMetadata.titleTemplate}>        
        {seo.description && <meta name="description" content={seo.description} />}
        {seo.image && seo.url && <meta name="image" content={`${seo.url}${seo.image.publicURL}`} />}
        {seo.url && <meta property="og:url" content={seo.url} />}
        {seo.title && <meta property="og:title" content={seo.title} />}
        {seo.description && (
          <meta property="og:description" content={seo.description} />
        )}
        {seo.image && seo.url && <meta property="og:image" content={`${seo.url}${seo.image.publicURL}`} />}
        <meta name="twitter:card" content="summary" />
        {seo.twitterUsername && (
          <meta name="twitter:creator" content={seo.twitterUsername} />
        )}        
        {seo.title && <meta name="twitter:title" content={seo.title} />}
        {seo.description && (
          <meta name="twitter:description" content={seo.description} />
        )}
        {seo.image && seo.url && <meta name="twitter:image" content={`${seo.url}${seo.image.publicURL}`} />}
      </Helmet>
      }
      <div className="top-line"></div> 
      <section className="hero-intro is-primary hero">
        <div className="hero-body">
          <div className="container container-thin">
            <div className="hero-content">
              <h3 className="hero-title">{title}</h3>
              <div className="hero-entry"><p>{subTitle}</p></div>
            </div>
          </div>
        </div>
      </section> 
      <section className="section section-article-simple">
        <div className="container container-thin">
          <div className="section-body">
            <article className="article-simple default-page">
              <PageContent className="content" content={content} />
            </article>
          </div> 
        </div>
      </section>
    </main>
  )
}

UseCasesPageTemplate.propTypes = {
  seo: PropTypes.object,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  blogUrl: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const UseCasesPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <UseCasesPageTemplate
        seo={post.frontmatter.seo}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subTitle={post.frontmatter.subTitle}
        blogUrl={post.frontmatter.blogUrl}
        content={post.html}
      />
    </Layout>
  )
}

UseCasesPage.propTypes = {
  data: PropTypes.object.isRequired,
} 

export default UseCasesPage

export const useCasesQuery = graphql`
  query UseCasesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subTitle
        blogUrl
        seo {
          title
          description
          url
          image {
            childImageSharp {
              fluid(maxWidth: 640, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL            
          }
          twitterUsername
        }
      }
    }
  }
`
