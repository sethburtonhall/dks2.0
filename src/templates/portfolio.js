import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
// import PortfolioNav from "../components/porfolioNav"
import Pagination from "../components/pagination"

// import { rhythm, scale } from "../utils/typography"

class PortfolioTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    console.log(this.props.pageContext)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        {/* <PortfolioNav /> */}
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.description}</p>
        <MDXRenderer>{post.body}</MDXRenderer>
        <Pagination previous={next} next={previous} type="portfolio" />
      </Layout>
    )
  }
}

export const query = graphql`
  query Portfolio($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(
      frontmatter: { templateKey: { eq: "portfolio" } }
      fields: { slug: { eq: $slug } }
    ) {
      id
      body
      frontmatter {
        title
        description
      }
    }
    allFile {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
`

export default PortfolioTemplate
