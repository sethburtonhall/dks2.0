import React from "react"
import { StaticQuery, graphql } from "gatsby"

// Styles
import { Container } from "../styles/GlobalStyles"

const Clients = () => {
  return (
    <StaticQuery
      query={clientQuery}
      render={data => {
        const { client } = data.allFile.edges[0].node.childMarkdownRemark.frontmatter
        return (
          <Container>
            <h1>Clients</h1>
            <ul>
              {client.map((c, index) => (
                <li key={index}>{c.clientName}</li>
              ))}
            </ul>
          </Container>
        )
      }}
    />
  )
}

const clientQuery = graphql`
  query ClientQuery {
    allFile(filter: { name: { eq: "clients" } }) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              client {
                clientName
              }
            }
          }
        }
      }
    }
  }
`

export default Clients
