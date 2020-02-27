import React, { Component } from "react"

// Gatsby
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// Components
import Nav from "./nav"

// Styles
import { Wrapper, Header, Footer } from "../styles/Layout"

class Layout extends Component {
  render() {
    const { location, children } = this.props
    // const rootPath = `${__PATH_PREFIX__}/`
    // const blogPath = `${__PATH_PREFIX__}/blog/`
    // let header
    // const image = data.file.childImageSharp.fluid

    // if (location.pathname === rootPath || location.pathname === blogPath) {
    //   header = (
    //     <StaticQuery
    //       query={logoQuery}
    //       render={data => {
    //         const image = data.file.childImageSharp.fluid
    //         console.log(data);

    //         return (
    //           <Header>
    //             <h1 className="header">
    //               <Link to={`/`}>
    //                 <Img fluid={image} durationFadeIn={1500} alt="Logo" />
    //               </Link>
    //             </h1>
    //           </Header>
    //         )
    //       }}
    //     />
    //   )
    // } else {
    //   header = (
    //     <StaticQuery
    //       query={logoQuery}
    //       render={data => {
    //         const image = data.file.childImageSharp.fluid
    //         return (
    //           <Header>
    //             <h3 className="header">
    //               <Link to={`/`}>
    //                 <Img fluid={image} durationFadeIn={1500} alt="Logo" />
    //               </Link>
    //             </h3>
    //           </Header>
    //         )
    //       }}
    //     />
    //   )
    // }
    return (
      <>
        <Wrapper>
          <Nav location={location.pathname} />
          <div className="app">
            <StaticQuery
              query={logoQuery}
              render={data => {
                const image = data.file.childImageSharp.fixed
                console.log(image)
                return (
                  <Header>
                    <h3 className="header">
                      <Link to={`/`}>
                        <Img fixed={image} durationFadeIn={1500} alt="Logo" />
                      </Link>
                    </h3>
                  </Header>
                )
              }}
            />
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

const logoQuery = graphql`
  query LogoQuery {
    file(relativePath: { eq: "dks-watermark.png" }) {
      childImageSharp {
        fixed(width: 200, height: 50) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`

export default Layout
