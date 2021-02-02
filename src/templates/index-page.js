import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from "react-helmet"
import Layout from '../components/Layout'
import Subscribe from '../components/Subscribe'
import Header from '../components/Header'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import leftArrow from '../img/svg/arrow-left.svg'
import metadata from '../content/site-metadata.json'

export const IndexPageTemplate = ({
  seo,
  header,
  mainpitch,
  features,
  tables
}) => (
  <div>
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
    <Header title={header.title} subTitle={header.subTitle} image={header.image} buttons={header.buttons} />
    <section className="section-article">
      <div className="container">
        <article className="article level">
          <figure className="article-image level-item level-right">
            <div>
              <a href="#">                            
                <Zoom>
                  <img src={!!mainpitch.image.childImageSharp ? mainpitch.image.childImageSharp.fluid.src : mainpitch.image} alt="/kata-explained1@2x.png" />
                </Zoom>
              </a>
            </div>
          </figure> 
          <div className="article-content">
            <div className="article__entry">
              <h2 id="about-kata-containers">
                <a href="#about-kata-containers" aria-hidden="true" className="header-anchor">#</a> 
                {mainpitch.title}
              </h2>               
              {mainpitch.description.map((desc, index) => {
                return (
                  <p key={index}>
                    {desc.text}
                  </p> 
                )
              })}                            
              <a href="/learn/" className="button is-primary is-rounded">
                <span>LEARN MORE</span> 
                <span className="ico"><img src={leftArrow} alt="Call To Action" /></span>                
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>

    <div className="features-section">
      <div className="container">
        <h2 className="features">{features.title}</h2>
        <table className="table" style={{width: '100%'}, {backgroundColor: 'white'}}>
          <tbody>
            {features.rows.map((feature, index) => {              
              // Plugin doesn't support svg images              
              if (feature.image.extension === 'svg' && !feature.image.childImageSharp) {
                return(
                  <tr key={index}>
                  <td className="is-selected is-primary-blue">
                    <img src={!!feature.image.publicURL ? feature.image.publicURL : feature.image} alt={feature.title} className="feature-icons" />
                    <h6 className="padding-top-5">{feature.title}</h6>
                  </td> 
                  <td>
                    {feature.text}
                  </td>
                  </tr> 
                )
              } else {
                return(
                  <tr key={index}>
                  <td className="is-selected is-primary-blue">
                    <img src={!!feature.image.childImageSharp ? feature.image.childImageSharp.fluid.src : feature.image } alt={feature.title} className="feature-icons" />                  
                    <h6 className="padding-top-5">{feature.title}</h6>
                  </td> 
                  <td>
                    {feature.text}
                  </td>
                  </tr> 
                )
              }              
            })}            
          </tbody>
        </table>
      </div>
    </div>

    <section className="section section-modified">
      <div className="container">
        <div className="section-body">
          <div className="section-inner">
            <div className="columns">
              <div className="column">
                <div className="list-numeric">
                  <h4 className="list-numeric-title">{tables.leftTable.title}</h4> 
                  <ul>
                    {tables.leftTable.rows.map((row, index) => {
                      return (
                        <li key={index}>
                          <h6>{row.title}</h6> 
                          <div dangerouslySetInnerHTML={{__html: row.text }}/>
                        </li> 
                      )
                    })}                    
                  </ul>
                </div>
              </div> 
              <div className="column">
                <div className="box is-primary-blue">
                  <h4 className="box-title">{tables.rightTable.title}</h4> 
                  <div className="box-entry">
                    <div dangerouslySetInnerHTML={{__html: tables.rightTable.text}} />
                  </div> 
                  <div className="box-actions">
                    {tables.rightTable.button.link.match(/^https?:\/\//) ? 
                      <OutboundLink className="button is-primary is-rounded" href={tables.rightTable.button.link}>
                        <span>{tables.rightTable.button.text} </span> 
                        <span className="ico"><img src={leftArrow} alt="Call To Action" /></span>
                      </OutboundLink>
                      :
                      <Link to={tables.rightTable.button.link} className="button is-primary is-rounded">
                        <span>{tables.rightTable.button.text} </span> 
                        <span className="ico"><img src={leftArrow} alt="Call To Action" /></span>
                      </Link>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>    
  </div>
)

IndexPageTemplate.propTypes = {  
  seo: PropTypes.object,
  header: PropTypes.object,
  mainpitch: PropTypes.object,
  features: PropTypes.object,  
  tables: PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        seo={frontmatter.seo}
        header={frontmatter.header}        
        mainpitch={frontmatter.mainpitch}
        features={frontmatter.features}
        tables={frontmatter.tables}
      />
      <Subscribe />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
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
        header {
          title
          subTitle
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }      
          buttons {
            text
            link
          }
        }                
        mainpitch {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          description {
            text
          }
        }
        features {
          title
          rows {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }            
              extension
              publicURL
            }
            title
            text
          }
        }
        tables {
          leftTable {
            title
            rows {
              title
              text
            }
          }
          rightTable {
            title
            text
            button {
              text
              link
            }
          }
        }        
      }
    }
  }
`
