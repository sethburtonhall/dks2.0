import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

// Styles
import { Container } from "../styles/GlobalStyles"

const Bio = () => {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { social } = data.site.siteMetadata
        const { name, title, intro } = data.allFile.edges[0].node.childMarkdownRemark.frontmatter
        const image = data.file.childImageSharp.fluid
        return (
          <Container>
            {/* <img
              src="/images/david-stanley.jpg"
              alt={author}
            /> */}
            <Img
              fluid={image}
              durationFadeIn={1500}
              alt="Portfolio Cover"
            />
            <h1 className="name">{name}</h1>
            <h4 className="title">{title}</h4>
            <div className="social">
              <a href={`https://www.instagram.com/${social.instagram}`}>
                Instagram
              </a>
              <a href={social.facebook}>Facebook</a>
              <a href={social.linkedin}>LinkedIn</a>
            </div>
            <p>{intro}</p>
          </Container>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        author
        social {
          facebook
          instagram
          linkedin
        }
      }
    }
    allFile(filter: { name: { eq: "about" } }) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              name
              title
              intro
            }
          }
        }
      }
    }
    file(relativePath: { eq: "david-stanley.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default Bio
