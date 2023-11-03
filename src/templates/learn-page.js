import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from "react-helmet"
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import ZoomImage from "../components/ZoomImage";

import metadata from '../content/site-metadata.json'

export const LearnPageTemplate = ({ seo, title, subTitle, intro, content, contentComponent }) => {
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
              <div className="content">
                <p>{intro.text}</p>
                <div className="columns">
                  <div className="column">
                    {intro.buttons.map((button, index) => {
                      return (
                        <React.Fragment key={index}>
                          <a href={button.link} className="button is-primary is-rounded">{button.text}</a>
                          &nbsp;&nbsp;&nbsp;
                        </React.Fragment>
                      )
                    })}
                    <br />
                    <br />
                  </div>
                </div>
                <div className="columns">
                  {intro.gallery.map((img, index) => {
                    return (
                      img.image ?
                        <div className="column" key={index}>
                          <ZoomImage src={img.image?.childImageSharp?.fluid?.src || img.image} alt={img.alt} />
                        </div>
                        :
                        null
                    )
                  })}
                </div>
                <br />
                {intro.videos.map((video, index) => {
                  return (
                    <React.Fragment key={index}>
                      <h2 id="kata-containers-project-update">
                        <a href="#kata-containers-project-update" aria-hidden="true" className="header-anchor">#</a>
                        {video.title}
                      </h2>
                      <div className="video-wrapper">
                        <iframe width="835 px" height="469.687 px" src={video.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
                      </div>
                    </React.Fragment>
                  )
                })}
                <PageContent content={content} />
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}

LearnPageTemplate.propTypes = {
  seo: PropTypes.object,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const LearnPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <LearnPageTemplate
        contentComponent={HTMLContent}
        seo={post.frontmatter.seo}
        title={post.frontmatter.title}
        subTitle={post.frontmatter.subTitle}
        intro={post.frontmatter.intro}
        content={post.html}
      />
    </Layout>
  )
}

LearnPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default LearnPage

export const learnPageQuery = graphql`
  query LearnPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
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
        title
        subTitle
        intro {
          text
          gallery {
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
          buttons {
            text
            link
          }          
          videos {
            title
            url
          }
        }
      }
    }
  }
`
