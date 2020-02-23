import React from "react"
import { graphql } from "gatsby"
// import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import { rhythm, scale } from "../utils/typography"

class PortfolioTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        {/* <h1>{post.frontmatter.title}</h1> */}
        <h1>Portfolio Template</h1>
      </Layout>
    )
  }
}

export default PortfolioTemplate

export const pageQuery = graphql`
  query Portfolio($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
