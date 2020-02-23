import React from 'react';
import { StaticQuery, graphql } from "gatsby"

// Gatsby
import { Link } from 'gatsby'

// Styles
import { StyledPortfolioGridItem } from "../styles/StyledPortfolioGridItem"

const PortfolioGridItem = () => {
  return (
    <StaticQuery
      query={portfolioCover}
      render={data => {
        const { slug } = data.allMdx.edges[0].node.fields
        const { edges } = data.allMarkdownRemark
        return (
          <>
            {edges.map(({ node }, index) => (
              <StyledPortfolioGridItem key={index}>
                <Link to={`portfolio${slug}`}>
                  <img src={node.frontmatter.thumbnail} alt="Portfolio Cover" />
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
    allMdx(filter: { frontmatter: { templateKey: { eq: "portfolio" } } }) {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "portfolio" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            thumbnail
          }
        }
      }
    }
  }
`

export default PortfolioGridItem