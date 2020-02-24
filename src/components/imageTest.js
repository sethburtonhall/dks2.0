import React from "react"
import Img from "gatsby-image"
// import { StaticQuery, graphql } from 'gatsby'

const ImageTest = props => (
  <Img
    title="Header image"
    alt="Greek food laid out on table"
    sizes={props.testImage.sizes}
  />
)

const ImageTestQuery = graphql`
  query ImageTest {
    testImage: imageSharp {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
export default ImageTest
// export default () => (
//   <StaticQuery query={ImageTestQuery} render={data => <ImageTest data={data} />} />
// )

/* <ImageTest data={data} /> */
