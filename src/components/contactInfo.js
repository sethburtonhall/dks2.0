import React from "react"
import { StaticQuery, graphql } from "gatsby"

// Styles
import { Container } from "../styles/GlobalStyles"

const ContactInfo = () => {
  return (
    <StaticQuery
      query={contactQuery}
      render={data => {
        const { email, phone } = data.allFile.edges[0].node.childMarkdownRemark.frontmatter
        return (
          <Container>
            <div className="contact">
              <div>{email}</div>
              <div>{phone}</div>
            </div>
          </Container>
        )
      }}
    />
  )
}

const contactQuery = graphql`
  query ContactQuery {
    allFile(filter: { name: { eq: "contact" } }) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              email
              phone
            }
          }
        }
      }
    }
  }
`

export default ContactInfo
