import React from 'react'
import content from '../content/support-bar.json'

const SupportBanner = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }  

  render() {

    if(content) {
      return (      
        <section className="section bottom-content">
          <div className="search-content">
            <h3 className="search-content-title">
              {content.support.title}
            </h3> 
            <div className="search-content-subtitle">
              <span>{content.support.subTitle} <a href={content.support.emailLink}>{content.support.email}</a></span>
            </div>
          </div>
        </section>
      )    
    } else {
      return null;
    }    
  }
}

export default SupportBanner
