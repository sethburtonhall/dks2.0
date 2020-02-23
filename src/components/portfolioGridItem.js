import React from 'react';
import { StaticQuery, graphql } from "gatsby"

// Gatsby
import { Link } from 'gatsby'

// Styles
import { StyledPortfolioGridItem } from "../styles/StyledPortfolioGridItem"

const PortfolioGridItem = () => {
  return (
    <StaticQuery
      query={portfolioCoverImage}
      render={data => {
        const { slug } = data.allMdx.edges[0].node.fields
        const { title, thumbnail } = data.allMdx.edges[0].node.frontmatter
        return (
          <StyledPortfolioGridItem>
            <Link to={`portfolio${slug}`}>
              <img src={thumbnail} alt="Portfolio Cover" />
              <h4 className="portfolio-cat">{title}</h4>
            </Link>
          </StyledPortfolioGridItem>
        )
      }}
    />
  )
}

const portfolioCoverImage = graphql`
  query PortfolioCoverImage {
    allMdx(
      filter: { frontmatter: { templateKey: { eq: "portfolio" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
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