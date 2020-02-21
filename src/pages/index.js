import React, { Component } from "react"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import PortfolioGrid from "../components/portfolioGrid"

class IndexPage extends Component {
  render() {
      const siteTitle = "David K. Stanley Studio"

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

export default IndexPage
