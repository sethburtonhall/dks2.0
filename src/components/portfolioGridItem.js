import React from "react"
import { StaticQuery, graphql } from "gatsby"

// Gatsby
import { Link } from "gatsby"

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
                  <img src={node.frontmatter.thumbnail.childImageSharp.fluid.src} alt="Portfolio Cover" />
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
      sort: { order: ASC, fields: id }
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
                fluid(maxWidth: 630) {
                  src
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
