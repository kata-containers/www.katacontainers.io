import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import logo from '../img/svg/logo.svg'
import Menu from "../content/pages.json"

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="nav navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="nav-inner">
            <div className="nav-brand">
              <Link to="/" title="Logo">
                <img src={logo} alt="Kata" />
              </Link>
              {/* Hamburger menu */}              
            </div>
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
            <div
              id="navMenu"
              className={`nav-content ${this.state.navBarActiveClass}`}
            >
              <ul className="nav-menu nobullet navbar-start has-text-centered">
                {Menu.nav.map((data, index) => {
                  return (
                    <li key={index}>
                      {data.link.match(/^https?:\/\//) ? 
                        <OutboundLink href={data.link}>{data.text}</OutboundLink>
                        :
                        <Link to={data.link}>
                          {data.text}
                        </Link>
                      }
                    </li>
                  )             
                })}
              </ul>    
            </div>        
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
