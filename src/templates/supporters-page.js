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
import { getSubProjectById } from '../utils/sponsoredProjects'
import { getEnvVariable, SPONSORED_SUPPORTERS_ID } from '../utils/envVariables'

export const SupportersPageTemplate = ({ seo, content, buttons, support, contentComponent }) => {
  const PageContent = contentComponent || Content

  const subProject = getSubProjectById(sponsoredProjects, parseInt(getEnvVariable(SPONSORED_SUPPORTERS_ID)));

  const supporters = subProject.sponsorship_types;

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
              <h3 className="hero-title">{subProject.name}</h3>
              <div className="hero-entry"><span dangerouslySetInnerHTML={{ __html: subProject.description }} /></div>
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

                {supporters.map((s, index) => {
                  return (
                    <>
                      <div className="container1"><h2 className="features">{s.name}</h2>
                      </div>
                      <div className={`${index === 0 ? 'supporters-grid' : 'supporters-grid-others'}`}>
                        {
                          s.supporting_companies.map(({ company }, index) => {
                            return (
                              <div className="supporting-company" key={index}>
                                <a href={company.url} target="_blank" rel="noopener noreferrer">
                                  <img src={company.big_logo ? company.big_logo : company.logo} alt={company.name} />
                                </a>
                              </div>
                            )
                          })
                        }
                      </div>
                    </>
                  )
                })}

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
  buttons: PropTypes.object,
  donors: PropTypes.object,
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
        buttons={post.frontmatter.buttons}
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
        buttons {
          text
          link
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
