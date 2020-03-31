import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import oval from '../img/Oval_3.png'

// import LazyLoad from 'react-lazyload'

export default class BlogPosts extends React.Component {

  subtitle = (value) => {
    const reg = /<\/?[^>]+(>|$)/g;
    return value.replace( reg  , "").slice(0, 210);
  }

  readingTime = (value) => {
    const reg = /<\/?[^>]+(>|$)/g;
    value = value.replace( reg  , "");
    const wordsPerMinute = 265;
    const noOfWords = value.split(/\s/g).length;
    const minutes = noOfWords / wordsPerMinute;
    const readTime = Math.ceil(minutes);
    return `${readTime} min read`;
  }
  
  render() {
    return (
      <StaticQuery
        query={query}
        render={data => {
          return(
            <React.Fragment>
              <h2 id="blog"><a href="#blog" aria-hidden="true" className="header-anchor">#</a> Blog</h2>
              <p><a href={this.props.blogUrl} target="_blank" rel="noopener noreferrer">View the Full Blog</a></p>
              <div className="columns ">
                {
                  data.allMediumPost.edges.map(edge => {
                    const { node } = edge                  
                    return (
                      <div className="column" key={node.id}>
                        <div className="card">
                          <div className="card-content">
                              <div className="media">
                              <div className="media-left">
                                  <figure className="image is-48x48">
                                  <img src={oval} alt="Placeholder image" />
                                  </figure>
                              </div>
                              <div className="media-content">
                                  <p className="title is-4">{node.author}</p>
                                  <p className="subtitle is-6">{node.pubDate} * {this.readingTime(node.content)}</p>
                              </div>
                              </div>
                              <div className="content">
                              <h3> <a href={node.link} className="a-no-underline" >{ node.title }</a> </h3>
                              {this.subtitle(node.description)} [...] <a href={node.link}>Read More</a>
                              </div>
                          </div>
                        </div>                
                      </div>
                    )
                  })
                }
              </div>          
            </React.Fragment>
          )
        }}
      />
    )
  }
}

const query = graphql`
  query {
    allMediumPost(
      sort: { fields: [pubDate], order: DESC }
      filter: { id: { ne: "dummy" } }
    ) {
      edges {
        node {
          id
          link
          title
          author
          pubDate(fromNow: true)
          thumbnail
          content
          description
        }
      }
    }
  }
`
