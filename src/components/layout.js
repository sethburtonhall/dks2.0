import React, { Component } from "react"

// Gatsby
import { Link } from "gatsby"

// Components
import Nav from "./nav"

// Styles
import { Wrapper, Header, Footer } from "../styles/Layout"

class Layout extends Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
        <Header>
          <h1 className="header">
            <Link to={`/`}>
              <img
                className="logo"
                src="../images/dks-watermark.png"
                alt="Logo"
              />
            </Link>
          </h1>
        </Header>
      )
    } else {
      header = (
        <Header>
          <h3 className="header">
            <Link to={`/`}>
              <img className="logo" src="/images/dks-watermark.png" alt="Logo" />
            </Link>
          </h3>
        </Header>
      )
    }
    return (
      <>
        <Wrapper>
          <Nav location={location.pathname} />
          <div className="app">
            {header}
            <main>{children}</main>
          </div>
          <Footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </Footer>
        </Wrapper>
      </>
    )
  }
}

export default Layout
