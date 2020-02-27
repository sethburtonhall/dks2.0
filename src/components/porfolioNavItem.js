// as of now I am not useing this component but keeping it around if I want to implement later
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
        const { navItems } = data.allMdx.nodes
        return (
          <>
            {navItems.map((navItem, index) => (
              <StyledPortfolioNavItem key={index}>
                <Link
                  to={`/portfolio${navItem.fields.slug}`}
                  activeClassName="active"
                >
                  {navItem.frontmatter.title}
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
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    }
  }
`

export default PortfolioNavItem
