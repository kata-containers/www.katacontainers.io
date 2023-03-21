import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

import SupportBanner from '../components/SupportBanner'
import leftArrow from '../img/svg/arrow-left.svg'
import metadata from '../content/site-metadata.json'

import sponsoredProjects from "../content/sponsored-projects.json";
import { getSubProjectById } from '../utils/sponsoredProjects';
import { getEnvVariable, MEMBERS_SUBPROJECT_ID } from '../utils/envVariables'

export const SupportersPageTemplate = ({ seo, title, subTitle, content, buttons, donors, companies, support, contentComponent }) => {
  const PageContent = contentComponent || Content

  let perChunk = 3 // items per chunk    
  let inputArray = donors.list;
  let donorsList = inputArray.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk)

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [] // start a new chunk
    }

    resultArray[chunkIndex].push(item)

    return resultArray
  }, [])

  perChunk = 4;
  inputArray = companies.list;
  let supportList = inputArray.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk)

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [] // start a new chunk
    }

    resultArray[chunkIndex].push(item)

    return resultArray
  }, [])

  const subProject = getSubProjectById(sponsoredProjects, parseInt(getEnvVariable(MEMBERS_SUBPROJECT_ID)));

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
                <br /><br />
                <div className="sponsor-meta-container">
                  {subProject.sponsorship_types.sort((a, b) => a.order - b.order).map((t, tierIndex) => {
                    return (
                      <div className="sponsor-inner-container" key={`company-tier-${tierIndex}`}>
                      <div className="container1"><h2 className="features">{t.name}</h2></div>
                      <div className="container container-center container-center-sponsors" key={`company-tier-${tierIndex}`}>
                          <div className='columns' style={{alignItems: 'center', justifyContent: 'center'}} key={tierIndex}>
                              {t.supporting_companies.sort((a, b) => a.order - b.order).map(({company}, index) => {
                                  return (
                                    <div className={`column columns-sponsors columns-sponsors-${tierIndex}`} key={`company-tier-${tierIndex}-${index}`}>
                                      <img
                                          src={company.big_logo ? company.big_logo : company.logo} alt={company.name} />
                                    </div>
                                  )
                              })}
                          </div>
                      </div>
                      <p>&nbsp;</p>
                      </div>
                      
                    )
                  })}
                </div>
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
