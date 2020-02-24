const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// Create Blog Post & Portfolio Pages
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve(`./src/templates/blog-post.js`)
  const portfolioTemplate = path.resolve(`./src/templates/portfolio.js`)
  return graphql(
    `
      {
        blogs: allMdx(
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
        portfolios: allMdx(
          filter: { frontmatter: { templateKey: { eq: "portfolio" } } }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post page.
    const posts = result.data.blogs.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: `blog${post.node.fields.slug}`,
        component: blogTemplate,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    // Create portfolio page.
    const portfolio = result.data.portfolios.edges

    portfolio.forEach((post, index) => {
      const previous =
        index === portfolio.length - 1 ? null : portfolio[index + 1].node
      const next = index === 0 ? null : portfolio[index - 1].node

      createPage({
        path: `portfolio${post.node.fields.slug}`,
        component: portfolioTemplate,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    return null
  })
}

const { fmImagesToRelative } = require("gatsby-remark-relative-images")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node)
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
