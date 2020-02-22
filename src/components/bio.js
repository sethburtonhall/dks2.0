import React from "react"
// import { StaticQuery, graphql } from "gatsby"

// Styles
import { Container } from "../styles/GlobalStyles"

const Bio = () => {
  return (
    // <StaticQuery
    //   query={bioQuery}
    //   render={data => {
    //     const { author, social } = data.site.siteMetadata
    //     const { name, title, intro } = data.allFile.edges[0].node.childMarkdownRemark.frontmatter
    //     return (
    //       <Container>
    //         <img
    //           src="/assets/david-stanley.jpg"
    //           alt={author}
    //         />
    //         <h1 className="name">{name}</h1>
    //         <h4 className="title">{title}</h4>
    //         <div className="social">
    //           <a href={`https://www.instagram.com/${social.instagram}`}>
    //             Instagram
    //           </a>
    //           <a href={social.facebook}>Facebook</a>
    //           <a href={social.linkedin}>LinkedIn</a>
    //         </div>
    //         <p>{intro}</p>
    //       </Container>
    //     )
    //   }}
    // />

    <div>test</div>
  )
}

// const bioQuery = graphql`
//   query BioQuery {
//     site {
//       siteMetadata {
//         author
//         social {
//           facebook
//           instagram
//           linkedin
//         }
//       }
//     }
//     allFile(filter: { name: { eq: "about" } }) {
//       edges {
//         node {
//           childMarkdownRemark {
//             frontmatter {
//               name
//               title
//               intro
//             }
//           }
//         }
//       }
//     }
//   }
// `

export default Bio
