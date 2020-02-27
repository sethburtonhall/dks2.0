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
        const { portfolioItems } = data.allMdx
        return (
          <>
            {portfolioItems.map((portfolioItem, index) => (
              <StyledPortfolioGridItem key={index}>
                <Link to={`/portfolio${portfolioItem.fields.slug}`}>
                  <Img
                    fluid={portfolioItem.frontmatter.thumbnail.childImageSharp.fluid}
                    durationFadeIn={1500}
                    alt="Portfolio Cover"
                  />
                  <h4 className="portfolio-cat">{portfolioItem.frontmatter.title}</h4>
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
      portfolioItems: nodes {
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
`

export default PortfolioGridItem
