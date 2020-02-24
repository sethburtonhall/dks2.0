import React from "react"
import Img from "gatsby-image"

const Image = props => (
  <Img
    title="Header image"
    alt="Greek food laid out on table"
    sizes={props.testImage.sizes}
  />
)

export default Image
