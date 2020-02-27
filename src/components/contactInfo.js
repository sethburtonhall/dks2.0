import React from "react"
import { StaticQuery, graphql } from "gatsby"

// Styles
import { Container } from "../styles/GlobalStyles"

const ContactInfo = () => {
  return (
    <StaticQuery
      query={contactQuery}
      render={data => {
        const {
          email,
          phone,
        } = data.allFile.nodes[0].childMarkdownRemark.frontmatter
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
      nodes {
        childMarkdownRemark {
          frontmatter {
            email
            phone
          }
        }
      }
    }
  }
`

export default ContactInfo
