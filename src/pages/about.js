import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"
import ImageTest from "../components/imageTest"

class About extends Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="About"
          keywords={[`Illustration`, `Painting`, `North Carolina`]}
        />
        <ImageTest testImage={this.props.data.testImage} />
        <Bio />
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
    testImage: imageSharp {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

export default About
