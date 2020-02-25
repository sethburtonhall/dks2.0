import React from "react"
import { StaticQuery, graphql } from "gatsby"

// Gatsby
import { Link } from "gatsby"
import Img from "gatsby-image"

// Styles
import { StyledPortfolioGridItem } from "../styles/StyledPortfolioGridItem"

const PortfolioGridItem = () => {
  return (
    <StaticQuery
      query={portfolioCover}
      render={data => {
        const { edges } = data.allMdx
        return (
          <>
            {edges.map(({ node }, index) => (
              <StyledPortfolioGridItem key={index}>
                <Link to={`/portfolio${node.fields.slug}`}>
                  <Img
                    fluid={node.frontmatter.thumbnail.childImageSharp.fluid}
                    durationFadeIn={1500}
                    alt="Portfolio Cover"
                  />
                  <h4 className="portfolio-cat">{node.frontmatter.title}</h4>
                </Link>
              </StyledPortfolioGridItem>
            ))}
          </>
        )
      }}
    />
  )
}

const portfolioCover = graphql`
  query PortfolioCover {
    allMdx(
      filter: { frontmatter: { templateKey: { eq: "portfolio" } } }
      sort: { order: ASC, fields: frontmatter___title }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            thumbnail {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`

export default PortfolioGridItem
