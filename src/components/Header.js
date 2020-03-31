import React from 'react'

import leftArrow from '../img/svg/arrow-left.svg'

const Header = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }  
  render() {
    let { title, subTitle, image, buttons } = this.props;
    return (
      <section className="hero-main is-primary hero hero-image" 
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,        
        }}>
        <div className="hero-body">
          <div className="container">
            <div className="hero-content">
              <h3 className="hero-title">{title}</h3> 
              <div className="hero-subhead">{subTitle}</div> 
              <div className="hero-actions">
                {buttons.map((button, index) => {
                  return(
                    <a href={button.link} className="button is-primary-dark is-rounded" key={index}>
                      <span>{button.text}</span> <span className="ico">
                        <img src={leftArrow} alt="Learn More" />
                      </span>
                    </a>
                  )
                })}                
              </div>
            </div>
          </div>
        </div>
      </section>      
    )
  }
}

export default Header
