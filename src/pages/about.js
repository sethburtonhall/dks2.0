import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"

class About extends Component {
  render() {
    const siteTitle = "David K. Stanley Studio"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="About"
          keywords={[`Illustration`, `Painting`, `North Carolina`]}
        />
        <Bio />
      </Layout>
    )
  }
}

export default About
