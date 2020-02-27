import React, { Component } from "react"
import { graphql } from "gatsby"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import Clients from "../components/clientList"
import Testimonials from "../components/testimonials"

class Client extends Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Clients"
          keywords={[`Illustration`, `Painting`, `North Carolina`]}
        />
        <Testimonials />
        <Clients />
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

export default Client
