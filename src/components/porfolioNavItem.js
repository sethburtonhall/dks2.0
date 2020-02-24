import React from "react"
import { StaticQuery, graphql } from "gatsby"

// Gatsby
import { Link } from "gatsby"

// Styles
import { StyledPortfolioNavItem } from "../styles/StyledPortfolioNav"

const PortfolioNavItem = () => {
  return (
    <StaticQuery
      query={portfolioItems}
      render={data => {
        const { edges } = data.allMdx
        return (
          <>
            {edges.map(({ node }, index) => (
              <StyledPortfolioNavItem key={index}>
                <Link
                  to={`/portfolio${node.fields.slug}`}
                  activeClassName="active"
                >
                  {node.frontmatter.title}
                </Link>
              </StyledPortfolioNavItem>
            ))}
          </>
        )
      }}
    />
  )
}

const portfolioItems = graphql`
  query PortfolioItems {
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
          }
        }
      }
    }
  }
`

export default PortfolioNavItem
