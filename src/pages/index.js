import React, { Component } from "react"
import { graphql } from "gatsby"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import PortfolioGrid from "../components/portfolioGrid"

class IndexPage extends Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`Illustration`, `Painting`, `North Carolina`]}
        />
        <PortfolioGrid />
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default IndexPage
