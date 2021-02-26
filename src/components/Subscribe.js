import React from 'react'
import content from '../content/subscribe.json'
import leftArrow from '../img/svg/arrow-left.svg'

const Subscribe = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  subscribePopup = () => {    
    return window.open('https://signup.e2ma.net/signup/1862950/1771360/', 'signup', 'menubar=no, location=no, toolbar=no, scrollbars=yes, width=700, height=500');
  }

  render() {

    if (content.subscribe) {
      return (
        <section className="section search-content">
          <div className="search-content">
            <h3 className="search-content-title">
              {content.subscribe.title}
            </h3>
            <div className="search-content-subtitle">
              {content.subscribe.subTitle}
            </div>
          </div>
          <div className="field has-addons-centered">
            <button className="button is-primary no-border-search-submit">
              <a 
                onClick={this.subscribePopup}>
                <span>Join our list</span>
                <span className="ico">
                  <img src={leftArrow} alt="Call To Action" />
                </span>
              </a>
            </button>          
          </div>
        </section>
      )
    } else {
      return null;
    }
  }
}

export default Subscribe
