import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import { rhythm, scale } from "../utils/typography"

class PortfolioTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    // console.log(post)
    // console.log(siteTitle)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.description}</p>
        <MDXRenderer>{post.body}</MDXRenderer>
      </Layout>
    )
  }
}

export const query = graphql`
  query Portfolio {
    site {
      siteMetadata {
        title
      }
    }
    mdx(frontmatter: { templateKey: { eq: "portfolio" } }) {
      id
      body
      frontmatter {
        title
        description
      }
    }
  }
`

export default PortfolioTemplate
