import React from 'react'
import Helmet from 'react-helmet'
import { kebabCase } from 'lodash'
import { Link } from 'gatsby'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

import blogConfig from '../../content/blog-config.json'
import metadata from '../../content/site-metadata.json'

export default class BlogIndexPage extends React.Component {


  render() {
    const { filter } = this.props;
    return (
      <Layout>
        <main className="main">
          {blogConfig &&
            <Helmet title={blogConfig.title ? blogConfig.title : metadata.siteMetadata.title} titleTemplate={metadata.siteMetadata.titleTemplate}>
              {blogConfig.subTitle && <meta name="description" content={blogConfig.subTitle} />}
              {blogConfig.title && <meta property="og:title" content={blogConfig.title} />}
              {blogConfig.subTitle && (
                <meta property="og:description" content={blogConfig.subTitle} />
              )}
              <meta name="twitter:card" content="summary" />
              {blogConfig.title && <meta name="twitter:title" content={blogConfig.title} />}
              {blogConfig.subTitle && (
                <meta name="twitter:description" content={blogConfig.subTitle} />
              )}
            </Helmet>
          }
          <div className="top-line"></div>
          <section className="hero-intro is-primary hero">
            <div className="hero-body">
              <div className="container container-thin">
                <div className="hero-content">
                  <h3 className="hero-title">
                    {blogConfig.title}
                  </h3>
                  <div className="hero-entry">
                    <p>
                      {blogConfig.subTitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="main-inner">
            <div className="container container-thin">
              <h4 className="main-about">{blogConfig.about}</h4>
              <br />
              <div className="main-container">
                <div className="content" style={{ minHeight: '30vh' }}>
                  <div>
                    <BlogRoll customFilter={filter ? filter : null} />
                  </div>
                </div>
                <aside className="sidebar">
                  <ul className="widgets">
                    {blogConfig.categories.length > 0 &&
                      <li className="widget item-no-bullet">
                        <div className="widget-head">
                          <h6 className="widget-title">Categories</h6>
                        </div>
                        <div className="widget-body">
                          <ul className="widget-list">
                            {blogConfig.categories.map(category => <li className="item-no-bullet" key={category.id}><Link to={`/category/${kebabCase(category.text)}/`}>{category.text}</Link></li>)}
                          </ul>
                        </div>
                      </li>
                    }
                    {blogConfig.connect.length > 0 &&
                      <li className="widget item-no-bullet">
                        <div className="widget-head">
                          <h6 className="widget-title">Elsewhere</h6>
                        </div>
                        <div className="widget-body">
                          <ul className="widget-list">
                            {blogConfig.connect.map(link => <li className="item-no-bullet" key={link.link}><a href={link.link} target="_blank" rel="noopener noreferrer">{link.text}</a></li>)}
                          </ul>
                        </div>
                      </li>
                    }
                  </ul>
                </aside>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    )
  }
}
