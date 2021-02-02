import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import leftArrow from '../img/svg/arrow-left.svg'
import metadata from '../content/site-metadata.json'  

export const SoftwarePageTemplate = ({ seo, title, subTitle, intro, architecture, integration, content, contentComponent }) => {
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
                <p>{intro.text}</p>
                {intro.buttons.map((button, index) => {
                  return (
                    <React.Fragment key={index}>
                      <a href={button.link} className="button is-primary is-rounded"><span>{button.text}</span>
                        <span className="ico">
                          <img src={leftArrow} alt="Learn More" />
                        </span>
                      </a>
                      &nbsp;&nbsp;&nbsp;
                    </React.Fragment>  
                  )
                })}
                <br />
                <br />
                <br />
                <br />                  
                <h2 id="architecture">
                  <a href="#architecture" aria-hidden="true" className="header-anchor">#</a> {architecture.title}
                </h2>
                <div>
                  <a href="#">
                    <Zoom>                      
                      <img src={!!architecture.image.childImageSharp ? architecture.image.childImageSharp.fluid.src : architecture.image} 
                        alt={!!architecture.image.childImageSharp ? architecture.image.childImageSharp.fluid.src : architecture.image} />
                    </Zoom>
                  </a>
                </div>
                <br />
                <div className="columns">                  
                  {architecture.columns.map((col, index) => {                    
                    return (
                      <div className="column">
                        <div className="box is-green">
                          <div className="box-text" key={index}>
                            <div className="software-icon">
                              <figure className="image is-64x64">                              
                                <img src={!!col.icon.publicURL ? col.icon.publicURL : col.icon} 
                                    alt={!!col.icon.publicURL ? col.icon.publicURL : col.icon} 
                                    style={index > 0 ? {height: `56.13px`}: null}/>                                
                              </figure>
                            </div>
                            <h3 className="is-software">{col.title}</h3> 
                            <a href={col.link} className="a-primary-blue">{col.linkText} &nbsp;
                              <img src={leftArrow} className="a-primary-blue" />
                            </a>
                          </div>
                        </div>
                      </div> 
                    )                        
                  })}                                          
                </div>
                <br />
                <br />
                <br />
                <br />
                <h2 id="kata-containers-integration-with-kubernetes">
                  <a href="#kata-containers-integration-with-kubernetes" aria-hidden="true" className="header-anchor">#</a> {integration.title}:
                </h2>
                <div>
                  <a href="#">
                    <Zoom>
                      <img src={!!integration.image.childImageSharp ? integration.image.childImageSharp.fluid.src : integration.image}
                          alt={!!integration.image.childImageSharp ? integration.image.childImageSharp.fluid.src : integration.image}/>                      
                    </Zoom>
                  </a>
                </div>
                <p></p>
                <hr />
                <p></p>
                <p>&nbsp;</p>
                <div className="container1">
                  <h2 className="features">{integration.table.title}</h2>
                </div>
                <div className="container2">
                  <div className="columns">
                    {integration.table.columns.map((col, index) => {
                      return (
                        <div className={`column col${index+1}`} key={index}>
                        <h4 className="is-centered">{col.title}:</h4> 
                          {col.row.map((r, index) => {
                            return <span key={index}>{r.text}</span>   
                          })}                        
                        </div>
                      )        
                    })}                    
                  </div>
                </div>
                <br />
                <br />
                <br />
                <br />                
              <PageContent className="content" content={content} />
            </article>
          </div> 
        </div>
      </section>
    </main>
  )
}

SoftwarePageTemplate.propTypes = {
  seo: PropTypes.object,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  intro: PropTypes.object.isRequired,
  architecture: PropTypes.object,
  integration: PropTypes.object,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const SoftwarePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SoftwarePageTemplate
        contentComponent={HTMLContent}
        seo={post.frontmatter.seo}
        title={post.frontmatter.title}
        subTitle={post.frontmatter.subTitle}
        intro={post.frontmatter.intro}
        architecture={post.frontmatter.architecture}
        integration={post.frontmatter.integration}
        content={post.html}
      />
    </Layout>
  )
}

SoftwarePage.propTypes = {
  data: PropTypes.object.isRequired,
} 

export default SoftwarePage

export const softwarePageQuery = graphql`
  query SoftwarePage($id: String!) {
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
          buttons {
            text
            link
          }
        }
        architecture {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          columns {
            title
            link
            linkText
            icon {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }            
              extension
              publicURL
            }
          }
        }
        integration {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          table {
            title
            columns {
              title
              row {
                text
              }
            }
          }
        }
      }
    }
  }
`
