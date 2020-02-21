import React from "react"

// Gatsby
import { Link } from "gatsby"

// Components
import { slide as Menu } from "react-burger-menu"

// Styles
import { StyledNav } from "../styles/Nav"

const Nav = ({ location }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let home

  if (location !== rootPath) {
    home = (
      <Link id="home" to="/" className="menu-item">
        Home
      </Link>
    )
  }

  return (
    <StyledNav>
      <Menu right noOverlay disableAutoFocus>
        {home}
        <Link id="about" to="/about" className="menu-item">
          About
        </Link>
        <Link id="clients" to="/clients" className="menu-item">
          Clients
        </Link>
        <Link id="blog" to="/blog" className="menu-item">
          Blog
        </Link>
        <Link id="contact" to="/contact" className="menu-item">
          Contact
        </Link>
        <Link id="store" to="/store" className="menu-item">
          Store
        </Link>
      </Menu>
    </StyledNav>
  )
}

export default Nav
