import React from "react"
import { Link, graphql } from "gatsby"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"

import { rhythm } from "../utils/typography"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.nodes

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <div style={{ margin: "20px 0 40px" }}>
          {posts.map((post) => {
            const title = post.frontmatter.title || post.fields.slug
            return (
              <div key={post.fields.slug} className="blog-post">
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link
                    style={{ boxShadow: `none` }}
                    to={`blog${post.fields.slug}`}
                  >
                    {title}
                  </Link>
                </h3>
                <small>{post.frontmatter.date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: post.frontmatter.description || post.excerpt,
                  }}
                />
              </div>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
