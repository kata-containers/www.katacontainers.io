import React from 'react'
import PropTypes from 'prop-types'
import { withPrefix, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

import SupportBanner from '../components/SupportBanner'
import leftArrow from '../img/svg/arrow-left.svg'
import metadata from '../content/site-metadata.json'  

export const SupportersPageTemplate = ({ seo, title, subTitle, content, buttons, donors, companies, support, contentComponent }) => {
  const PageContent = contentComponent || Content
    
  let perChunk = 3 // items per chunk    
  let inputArray = donors.list;
  let donorsList = inputArray.reduce((resultArray, item, index) => { 
    const chunkIndex = Math.floor(index/perChunk)

    if(!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [] // start a new chunk
    }

    resultArray[chunkIndex].push(item)

    return resultArray
  }, [])

  perChunk = 4;
  inputArray = companies.list;
  let supportList = inputArray.reduce((resultArray, item, index) => { 
    const chunkIndex = Math.floor(index/perChunk)

    if(!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [] // start a new chunk
    }

    resultArray[chunkIndex].push(item)

    return resultArray
  }, [])

  return (

    <main className="main">      
      {seo && 
      <Helmet title={seo.title ? seo.title : metadata.siteMetadata.title} titleTemplate={metadata.siteMetadata.titleTemplate}>        
        {seo.description && <meta name="description" content={seo.description} />}
        {seo.image && <meta name="image" content={`${withPrefix('/')}${seo.image.publicURL}`} />}        
        {seo.url && <meta property="og:url" content={seo.url} />}
        {seo.title && <meta property="og:title" content={seo.title} />}
        {seo.description && (
          <meta property="og:description" content={seo.description} />
        )}
        {seo.image && <meta property="og:image" content={`${withPrefix('/')}${seo.image.publicURL}`} />}
        <meta name="twitter:card" content="summary_large_image" />
        {seo.twitterUsername && (
          <meta name="twitter:creator" content={seo.twitterUsername} />
        )}        
        {seo.title && <meta name="twitter:title" content={seo.title} />}
        {seo.description && (
          <meta name="twitter:description" content={seo.description} />
        )}
        {seo.image && <meta name="twitter:image" content={`${withPrefix('/')}${seo.image.publicURL}`} />}          
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
              <section className="section section-padding-top-0">
                {buttons.map((b, index) => {
                  return (
                    <a href={b.link} className="button is-primary-dark is-rounded" key={index}><span>{b.text}</span>
                      <span className="ico">
                        <img src={leftArrow} alt="Learn More" />
                      </span>
                    </a>
                  )
                })}
                <br/><br/>
                <div className="container1"><h2 className="features">{donors.title}</h2>
                </div>
                {
                  donorsList.map((d, index) => {
                    return(                    
                      <div className={`container-supporter ${donorsList.length === index+1 ? 'container-supporter-last': ''}`} key={index}>
                        {d.map((i, index) => {
                          return (
                            <div className="content-supporter-lt3" key={index}>
                              <a href={i.link} target="_blank" rel="noopener noreferrer">
                                {i.image.extension === 'svg' && !i.image.childImageSharp ? 
                                <img src={!!i.image.publicURL ? i.image.publicURL : i.image} alt={i.alt} 
                                  className={
                                    i.class === 'img-sponsor-l3' ? 'img-sponsor-l3' : i.class === 'img-sponsor-l2' ? 'img-sponsor-l2' :
                                    i.class === 'img-sponsor-l4' ? 'img-sponsor-l4' : i.class === 'img-sponsor-l3-last' ? 'img-sponsor-l3-last' : ''} />
                                :
                                <img src={!!i.image.childImageSharp ? i.image.childImageSharp.fluid.src : i.image} alt={i.alt} 
                                  className={
                                    i.class === 'img-sponsor-l3' ? 'img-sponsor-l3' : i.class === 'img-sponsor-l2' ? 'img-sponsor-l2' :
                                    i.class === 'img-sponsor-l4' ? 'img-sponsor-l4' : i.class === 'img-sponsor-l3-last' ? 'img-sponsor-l3-last' : ''} />
                                }
                              </a>
                            </div>
                          )
                        })}
                      </div>
                    )
                  })
                }
                <div className="container1">
                  <h2 className="features">
                    Companies Supporting Kata Containers
                  </h2>
                </div>
                {
                  supportList.map((d, index) => {
                    return(                    
                      <div className={`container-supporter ${supportList.length === index+1 ? 'container-supporter-last': ''}`} key={index}>
                        {d.map((i, index) => {
                          return (
                            <div className="content-supporter" key={index}>
                              <a href="" target="_blank" rel="noopener noreferrer">
                                {i.image.extension === 'svg' && !i.image.childImageSharp ? 
                                <img src={!!i.image.publicURL ? i.image.publicURL : i.image} alt={i.alt} 
                                  className={
                                    i.class === 'img-sponsor-l3' ? 'img-sponsor-l3' : i.class === 'img-sponsor-l2' ? 'img-sponsor-l2' :
                                    i.class === 'img-sponsor-l4' ? 'img-sponsor-l4' : i.class === 'img-sponsor-l3-last' ? 'img-sponsor-l3-last' : ''} />
                                :
                                <img src={!!i.image.childImageSharp ? i.image.childImageSharp.fluid.src : i.image} alt={i.alt} 
                                  className={
                                    i.class === 'img-sponsor-l3' ? 'img-sponsor-l3' : i.class === 'img-sponsor-l2' ? 'img-sponsor-l2' :
                                    i.class === 'img-sponsor-l4' ? 'img-sponsor-l4' : i.class === 'img-sponsor-l3-last' ? 'img-sponsor-l3-last' : ''} />
                                }
                              </a>
                            </div>
                          )
                        })}
                      </div>
                    )
                  })
                }
                <p>{support.text}</p>
                <p>{support.text2}</p>
                <a href={support.button.link} className="button is-primary-dark is-rounded">
                  <span>{support.button.text}</span>
                  <span className="ico">
                    <img src={leftArrow} alt="Learn More" />
                  </span>
                </a>
                <br />
                <br />
                <ul>
                  {support.list.map((e, index) => {
                    return <li key={index}>{e.text}</li>
                  })}                  
                </ul>
              <PageContent className="content" content={content} />
              </section>
              <SupportBanner />
            </article>
          </div> 
        </div>
      </section>
    </main>
  )
}

SupportersPageTemplate.propTypes = {
  seo: PropTypes.object,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  buttons: PropTypes.object,
  donors: PropTypes.object,
  support: PropTypes.object,
  companies: PropTypes.object,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const SupportersPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SupportersPageTemplate
        contentComponent={HTMLContent}
        seo={post.frontmatter.seo}
        title={post.frontmatter.title}
        subTitle={post.frontmatter.subTitle}
        buttons={post.frontmatter.buttons}
        donors={post.frontmatter.donors}
        companies={post.frontmatter.companies}
        support={post.frontmatter.support}
        content={post.html}        
      />      
    </Layout>
  )
}

SupportersPage.propTypes = {
  data: PropTypes.object.isRequired,
} 

export default SupportersPage

export const supportersPageQuery = graphql`
  query SupportersPage($id: String!) {
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
        buttons {
          text
          link
        }
        donors {
          title
          list {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }            
              extension
              publicURL
            }
            alt
            link
            class
          }
        }
        companies {
          title
          list {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }            
              extension
              publicURL
            }
            alt
            class
          }
        }
        support {
          text
          text2
          button {
            text
            link
          }
          list {
            text
          }
        }
      }
    }
  }
`
