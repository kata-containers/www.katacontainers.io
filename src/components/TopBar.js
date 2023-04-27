import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import content from '../content/top-bar.json'
import barLogo from '../img/svg/bar-logo.svg'

const TopBar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }  

  render() {

    if(content.bar) {
      return (      
        <div className="bar is-dark-gray top-bar-brand-color">
          <div className="container">
            <div className="bar-inner">
              <div className="bar-entry">
                <p>{content.bar.text}</p>
              </div> 
              {content.bar.link.match(/^https?:\/\//) ? 
                <OutboundLink className="bar-btn" href={content.bar.link}>{content.bar.button}</OutboundLink>
                :
                <Link className="bar-btn" to={content.bar.link}>
                  {content.bar.button}
                </Link>
              }
            </div>
          </div>
        </div>              
      )    
    } else {
      return null;
    }    
  }
}

export default TopBar
